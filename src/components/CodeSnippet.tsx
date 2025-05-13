'use client'

import React, { useState } from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
  title?: string;
}

/**
 * A reusable component for displaying code snippets in documentation
 * with a macOS style window header
 */
const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  code, 
  language = 'bash',
  showLineNumbers = false,
  className = '',
  title = 'terminal',
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
    <div className={`code-window rounded-lg overflow-hidden shadow-md my-4 ${className}`}>
      {/* macOS style window header */}
      <div className="code-window-header bg-gray-800 dark:bg-[#1e1e1e] px-4 py-2 flex items-center justify-between">
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

      {/* Code content */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto border-t border border-gray-200 rounded-bl-lg rounded-br-lg dark:border-gray-700">
        <code className={`block font-mono text-sm ${showLineNumbers ? 'line-numbers' : ''}`} data-language={language}>
          {code}
        </code>
      </div>
    </div>
  );
};

export default CodeSnippet;
