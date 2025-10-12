/*
------------------
Soplang Syntax Highlighter
------------------
Written by:
- Omar Jibril Abdulkadir
- GitHub: https://github.com/omartood
------------------
*/

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface TokenStyle {
  color: string;
}

interface Token {
  type: string;
  content: string;
  style: TokenStyle;
}

// Define token types and styles for Soplang
const tokenStyles: Record<string, TokenStyle> = {
  keyword: { color: "#569CD6" },
  string: { color: "#CE9178" },
  comment: { color: "#6A9955" },
  function: { color: "#DCDCAA" },
  number: { color: "#B5CEA8" },
  operator: { color: "#D4D4D4" },
  punctuation: { color: "#D4D4D4" },
  variable: { color: "#9CDCFE" },
  default: { color: "#D4D4D4" },
};

// Keywords for Soplang language
const keywords = [
  "door",
  "tiro",
  "qoraal",
  "labadaran",
  "shey",
  "liis",
  "waxba",
  "haddii",
  "haddii_kale",
  "haddii_kalena",
  "ku_celi",
  "inta_ay",
  "jooji",
  "sii_wad",
  "min",
  "ilaa",
  "hawl",
  "celi",
  "isku_day",
  "qabo",
  "fasalka",
  "nafta",
  "ka_dhaxal",
  "cusub",
  "qor",
  "akhri",
];

function tokenizeSoplangCode(code: string): Token[] {
  const tokens: Token[] = [];
  let position = 0;

  function isAlpha(char: string): boolean {
    return /[a-zA-Z_]/.test(char);
  }

  function isAlphaNumeric(char: string): boolean {
    return /[a-zA-Z0-9_]/.test(char);
  }

  function isDigit(char: string): boolean {
    return /[0-9]/.test(char);
  }

  function peek(): string {
    return code[position] || "";
  }

  function peekNext(): string {
    return code[position + 1] || "";
  }

  function advance(): string {
    return code[position++] || "";
  }

  function addToken(type: string, content: string) {
    tokens.push({
      type,
      content,
      style: tokenStyles[type] || tokenStyles.default,
    });
  }

  while (position < code.length) {
    const char = advance();

    // Handle comments
    if (char === "/" && peek() === "/") {
      let comment = char;
      while (peek() !== "\n" && position < code.length) {
        comment += advance();
      }
      addToken("comment", comment);
      continue;
    }

    // Handle strings
    if (char === '"' || char === "'") {
      let string = char;
      while (
        (peek() !== char || (peek() === char && peekNext() === char)) &&
        position < code.length
      ) {
        if (peek() === "\\" && peekNext() === char) {
          string += advance(); // Add the escape character
        }
        string += advance();
      }
      if (position < code.length) {
        string += advance(); // Closing quote
      }
      addToken("string", string);
      continue;
    }

    // Handle numbers
    if (isDigit(char)) {
      let number = char;
      while (isDigit(peek()) || peek() === ".") {
        number += advance();
      }
      addToken("number", number);
      continue;
    }

    // Handle identifiers and keywords
    if (isAlpha(char)) {
      let identifier = char;
      while (isAlphaNumeric(peek())) {
        identifier += advance();
      }

      // Check if it's a function definition
      if (identifier === "hawl" || identifier === "fasalka") {
        addToken("keyword", identifier);
        let ws = "";
        while (peek() === " " || peek() === "\t") {
          ws += advance();
        }
        addToken("default", ws);

        // Get the function name
        let functionName = "";
        while (isAlphaNumeric(peek())) {
          functionName += advance();
        }
        addToken("function", functionName);
        continue;
      }

      // Check if it's a function call
      let nextNonSpace = position;
      while (code[nextNonSpace] === " " || code[nextNonSpace] === "\t") {
        nextNonSpace++;
      }
      if (code[nextNonSpace] === "(") {
        addToken("function", identifier);
        continue;
      }

      // Check if it's a keyword
      if (keywords.includes(identifier)) {
        addToken("keyword", identifier);
      } else {
        addToken("variable", identifier);
      }
      continue;
    }

    // Handle operators
    if (/[+\-*/%=<>!&|^]/.test(char)) {
      let operator = char;
      while (/[+\-*/%=<>!&|^]/.test(peek())) {
        operator += advance();
      }
      addToken("operator", operator);
      continue;
    }

    // Handle punctuation
    if (/[(){}[\];,.]/.test(char)) {
      addToken("punctuation", char);
      continue;
    }

    // Handle whitespace
    if (/\s/.test(char)) {
      let whitespace = char;
      while (/\s/.test(peek())) {
        whitespace += advance();
      }
      addToken("default", whitespace);
      continue;
    }

    // Handle any other character
    addToken("default", char);
  }

  return tokens;
}

interface SoplangHighlighterProps {
  code: string;
  language?: string;
  filename?: string;
  showCopy?: boolean;
}

export default function SoplangHighlighter({
  code,
  showCopy = true,
}: SoplangHighlighterProps) {
  const tokens = tokenizeSoplangCode(code);
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyCode() {
    if (!isCopied) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    }
  }

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        background: "#23272e",
        margin: "1.5em 0",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#181a20",
          padding: "0.5em 1em",
          borderBottom: "1px solid #23272e",
        }}
      >
        <div style={{ display: "flex", gap: "0.4em", marginRight: "1em" }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f56",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffbd2e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#27c93f",
              display: "inline-block",
            }}
          />
        </div>
        <span
          style={{
            color: "#c9d1d9",
            fontSize: "1em",
            fontWeight: 500,
            flex: 1,
          }}
        >
          file-name.sop
        </span>
        {showCopy && (
          <span style={{ marginLeft: "auto" }}>
            {isCopied ? (
              <Check style={{ color: "#27c93f", verticalAlign: "middle" }} />
            ) : (
              <Copy
                className="cursor-pointer align-middle text-white/50"
                onClick={handleCopyCode}
              />
            )}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "Fira Mono, Menlo, Monaco, Consolas, monospace",
          fontSize: "1.1em",
          padding: "1.1em",
          background: "#23272e",
          minHeight: "2.5em",
          whiteSpace: "pre-wrap",
        }}
      >
        {tokens.map((token, idx) => (
          <span key={idx} style={{ color: token.style.color }}>
            {token.content}
          </span>
        ))}
      </div>
    </div>
  );
}
