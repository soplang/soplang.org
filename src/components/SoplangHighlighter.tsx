"use client";

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // You can choose a different theme

// Define Soplang language for Prism
const defineSoplangLanguage = () => {
  Prism.languages.soplang = {
    'comment': [
      {
        pattern: /\/\*[\s\S]*?\*\//,
        greedy: true
      },
      {
        pattern: /\/\/.*/,
        greedy: true
      }
    ],
    'string': {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'keyword': /\b(?:door|howl|soo_celi|qor|akhri|haddii|haddii_kale|haddii_kalena|ku_celi|inta_ay|jooji|sii_wad|isku_day|qabo|ka_keen|fasalka|ka_dhaxal|cusub|nafta|liis|shey|waxba|run|been)\b/,
    'boolean': /\b(?:run|been)\b/,
    'function': /\b[a-z_]\w*(?=\s*\()/i,
    'number': /\b\d+(?:\.\d+)?\b/,
    'operator': /[+\-*\/=<>!&|]+/,
    'punctuation': /[{}[\];(),.:]/
  };
};

interface SoplangHighlighterProps {
  code: string;
  className?: string;
}

const SoplangHighlighter: React.FC<SoplangHighlighterProps> = ({ code, className = '' }) => {
  useEffect(() => {
    // Define language and highlight all code blocks
    defineSoplangLanguage();
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`language-soplang ${className}`}>
      <code className="language-soplang">{code}</code>
    </pre>
  );
};

export default SoplangHighlighter; 