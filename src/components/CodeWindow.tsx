'use client';

import React, { useState, useEffect } from 'react';
import SoplangHighlighter from './SoplangHighlighter';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-powershell';
import 'prismjs/themes/prism-tomorrow.css';

// Initialize Prism for syntax highlighting
if (typeof window !== 'undefined') {
  Prism.manual = true;
}

// Define line types for better type safety
type LineType = 'command' | 'comment' | 'empty' | 'text';

interface CodeWindowProps {
  code: string;
  title?: string;
  className?: string;
  language?: string;
  shawlineNumbers?: boolean;
}

/**
 * CodeWindow component - Displays code with syntax highlighting in a macOS-style window
 * Supports both Soplang code and terminal commands with special formatting
 */
const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  title = 'main.sop',
  className = '',
  language = 'soplang',
  shawlineNumbers = false,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  // Determine the type of line for styling purposes
  const getLineType = (line: string): LineType => {
    if (line.startsWith('$') || line.startsWith('>')) return 'command';
    if (line.startsWith('//')) return 'comment';
    if (line.trim() === '') return 'empty';
    return 'text';
  };

  // Apply syntax highlighting to command
  const highlightCommand = (command: string, shell: 'bash' | 'powershell') => {
    // Extract the command part (without the prompt)
    const commandText = command.substring(1).trim();

    // Apply Prism highlighting
    const language = shell === 'bash' ? 'bash' : 'powershell';
    const html = Prism.highlight(commandText, Prism.languages[language], language);

    return html;
  };

  // Render a single line based on its type
  const renderLine = (line: string, index: number) => {
    const lineType = getLineType(line);

    switch (lineType) {
      case 'command':
        const isWindows = line.startsWith('>');
        const shell = isWindows ? 'powershell' : 'bash';
        const highlightedCommand = highlightCommand(line, shell);

        return (
          <div key={index} className="mb-2">
            <span className="text-green-500">{line.charAt(0)}</span>
            <span
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: highlightedCommand }}
            />
          </div>
        );
      case 'comment':
        return (
          <div key={index} className="mt-2 mb-1 text-green-800">
            {line}
          </div>
        );
      case 'empty':
        return <div key={index} className="mb-2"></div>;
      case 'text':
        return (
          <div key={index} className="mb-1 text-gray-400">
            {line}
          </div>
        );
    }
  };

  // Custom renderer for terminal content
  const renderTerminalContent = () => {
    const lines = code.split('\n');
    return (
      <div className="p-4 font-mono text-sm">
        {lines.map((line, index) => renderLine(line, index))}
      </div>
    );
  };

  // Copy code to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`code-window rounded-lg overflow-hidden shadow-lg ${className}`}>
      {/* macOS style window header */}
      <div className="code-window-header bg-[#1e1e1e] px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="font-mono text-xs text-gray-300 window-title">{title}</div>
        <button
          onClick={handleCopy}
          className="px-2 py-1 text-xs text-gray-300 transition-colors bg-gray-700 rounded hover:bg-gray-600"
        >
          {copySuccess ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code content with proper syntax highlighting */}
      <div className="overflow-x-auto bg-[#1e1e1e] text-gray-300">
        {title === 'terminal' ? renderTerminalContent() : <SoplangHighlighter code={code} />}
      </div>
    </div>
  );
};

export default CodeWindow;
