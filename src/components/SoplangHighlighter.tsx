'use client';

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
  keyword: { color: '#569CD6' },
  string: { color: '#CE9178' },
  comment: { color: '#6A9955' },
  function: { color: '#DCDCAA' },
  number: { color: '#B5CEA8' },
  operator: { color: '#D4D4D4' },
  punctuation: { color: '#D4D4D4' },
  variable: { color: '#9CDCFE' },
  default: { color: '#D4D4D4' },
};

// Keywords for Soplang language
const keywords = [
  'door',
  'tiro',
  'qoraal',
  'labadaran',
  'shey',
  'liis',
  'waxba',
  'haddii',
  'haddii_kale',
  'haddii_kalena',
  'ku_celi',
  'inta_ay',
  'jooji',
  'sii_wad',
  'min',
  'ilaa',
  'howl',
  'soo_celi',
  'isku_day',
  'qabo',
  'fasalka',
  'nafta',
  'ka_dhaxal',
  'cusub',
  'qor',
  'akhri',
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
    return code[position] || '';
  }

  function peekNext(): string {
    return code[position + 1] || '';
  }

  function advance(): string {
    return code[position++] || '';
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
    if (char === '/' && peek() === '/') {
      let comment = char;
      while (peek() !== '\n' && position < code.length) {
        comment += advance();
      }
      addToken('comment', comment);
      continue;
    }

    // Handle strings
    if (char === '"' || char === "'") {
      let string = char;
      while (
        (peek() !== char || (peek() === char && peekNext() === char)) &&
        position < code.length
      ) {
        if (peek() === '\\' && peekNext() === char) {
          string += advance(); // Add the escape character
        }
        string += advance();
      }
      if (position < code.length) {
        string += advance(); // Closing quote
      }
      addToken('string', string);
      continue;
    }

    // Handle numbers
    if (isDigit(char)) {
      let number = char;
      while (isDigit(peek()) || peek() === '.') {
        number += advance();
      }
      addToken('number', number);
      continue;
    }

    // Handle identifiers and keywords
    if (isAlpha(char)) {
      let identifier = char;
      while (isAlphaNumeric(peek())) {
        identifier += advance();
      }

      // Check if it's a function definition
      if (identifier === 'howl' || identifier === 'fasalka') {
        addToken('keyword', identifier);
        let ws = '';
        while (peek() === ' ' || peek() === '\t') {
          ws += advance();
        }
        addToken('default', ws);

        // Get the function name
        let functionName = '';
        while (isAlphaNumeric(peek())) {
          functionName += advance();
        }
        addToken('function', functionName);
        continue;
      }

      // Check if it's a function call
      let nextNonSpace = position;
      while (code[nextNonSpace] === ' ' || code[nextNonSpace] === '\t') {
        nextNonSpace++;
      }
      if (code[nextNonSpace] === '(') {
        addToken('function', identifier);
        continue;
      }

      // Check if it's a keyword
      if (keywords.includes(identifier)) {
        addToken('keyword', identifier);
      } else {
        addToken('variable', identifier);
      }
      continue;
    }

    // Handle operators
    if (/[+\-*/%=<>!&|^]/.test(char)) {
      let operator = char;
      while (/[+\-*/%=<>!&|^]/.test(peek())) {
        operator += advance();
      }
      addToken('operator', operator);
      continue;
    }

    // Handle punctuation
    if (/[(){}[\];,.]/.test(char)) {
      addToken('punctuation', char);
      continue;
    }

    // Handle whitespace
    if (/\s/.test(char)) {
      let whitespace = char;
      while (/\s/.test(peek())) {
        whitespace += advance();
      }
      addToken('default', whitespace);
      continue;
    }

    // Handle any other character
    addToken('default', char);
  }

  return tokens;
}

interface SoplangHighlighterProps {
  code: string;
  title?: string;
}

export default function SoplangHighlighter({ code }: SoplangHighlighterProps) {
  const tokens = tokenizeSoplangCode(code);

  return (
    <pre className="p-4 text-sm font-mono whitespace-pre leading-relaxed">
      {tokens.map((token, index) => (
        <span key={index} style={{ color: token.style.color }}>
          {token.content}
        </span>
      ))}
    </pre>
  );
}
