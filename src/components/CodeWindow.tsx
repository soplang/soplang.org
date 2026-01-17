'use client';

import React, { useState } from 'react';
import SoplangHighlighter from './SoplangHighlighter';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-powershell';
import { Icon } from '@/components/ui/icon';

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
  showLineNumbers?: boolean;
}

/**
 * CodeWindow component - Displays code with syntax highlighting in a Windows-style window
 * Supports both Soplang code and terminal commands with special formatting
 */
const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  title = 'main.sop',
  className = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  language = 'soplang',
  showLineNumbers = true,
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
        // For terminal view, we render full lines
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
      <div className="p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, index) => renderLine(line, index))}
      </div>
    );
  };

  // Generate line numbers
  const renderLineNumbers = () => {
    const lines = code.split('\n');
    return (
      <div className="flex flex-col text-right pr-4 select-none text-muted-foreground/30 text-sm pt-4 pb-4 bg-[#15151a] border-r border-white/5 font-mono leading-relaxed min-h-full">
        {lines.map((_, i) => (
          <span key={i} className="px-3">
            {i + 1}
          </span>
        ))}
      </div>
    );
  };

  // Copy code to clipboard
  const handleCopy = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(code);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    } else {
      // fallback(document.execCommand('copy')) for mobile
      try {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
  }

  const isTerminal = title === 'terminal';

  return (
    <div className={`w-full rounded-xl overflow-hidden bg-[#15151a] border border-white/10 shadow-2xl ${className}`}>
      {/* Windows style window header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#15151a] border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-gray-300 font-mono px-2 py-0.5 bg-black/20 rounded border border-white/5">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="px-2 py-0.5 text-[10px] text-gray-400 font-mono transition-colors bg-white/5 rounded hover:bg-white/10 border border-white/5 mr-2"
          >
            {copySuccess ? <Icon icon="lucide:check" className="w-3 h-3 text-green-400" /> : <Icon icon="lucide:copy" className="w-3 h-3 text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Code content with proper syntax highlighting */}
      <div className="flex overflow-x-auto bg-[#15151a] text-gray-300 ">
        {showLineNumbers && !isTerminal && renderLineNumbers()}
        <div className="flex-1 w-full px-2">
          {isTerminal ? renderTerminalContent() : <SoplangHighlighter code={code} className={showLineNumbers ? "pl-0" : ""} />}
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;
