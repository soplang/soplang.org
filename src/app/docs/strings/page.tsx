import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Strings in Soplang",
  description:
    "Learn about string operations, formatting, and manipulation in the Soplang programming language.",
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
          In Soplang, strings can be created using single quotes, double quotes, or triple quotes
          for multi-line strings. The <code>qoraal</code> keyword is used for static typing of
          strings, which comes from the Somali word for "text".
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

// Static typing with qoraal
qoraal greeting = "Salaam!"
qoraal message = 'Welcome to Soplang!'`}
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

        <h3 className="mt-6 mb-4 text-xl font-bold">Raw Strings</h3>
        <p className="mb-4">
          Raw strings, prefixed with <code>r</code>, treat backslashes as literal characters
          rather than escape sequences.
        </p>

        <CodeWindow
          code={`// Regular string with escape sequences
door path = "C:\\Users\\Ahmed\\Documents"

// Raw string (backslashes are not treated as escape characters)
door raw_path = r"C:\Users\Ahmed\Documents"

// Both print the same output
qorln(path)      // C:\Users\Ahmed\Documents
qorln(raw_path)  // C:\Users\Ahmed\Documents`}
          title="raw_strings.sop"
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
qorln(full_name)  // Mohamed Ali

// Concatenation with other types
door age = 30
door message = first_name + " is " + qoraal_u_badal(age) + " years old"
qorln(message)  // Mohamed is 30 years old`}
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
qorln(line)  // **********

// Useful for creating separators
door separator = "-" * 20
qorln(separator)  // --------------------

// Combining repetition with concatenation
door header = "| " + "Title " + "|"
door border = "+" + "-" * (header.dherer() - 2) + "+"

qorln(border)  // +-------+
qorln(header)  // | Title |
qorln(border)  // +-------+`}
          title="string_repetition.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">String Indexing and Slicing</h3>
        <p className="mb-4">
          Individual characters can be accessed using indices, and substrings can be extracted
          using slicing.
        </p>

        <CodeWindow
          code={`// String indexing (0-based)
door text = "Soplang"

// Accessing individual characters
door first_char = text[0]  // 'S'
door last_char = text[6]   // 'g'

// Negative indices count from the end
door last_char_alt = text[-1]  // 'g'
door second_last = text[-2]    // 'n'

// String slicing [start:end] (end is exclusive)
door slice1 = text[0:3]    // "Sop"
door slice2 = text[3:7]    // "lang"

// Omitting indices
door from_start = text[:3]  // "Sop" (from start to index 3)
door to_end = text[3:]     // "lang" (from index 3 to end)

// Slicing with step [start:end:step]
door every_second = text[::2]  // "Sln" (every 2nd character)

// Negative step for reversing
door reversed = text[::-1]  // "gnalpoS"`}
          title="string_indexing_slicing.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">String Length and Membership</h3>
        <CodeWindow
          code={`// String length
door text = "Soplang"
door length = text.dherer()
qorln(length)  // 7

// Checking membership with 'in' operator
door contains_o = "o" ku jira text
qorln(contains_o)  // true

door contains_x = "x" ku jira text
qorln(contains_x)  // false

// Checking substrings
door contains_lang = "lang" ku jira text
qorln(contains_lang)  // true`}
          title="string_length_membership.sop"
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
qorln(upper)  // SOPLANG PROGRAMMING LANGUAGE

// Converting to lowercase
door lower = text.yar_dhig()
qorln(lower)  // soplang programming language

// Title case (capitalize first letter of each word)
door title = text.cinwaan_dhig()
qorln(title)  // Soplang Programming Language

