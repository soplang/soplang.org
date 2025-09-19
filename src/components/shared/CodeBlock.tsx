/*
------------------
CodeBlock Component
------------------
A reusable component for displaying Soplang code with syntax highlighting
------------------
*/

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import Logo from "../../../static/icons/logo.svg";
import SoplangHighlighter from "./SoplangHighlighter";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  title,
  className = "",
}) => {
  /*
  ------------------
  Copy-to-clipboard state
  ------------------
  */
  const [copied, setCopied] = useState(false);

  /*
  ------------------
  Handle copy action
  ------------------
  */
  const handleCopy = async () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const el = document.createElement("textarea");
        el.value = code;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };

  return (
    <div className={`my-6 ${className}`}>
      <div className="group overflow-hidden rounded-2xl border border-gray-700  shadow-md">
        {/* Header */}
        <div
          style={{ backgroundColor: "#101012" }}
          className="flex items-center justify-between border-b border-gray-800 p-2"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-wide text-slate-500">
            {title ? <Logo width={20} height={20} /> : null}
            <span>{title || ""}</span>
          </div>
          <button
            onClick={handleCopy}
            className="group inline-flex h-[35px] cursor-pointer items-center gap-2 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-900"
            aria-label="Copy code to clipboard"
            type="button"
          >
            <span className="tabular-nums">
              {copied ? (
                <Check className="text-emerald-500 font-mono" />
              ) : (
                <Copy />
              )}
            </span>
          </button>
        </div>

        {/* Body */}
        <div>
          <div className="overflow-x-auto">
            <SoplangHighlighter code={code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
