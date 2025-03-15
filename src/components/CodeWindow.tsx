"use client";

import React from 'react';
import SoplangHighlighter from './SoplangHighlighter';

interface CodeWindowProps {
  code: string;
  title?: string;
  className?: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({ 
  code, 
  title = 'main.so', 
  className = '' 
}) => {
  return (
    <div className={`code-window rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div className="code-window-header bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="window-button red w-3 h-3 rounded-full bg-red-500"></div>
          <div className="window-button yellow w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="window-button green w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="window-title text-xs sm:text-sm text-gray-300 font-mono">{title}</div>
      </div>
      <div className="overflow-x-auto text-sm sm:text-base">
        <SoplangHighlighter code={code} />
      </div>
    </div>
  );
};

export default CodeWindow; 