// Capitalize (only first letter of string)
door capitalized = "hello world".weyn_dhig_bilowga()
qorln(capitalized)  // Hello world`}
          title="case_conversion.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Searching and Replacing</h3>
        <CodeWindow
          code={`// String searching methods
door text = "Soplang is a programming language. Soplang is easy to learn."

// Find the position of a substring
door pos = text.raadi("programming")
qorln(pos)  // 12

// Find the last occurrence
door last_pos = text.raadi_dambe("Soplang")
qorln(last_pos)  // 35

// Count occurrences
door count = text.tiri("Soplang")
qorln(count)  // 2

// Replacing substrings
door replaced = text.badal("Soplang", "SopLang")
qorln(replaced)  // "SopLang is a programming language. SopLang is easy to learn."

// Replace only the first occurrence
door replaced_once = text.badal_hal("Soplang", "SopLang")
qorln(replaced_once)  // "SopLang is a programming language. Soplang is easy to learn."`}
          title="search_replace.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Trimming and Padding</h3>
        <CodeWindow
          code={`// Trimming whitespace
door text = "   Soplang   "

// Remove whitespace from both ends
door trimmed = text.jari()
qorln("'" + trimmed + "'")  // 'Soplang'

// Remove whitespace from left side only
door left_trimmed = text.jari_bidix()
qorln("'" + left_trimmed + "'")  // 'Soplang   '

// Remove whitespace from right side only
door right_trimmed = text.jari_midig()
qorln("'" + right_trimmed + "'")  // '   Soplang'

// Padding strings
door word = "Soplang"

// Pad left with spaces to reach a total length
door left_padded = word.buuxi_bidix(10)
qorln("'" + left_padded + "'")  // '   Soplang'

// Pad right with spaces
door right_padded = word.buuxi_midig(10)
qorln("'" + right_padded + "'")  // 'Soplang   '

// Pad with a specific character
door zero_padded = word.buuxi_bidix(10, "0")
qorln(zero_padded)  // 000Soplang`}
          title="trim_pad.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Splitting and Joining</h3>
        <CodeWindow
          code={`// Splitting strings
door sentence = "Soplang is easy to learn and use"

// Split by spaces
door words = sentence.kala_jar(" ")
qorln(words)  // ["Soplang", "is", "easy", "to", "learn", "and", "use"]

// Split by a specific delimiter
door csv = "apple,banana,orange,mango"
door fruits = csv.kala_jar(",")
qorln(fruits)  // ["apple", "banana", "orange", "mango"]

// Limit the number of splits
door limited = sentence.kala_jar(" ", 3)
qorln(limited)  // ["Soplang", "is", "easy", "to learn and use"]

// Joining strings
door joined = " ".ku_biir(words)
qorln(joined)  // "Soplang is easy to learn and use"

// Join with a different delimiter
door comma_joined = ", ".ku_biir(fruits)
qorln(comma_joined)  // "apple, banana, orange, mango"`}
          title="split_join.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Checking String Properties</h3>
        <CodeWindow
          code={`// String property checking methods

// Check if string starts with a prefix
door text = "Soplang Programming"
door starts_with_sop = text.ku_bilaabma("Sop")
qorln(starts_with_sop)  // true

// Check if string ends with a suffix
door ends_with_ming = text.ku_dhammaada("ming")
qorln(ends_with_ming)  // true

// Check if string consists of only alphabetic characters
door is_alpha = "Soplang".xarfo_kaliya()
qorln(is_alpha)  // true

// Check if string consists of alphanumeric characters
door is_alnum = "Soplang123".xarfotiro_kaliya()
qorln(is_alnum)  // true

// Check if string consists of only digits
door is_digit = "12345".tiro_kaliya()
qorln(is_digit)  // true

// Check if string is lowercase
door is_lower = "soplang".yar_kaliya()
qorln(is_lower)  // true

// Check if string is uppercase
door is_upper = "SOPLANG".kor_kaliya()
qorln(is_upper)  // true`}
          title="string_properties.sop"
        />
      </section>

      {/* String Formatting */}
      <section id="string-formatting" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          String Formatting
        </h2>

        <p className="mb-4">
          Soplang provides several ways to format strings, including f-strings (formatted string
          literals) and the <code>format</code> method.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">F-Strings</h3>
        <p className="mb-4">
          F-strings provide a concise way to embed expressions inside string literals using curly
          braces <code>{'{}'}</code>.
        </p>

        <CodeWindow
          code={`// Basic f-string with variable substitution
door name = "Ahmed"
door age = 30
door message = f"{name} is {age} years old"
qorln(message)  // Ahmed is 30 years old

// Expressions in f-strings
door x = 10
door y = 20
qorln(f"The sum of {x} and {y} is {x + y}")  // The sum of 10 and 20 is 30

// Formatting specifiers
door pi = 3.14159
qorln(f"Pi rounded to 2 decimal places: {pi:.2f}")  // Pi rounded to 2 decimal places: 3.14

// Width and alignment
door name1 = "Ali"
door name2 = "Mohamed"
qorln(f"{name1:10} - {name2:10}")  // Ali        - Mohamed   

// Number formatting
door number = 1234567
qorln(f"Number with commas: {number:,}")  // Number with commas: 1,234,567

// Percentage formatting
door ratio = 0.75
qorln(f"Completion: {ratio:.1%}")  // Completion: 75.0%`}
          title="f_strings.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Format Method</h3>
        <p className="mb-4">
          The <code>format</code> method provides another way to format strings, especially useful
          for complex formatting or when the format string is determined at runtime.
        </p>

        <CodeWindow
          code={`// Basic formatting with positional arguments
door template = "{} is {} years old"
door formatted = template.format("Fatima", 25)
qorln(formatted)  // Fatima is 25 years old

// Formatting with indexed arguments
door template2 = "{0} is from {1}, {1} is a beautiful city"
door formatted2 = template2.format("Aisha", "Mogadishu")
qorln(formatted2)  // Aisha is from Mogadishu, Mogadishu is a beautiful city

// Formatting with named arguments
door template3 = "{name} works as a {job}"
door formatted3 = template3.format(name="Hassan", job="developer")
qorln(formatted3)  // Hassan works as a developer

// Mixed positional and named arguments
door template4 = "{0} is a {job} with {1} years of experience"
door formatted4 = template4.format("Omar", 5, job="teacher")
qorln(formatted4)  // Omar is a teacher with 5 years of experience`}
          title="format_method.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Advanced Formatting</h3>
        <CodeWindow
          code={`// Number formatting
door num = 123.456

// Decimal places
qorln("{:.2f}".format(num))  // 123.46

// Width and alignment
qorln("{:10.2f}".format(num))  // '    123.46' (right-aligned by default)
qorln("{:<10.2f}".format(num))  // '123.46    ' (left-aligned)
qorln("{:^10.2f}".format(num))  // '  123.46  ' (center-aligned)

// With sign
qorln("{:+.2f}".format(num))  // +123.46

// Date formatting
isticmaal waqti

door today = waqti.hadda()
qorln(f"Today is {today:%Y-%m-%d}")

// Custom date format
qorln(f"Current time: {today:%H:%M:%S}")
qorln(f"Date: {today:%B %d, %Y}")`}
          title="advanced_formatting.sop"
        />
      </section>

      {/* Escape Sequences */}
      <section id="string-escape" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Escape Sequences
        </h2>

        <p className="mb-4">
          Escape sequences allow you to include special characters in strings that would otherwise
          be difficult or impossible to represent directly.
        </p>

        <CodeWindow
          code={`// Common escape sequences

// Newline
door multiline = "First line\nSecond line\nThird line"
qorln(multiline)
/* Output:
First line
Second line
Third line
*/

// Tab
door tabbed = "Name:\tAhmed\tAge:\t30"
qorln(tabbed)  // Name:    Ahmed   Age:    30

// Backslash
door path = "C:\\Program Files\\Soplang"
qorln(path)  // C:\Program Files\Soplang

// Single and double quotes
door quotes = "He said, \"Soplang is great!\" and I agree."
qorln(quotes)  // He said, "Soplang is great!" and I agree.

door single_quotes = 'It\'s a wonderful language.'
qorln(single_quotes)  // It's a wonderful language.

// Unicode escape sequences
door heart = "\u2764"  // Unicode for heart symbol
qorln(heart)  // ❤

// Carriage return
door carriage = "Overwritten\rNew"
qorln(carriage)  // New written`}
          title="escape_sequences.sop"
        />

        <div className="p-4 mb-6 bg-blue-100 rounded-lg dark:bg-blue-900/20">
          <h4 className="mb-2 font-bold">Common Escape Sequences</h4>
          <ul className="ml-6 space-y-1 list-disc">
            <li><code>\n</code> - Newline</li>
            <li><code>\t</code> - Tab</li>
            <li><code>\\</code> - Backslash</li>
            <li><code>\"</code> - Double quote</li>
            <li><code>\'</code> - Single quote</li>
            <li><code>\r</code> - Carriage return</li>
            <li><code>\b</code> - Backspace</li>
            <li><code>\f</code> - Form feed</li>
            <li><code>\uXXXX</code> - Unicode character (4 hex digits)</li>
            <li><code>\UXXXXXXXX</code> - Unicode character (8 hex digits)</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section id="string-best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-8">
          <li>
            <h3 className="mb-2 text-xl font-bold">Use F-Strings for Readability</h3>
            <p className="mb-2">
              F-strings make string formatting more readable and concise compared to concatenation
              or older formatting methods.
            </p>
            <CodeWindow
              code={`// Instead of concatenation
door name = "Farah"
door age = 28

// Not recommended
door message1 = name + " is " + qoraal_u_badal(age) + " years old"

// Recommended: Use f-strings
door message2 = f"{name} is {age} years old"`}
              title="use_f_strings.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Be Careful with String Immutability</h3>
            <p className="mb-2">
              Strings in Soplang are immutable, meaning once created, they cannot be changed.
              Operations on strings create new string objects.
            </p>
            <CodeWindow
              code={`// String immutability example
door original = "Soplang"

// This doesn't modify 'original', it creates a new string
door modified = original.badal("S", "s")

qorln(original)  // Still "Soplang"
qorln(modified)  // "soplang"

// Inefficient string building in a loop
door result = ""
ku_celi i ku dhex jira tiro_taxane(1000) {
    result = result + qoraal_u_badal(i)  // Creates 1000 new strings!
}

// Better: Use join or a list
door parts = []
ku_celi i ku dhex jira tiro_taxane(1000) {
    parts.ku_dar(qoraal_u_badal(i))
}
door efficient_result = "".ku_biir(parts)`}
              title="string_immutability.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Use Raw Strings for Regular Expressions and Paths</h3>
            <p className="mb-2">
              Raw strings are particularly useful for regular expressions and file paths where
              backslashes are common.
            </p>
            <CodeWindow
              code={`// Regular string with many escape sequences
door regex = "\\d+\\.\\d+"  // Matches decimal numbers

// Cleaner with raw string
door raw_regex = r"\d+\.\d+"  // Same pattern, more readable

// File paths
door path = "C:\\Users\\Ahmed\\Documents\\file.txt"
door raw_path = r"C:\Users\Ahmed\Documents\file.txt"  // Cleaner`}
              title="raw_strings_usage.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Choose Appropriate String Methods</h3>
            <p className="mb-2">
              Select the most appropriate string method for your task to write cleaner and more
              efficient code.
            </p>
            <CodeWindow
              code={`// Checking if a string starts with a prefix
door text = "Soplang Programming"

// Not recommended
haddii text.kala_jar(" ")[0] == "Soplang" {
    // Do something
}

// Recommended
haddii text.ku_bilaabma("Soplang") {
    // Do something
}

// Removing whitespace
door input = "  user input  "

// Be specific about which whitespace to remove
haddii input.jari_bidix() == "user input  " {
    // User entered leading spaces
}

// For general cleaning, use trim
door cleaned = input.jari()`}
              title="appropriate_methods.sop"
            />
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/numbers",
          title: "Numbers",
          description: "Return to numeric types and operations in Soplang",
        }}
        nextPage={{
          href: "/docs/operators",
          title: "Operators",
          description: "Learn about operators and expressions in Soplang",
        }}
      />
    </div>
  );
}
