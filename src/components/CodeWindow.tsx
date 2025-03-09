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
    <div className={`code-window ${className}`}>
      <div className="code-window-header">
        <div className="window-button red"></div>
        <div className="window-button yellow"></div>
        <div className="window-button green"></div>
        <div className="window-title">{title}</div>
      </div>
      <SoplangHighlighter code={code} />
    </div>
  );
};

export default CodeWindow; 