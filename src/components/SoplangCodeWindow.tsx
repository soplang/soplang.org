"use client";

import React, { useState } from "react";
import SoplangHighlighter from "./SoplangHighlighter";

interface CodeWindowProps {
  code: string;
  title?: string;
  className?: string;
}

/**
 * A reusable component for displaying Soplang code with syntax highlighting
 * with a macOS style window header
 */
const CodeWindow: React.FC<CodeWindowProps> = ({ code, title = "main.sop", className = "" }) => {
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
    <div className={`code-window rounded-lg overflow-hidden shadow-md my-4 ${className}`}>
      {/* macOS style window header */}
      <div className="code-window-header bg-gray-800 dark:bg-[#1e1e1e] px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full window-button close"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full window-button minimize"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full window-button maximize"></div>
        </div>
        <div className="font-mono text-xs text-gray-300 window-title">{title}</div>
        <button
          onClick={handleCopy}
          className="px-2 py-1 text-xs text-gray-300 transition-colors bg-gray-700 rounded hover:bg-gray-600"
        >
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code content with Soplang syntax highlighting */}
      <div className="bg-[#1e1e1e] dark:bg-[#1e1e1e] overflow-x-auto rounded-bl-lg rounded-br-lg dark:border-gray-700">
        <SoplangHighlighter code={code} />
      </div>
    </div>
  );
};

export default CodeWindow;
