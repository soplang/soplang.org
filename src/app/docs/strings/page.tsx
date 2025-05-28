import React from 'react';
import CodeWindow from '@/components/CodeWindow';
import DocNavigation from '@/components/DocNavigation';

export const metadata = {
  title: 'Strings in Soplang',
  description:
    'Learn about string operations, formatting, and manipulation in the Soplang programming language.',
};

export default function StringsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Strings in Soplang</h1>
      <p className="mb-8 text-xl lead">
        Strings in Soplang are sequences of characters used to represent text. Soplang provides a
        rich set of operations and methods for working with strings, making text manipulation
        intuitive and powerful.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#string-creation" className="text-primary hover:underline">
              String Creation
            </a>
          </li>
          <li>
            <a href="#string-operations" className="text-primary hover:underline">
              Basic String Operations
            </a>
          </li>
          <li>
            <a href="#string-methods" className="text-primary hover:underline">
              String Methods
            </a>
          </li>
          <li>
            <a href="#string-formatting" className="text-primary hover:underline">
              String Formatting
            </a>
          </li>
          <li>
            <a href="#string-escape" className="text-primary hover:underline">
              Escape Sequences
            </a>
          </li>
          <li>
            <a href="#string-best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* String Creation */}
      <section id="string-creation">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          String Creation
        </h2>

        <p className="mb-4">
          In Soplang, strings can be created using single{' '}
          <code className="px-1 rounded-md bg-blue-400/35">'</code> quotes, double{' '}
          <code className="px-1 rounded-md bg-blue-400/35">"</code> quotes, or triple{' '}
          <code className="rounded-md px- bg-blue-400/35">'''</code> quotes for multi-line strings.
          The <code className="px-1 rounded-md bg-blue-400/35">qoraal</code> keyword is used for
          static typing of strings, which comes from the Somali word for "text".
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">String Literals</h3>
        <CodeWindow
          code={`// String literals with single quotes
door single_quoted = 'Hello, Soplang!'

// String literals with double quotes
door double_quoted = "Hello, Soplang!"

// Multi-line strings with triple quotes
door multi_line = """This is a multi-line string.
It can span multiple lines.
No need for escape characters at line breaks."""
`}
          title="string_literals.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Empty and Special Strings</h3>
        <CodeWindow
          code={`// Empty string
door empty = ""

// String with spaces
door spaces = "   "

// String with special characters
door special = "★ Soplang ★"

// Unicode characters
door unicode = "नमस्ते" // Hindi
door arabic = "مرحبا"   // Arabic
door somali = "Soo dhowow"  // Somali`}
          title="special_strings.sop"
        />
      </section>

      {/* Basic String Operations */}
      <section id="string-operations" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Basic String Operations
        </h2>

        <h3 className="mt-6 mb-4 text-xl font-bold">Concatenation</h3>
        <p className="mb-4">
          Strings can be combined using the <code>+</code> operator.
        </p>

        <CodeWindow
          code={`// String concatenation
door first_name = "Mohamed"
door last_name = "Ali"

// Using + operator
door full_name = first_name + " " + last_name
qor(full_name)  // Mohamed Ali

// Concatenation with other types
door age = 30
door message = first_name + " is " + qoraal(age) + " years old"
qor(message)  // Mohamed is 30 years old`}
          title="string_concatenation.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">String Repetition</h3>
        <p className="mb-4">
          Strings can be repeated using the <code>*</code> operator.
        </p>

        <CodeWindow
          code={`// String repetition
door star = "*"
door line = star * 10
qor(line)  // **********

// Useful for creating separators
door separator = "-" * 20
qor(separator)  // --------------------

// Combining repetition with concatenation
door header = "| " + "Title " + "|"
door border = "+" + "-" * (header.dherer() - 2) + "+"

qor(border)  // +-------+
qor(header)  // | Title |
qor(border)  // +-------+`}
          title="string_repetition.sop"
        />
      </section>

      {/* String Methods */}
      <section id="string-methods" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          String Methods
        </h2>

        <p className="mb-4">
          Soplang provides a rich set of methods for string manipulation. These methods do not
          modify the original string but return a new string.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Case Conversion</h3>
        <CodeWindow
          code={`// Case conversion methods
door text = "Soplang Programming Language"

// Converting to uppercase
door upper = text.kor_dhig()
qor(upper)  // SOPLANG PROGRAMMING LANGUAGE

// Converting to lowercase
door lower = text.yar_dhig()
qor(lower)  // soplang programming language

// Title case (capitalize first letter of each word)
door title = text.cinwaan_dhig()
qor(title)  // Soplang Programming Language

// Capitalize (only first letter of string)
door capitalized = "hello world".weyn_dhig_bilowga()
qor(capitalized)  // Hello world`}
          title="case_conversion.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Searching and Replacing</h3>
        <CodeWindow
          code={`// String searching methods
door text = "Soplang is a programming language. Soplang is easy to learn."

// Find the position of a substring
door pos = text.raadi("programming")
qor(pos)  // 12

// Find the last occurrence
door last_pos = text.raadi_dambe("Soplang")
qor(last_pos)  // 35

// Count occurrences
door count = text.tiri("Soplang")
qor(count)  // 2

// Replacing substrings
door replaced = text.badal("Soplang", "SopLang")
qor(replaced)  // "SopLang is a programming language. SopLang is easy to learn."

// Replace only the first occurrence
door replaced_once = text.badal_hal("Soplang", "SopLang")
qor(replaced_once)  // "SopLang is a programming language. Soplang is easy to learn."`}
          title="search_replace.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Trimming and Padding</h3>
        <CodeWindow
          code={`// Trimming whitespace
door text = "   Soplang   "

// Remove whitespace from both ends
door trimmed = text.jari()
qor("'" + trimmed + "'")  // 'Soplang'

// Remove whitespace from left side only
door left_trimmed = text.jari_bidix()
qor("'" + left_trimmed + "'")  // 'Soplang   '

// Remove whitespace from right side only
door right_trimmed = text.jari_midig()
qor("'" + right_trimmed + "'")  // '   Soplang'

// Padding strings
door word = "Soplang"

// Pad left with spaces to reach a total length
door left_padded = word.buuxi_bidix(10)
qor("'" + left_padded + "'")  // '   Soplang'

// Pad right with spaces
door right_padded = word.buuxi_midig(10)
qor("'" + right_padded + "'")  // 'Soplang   '

// Pad with a specific character
door zero_padded = word.buuxi_bidix(10, "0")
qor(zero_padded)  // 000Soplang`}
          title="trim_pad.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Splitting and Joining</h3>
        <CodeWindow
          code={`// Splitting strings
door sentence = "Soplang is easy to learn and use"

// Split by spaces
door words = sentence.kala_jar(" ")
qor(words)  // ["Soplang", "is", "easy", "to", "learn", "and", "use"]

// Split by a specific delimiter
door csv = "apple,banana,orange,mango"
door fruits = csv.kala_jar(",")
qor(fruits)  // ["apple", "banana", "orange", "mango"]

// Limit the number of splits
door limited = sentence.kala_jar(" ", 3)
qor(limited)  // ["Soplang", "is", "easy", "to learn and use"]

// Joining strings
door joined = " ".ku_biir(words)
qor(joined)  // "Soplang is easy to learn and use"

// Join with a different delimiter
door comma_joined = ", ".ku_biir(fruits)
qor(comma_joined)  // "apple, banana, orange, mango"`}
          title="split_join.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Checking String Properties</h3>
        <CodeWindow
          code={`// String property checking methods

// Check if string starts with a prefix
door text = "Soplang Programming"
door starts_with_sop = text.ku_bilaabma("Sop")
qor(starts_with_sop)  // true

// Check if string ends with a suffix
door ends_with_ming = text.ku_dhammaada("ming")
qor(ends_with_ming)  // true

// Check if string consists of only alphabetic characters
door is_alpha = "Soplang".xarfo_kaliya()
qor(is_alpha)  // true

// Check if string consists of alphanumeric characters
door is_alnum = "Soplang123".xarfoabn_kaliya()
qor(is_alnum)  // true

// Check if string consists of only digits
door is_digit = "12345".abn_kaliya()
qor(is_digit)  // true

// Check if string is lowercase
door is_lower = "soplang".yar_kaliya()
qor(is_lower)  // true

// Check if string is uppercase
door is_upper = "SOPLANG".kor_kaliya()
qor(is_upper)  // true`}
          title="string_properties.sop"
        />
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: '/docs/numbers',
          title: 'Numbers',
          description: 'Return to numeric types and operations in Soplang',
        }}
        nextPage={{
          href: '/docs/operators',
          title: 'Operators',
          description: 'Learn about operators and expressions in Soplang',
        }}
      />
    </div>
  );
}
