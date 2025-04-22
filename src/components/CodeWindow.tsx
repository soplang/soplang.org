"use client";

import React, { useState } from "react";
import SoplangHighlighter from "./SoplangHighlighter";

interface CodeWindowProps {
  code: string;
  title?: string;
  className?: string;
  language?: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  title = "main.sop",
  className = "",
  language = "soplang",
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={`code-window rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      {/* macOS style window header */}
      <div className="code-window-header bg-[#1e1e1e] px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="window-button close w-3 h-3 rounded-full bg-red-500"></div>
          <div className="window-button minimize w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="window-button maximize w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="window-title text-xs text-gray-300 font-mono">
          {title}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code content with proper syntax highlighting */}
      <div className="overflow-x-auto bg-[#1e1e1e] text-gray-300">
        <SoplangHighlighter code={code} />
      </div>
    </div>
  );
};

export default CodeWindow;
