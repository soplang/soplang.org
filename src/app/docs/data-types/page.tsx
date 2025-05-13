import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Data Types",
  description:
    "Learn about all data types available in the Soplang programming language, including primitives, collections, and custom types.",
};

export default function DataTypesPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold">Data Types in Soplang</h1>

      <p className="mb-6 text-xl lead">
        Soplang provides a rich set of data types to represent different kinds of values. This guide
        covers all the built-in data types available in Soplang and how to use them effectively.
      </p>

      <nav className="p-4 my-8 rounded-lg bg-gray-50 dark:bg-gray-800">
        <h2 className="mb-3 text-lg font-semibold">On This Page</h2>
        <ul className="space-y-1">
          <li>
            <a href="#primitive-types" className="text-primary hover:underline">
              Primitive Types
            </a>
          </li>
          <li>
            <a href="#collection-types" className="text-primary hover:underline">
              Collection Types
            </a>
          </li>
          <li>
            <a href="#special-types" className="text-primary hover:underline">
              Special Types
            </a>
          </li>
          <li>
            <a href="#type-conversion" className="text-primary hover:underline">
              Type Conversion
            </a>
          </li>
          <li>
            <a href="#type-checking" className="text-primary hover:underline">
              Type Checking
            </a>
          </li>
        </ul>
      </nav>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="primitive-types">
          Primitive Types
        </h2>
        <p className="mb-4">
          Primitive types are the most basic data types in Soplang. They represent simple values and
          are the building blocks for more complex types.
        </p>

        <h3 className="mb-3 text-xl font-semibold" id="numbers">
          Numbers
        </h3>
        <p className="mb-4">
          Soplang supports both integers and floating-point numbers. You can define a number
          variable using either the dynamic <code>door</code> keyword or the static{" "}
          <code>tiro</code> keyword:
        </p>

        <CodeWindow
          code={`// Using dynamic typing
door lambarka1 = 42       // Integer
door lambarka2 = 3.14     // Floating-point

// Using static typing
tiro lambarka3 = 100      // Integer type
tiro lambarka4 = -25      // Negative integer

// Arithmetic operations
qor(lambarka1 + lambarka2)  // Addition: 45.14
qor(lambarka1 * lambarka3)  // Multiplication: 4200
qor(lambarka3 / lambarka1)  // Division: 2.38...

// Scientific notation
door badan = 1.6e6        // 1,600,000
qor(badan)`}
          title="numbers.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="strings">
          Strings
        </h3>
        <p className="mb-4">
          Strings in Soplang are sequences of characters. You can define strings using either single
          or double quotes and manipulate them with various operations:
        </p>

        <CodeWindow
          code={`// Using dynamic typing
door magac1 = "Soplang"
door magac2 = 'Programming Language'

// Using static typing
qoraal magac3 = "Soplang: Luuqadda Barnaamijyada ee Soomaaliga"

// String concatenation
qor(magac1 + " - " + magac2)  // Outputs: Soplang - Programming Language

// String length
qor(magac1.dherer())  // Outputs: 7

// String methods
qor(magac1.sareyn())  // Outputs: SOPLANG
qor(magac1.hooseyn())  // Outputs: soplang
qor(magac3.qayb(0, 7))  // Outputs: Soplang

// String interpolation
door version = 2.0
qor(f"{magac1} v{version}")  // Outputs: Soplang v2.0`}
          title="strings.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="booleans">
          Booleans
        </h3>
        <p className="mb-4">
          Boolean values represent truth values with two possible states: <code>run</code> (true) or{" "}
          <code>been</code> (false). You can define boolean variables using <code>door</code> or{" "}
          <code>labadaran</code>:
        </p>

        <CodeWindow
          code={`// Using dynamic typing
door waa_sax = run    // true
door waa_qalad = been  // false

// Using static typing
labadaran waa_arday = run
labadaran waa_macalin = been

// Logical operations
qor(waa_sax && waa_qalad)  // Logical AND: false
qor(waa_sax || waa_qalad)  // Logical OR: true
qor(!waa_sax)              // Logical NOT: false

// Comparison operations
door x = 10
door y = 20
qor(x > y)   // false
qor(x <= y)  // true
qor(x == 10) // true
qor(x != y)  // true`}
          title="booleans.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="collection-types">
          Collection Types
        </h2>
        <p className="mb-4">
          Collection types allow you to group multiple values together. Soplang provides several
          collection types for different use cases.
        </p>

        <h3 className="mb-3 text-xl font-semibold" id="lists">
          Lists
        </h3>
        <p className="mb-4">
          Lists are ordered collections of items that can be of any type. You can define a list
          using the <code>liis</code> keyword or use <code>door</code> with square brackets:
        </p>

        <CodeWindow
          code={`// Creating lists
door lmtayada = [1, 2, 3, 4, 5]
liis magacyada = ["Cabdi", "Caasha", "Xasan", "Hodan"]
liis isku_dhafan = [1, "Soplang", run, 3.14]

// Accessing elements (zero-indexed)
qor(lmtayada[0])     // Outputs: 1
qor(magacyada[2])    // Outputs: Xasan

// Modifying lists
lmtayada[0] = 10     // Change the first element
qor(lmtayada)        // Outputs: [10, 2, 3, 4, 5]

// List methods
lmtayada.kudar(6)    // Add an element to the end
qor(lmtayada)        // Outputs: [10, 2, 3, 4, 5, 6]

magacyada.saar(1)    // Remove element at index 1
qor(magacyada)       // Outputs: ["Cabdi", "Xasan", "Hodan"]

// List length
qor(magacyada.dherer())  // Outputs: 3

// List slicing
qor(lmtayada.qayb(1, 4)) // Outputs: [2, 3, 4]

// Checking if an element exists
qor("Xasan" ku dhex jira magacyada)  // Outputs: true`}
          title="lists.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="dictionaries">
          Dictionaries
        </h3>
        <p className="mb-4">
          Dictionaries are collections of key-value pairs where each key must be unique. You can
          define a dictionary using <code>door</code> with curly braces or using the{" "}
          <code>shey</code> keyword:
        </p>

        <CodeWindow
          code={`// Creating dictionaries
door qof = {
    "magac": "Cabdilaahi",
    "da": 25,
    "waa_arday": run
}

shey luuqad = {
    "magac": "Soplang",
    "version": 2.0,
    "sanadka": 2023,
    "features": ["OOP", "Dynamic Typing", "Easy Syntax"]
}

// Accessing values
qor(qof["magac"])  // Outputs: Cabdilaahi
qor(luuqad["version"])  // Outputs: 2.0

// Alternative dot notation
qor(qof.magac)  // Outputs: Cabdilaahi
qor(luuqad.features)  // Outputs: ["OOP", "Dynamic Typing", "Easy Syntax"]

// Modifying dictionaries
qof["da"] = 26  // Update a value
qof["degaan"] = "Muqdisho"  // Add a new key-value pair
qor(qof)  // Outputs: {"magac": "Cabdilaahi", "da": 26, "waa_arday": true, "degaan": "Muqdisho"}

// Checking if a key exists
qor("magac" ku dhex jira qof)  // Outputs: true
qor("luuqad" ku dhex jira qof)  // Outputs: false

// Dictionary methods
qor(qof.fureyaasha())  // Outputs: ["magac", "da", "waa_arday", "degaan"]
qor(qof.qiimeyaasha())  // Outputs: ["Cabdilaahi", 26, true, "Muqdisho"]
qor(luuqad.dherer())  // Outputs: 4`}
          title="dictionaries.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="tuples">
          Tuples
        </h3>
        <p className="mb-4">
          Tuples are similar to lists but are immutable (cannot be changed after creation). They are
          defined using parentheses:
        </p>

        <CodeWindow
          code={`// Creating tuples
door labojoog = (1, 2)
door seddexjoog = ("Soplang", 2023, run)

// Accessing tuple elements
qor(labojoog[0])  // Outputs: 1
qor(seddexjoog[1])  // Outputs: 2023

// Tuple unpacking
door (x, y) = labojoog
qor(x)  // Outputs: 1
qor(y)  // Outputs: 2

door (luuqad, sanad, xaalad) = seddexjoog
qor(luuqad)  // Outputs: Soplang
qor(sanad)   // Outputs: 2023
qor(xaalad)  // Outputs: true

// Tuples are immutable
// labojoog[0] = 10  // This would cause an error

// Tuple methods
qor(seddexjoog.dherer())  // Outputs: 3`}
          title="tuples.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="sets">
          Sets
        </h3>
        <p className="mb-4">
          Sets are unordered collections of unique items. They are useful for membership testing and
          eliminating duplicate entries:
        </p>

        <CodeWindow
          code={`// Creating sets
door urur1 = {1, 2, 3, 4, 5}
door urur2 = {3, 4, 5, 6, 7}

// Adding elements to a set
urur1.kudar(6)
qor(urur1)  // Outputs: {1, 2, 3, 4, 5, 6}

// Duplicate elements are ignored
urur1.kudar(2)
qor(urur1)  // Still outputs: {1, 2, 3, 4, 5, 6}

// Set operations
door midho = urur1 & urur2  // Intersection
qor(midho)  // Outputs: {3, 4, 5, 6}

door midhayn = urur1 | urur2  // Union
qor(midhayn)  // Outputs: {1, 2, 3, 4, 5, 6, 7}

door farqi = urur1 - urur2  // Difference
qor(farqi)  // Outputs: {1, 2}

// Checking if an element exists
qor(3 ku dhex jira urur1)  // Outputs: true
qor(8 ku dhex jira urur1)  // Outputs: false`}
          title="sets.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="special-types">
          Special Types
        </h2>
        <p className="mb-4">Soplang also provides a few special types for specific use cases.</p>

        <h3 className="mb-3 text-xl font-semibold" id="null">
          Null Type
        </h3>
        <p className="mb-4">
          The <code>waxba</code> keyword represents a null or empty value:
        </p>

        <CodeWindow
          code={`// Using null
door qof = waxba
qor(qof)  // Outputs: null

// Checking for null
haddii (qof == waxba) {
    qor("Qofka ma jiro")
} haddii_kalena {
    qor("Qofka wuu jiraa")
}

// Null coalescing (default value if null)
door magac = waxba
qor(magac ?? "Aan la aqoon")  // Outputs: "Aan la aqoon"`}
          title="null_type.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="date-time">
          Date and Time
        </h3>
        <p className="mb-4">Soplang has built-in support for date and time operations:</p>

        <CodeWindow
          code={`// Current date and time
door waqtiga = waqti_hadda()
qor(waqtiga)  // Outputs: 2023-10-24T14:30:45

// Creating specific dates
door taariikh = taariikh_cusub(2023, 10, 1)
qor(taariikh)  // Outputs: 2023-10-01

// Date formatting
qor(taariikh.format("dd/MM/yyyy"))  // Outputs: 01/10/2023

// Date calculations
door berri = taariikh.kudar_maalmo(1)
qor(berri)  // Outputs: 2023-10-02

door todobaad = taariikh.kudar_todobaadyo(1)
qor(todobaad)  // Outputs: 2023-10-08

// Time differences
door farqi = berri - taariikh
qor(farqi.maalmo())  // Outputs: 1`}
          title="date_time.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="enums">
          Enumerations
        </h3>
        <p className="mb-4">Enumerations allow you to define a set of named constants:</p>

        <CodeWindow
          code={`// Defining an enumeration
meeqaam Dhinacyada {
    Waqooyi,
    Koonfur,
    Bari,
    Galbeed
}

// Using enum values
door jihada = Dhinacyada.Bari
qor(jihada)  // Outputs: Dhinacyada.Bari

// Comparing enum values
haddii (jihada == Dhinacyada.Waqooyi) {
    qor("Waa xagga woqooyi")
} haddii_kalena haddii (jihada == Dhinacyada.Bari) {
    qor("Waa xagga bari")
}

// Enums with associated values
meeqaam Midabada {
    Guduud = "#FF0000",
    Cagaar = "#00FF00",
    Buluug = "#0000FF"
}

qor(Midabada.Guduud)  // Outputs: #FF0000`}
          title="enums.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="type-conversion">
          Type Conversion
        </h2>
        <p className="mb-4">Soplang provides functions to convert between different data types:</p>

        <CodeWindow
          code={`// String to number
door qoraal_tiro = "42"
door tiro1 = tiro(qoraal_tiro)
qor(tiro1)  // Outputs: 42

// Number to string
door lambarka = 3.14
door qoraal1 = qoraal(lambarka)
qor(qoraal1)  // Outputs: "3.14"

// String to boolean
door qoraal_xun = "run"
door bool1 = labadaran(qoraal_xun)
qor(bool1)  // Outputs: true

// List to set (removes duplicates)
door liiska = [1, 2, 2, 3, 3, 3]
door urur = urur(liiska)
qor(urur)  // Outputs: {1, 2, 3}

// String to list
door kala_qeybin = qoraal("Soplang").kala_qeybi()
qor(kala_qeybin)  // Outputs: ["S", "o", "p", "l", "a", "n", "g"]

// Explicit vs implicit conversion
door a = "10"
door b = 20
qor(a + b)  // Outputs: "1020" (string concatenation)
qor(tiro(a) + b)  // Outputs: 30 (numeric addition)`}
          title="type_conversion.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="type-checking">
          Type Checking
        </h2>
        <p className="mb-4">Soplang provides functions to check the type of a value at runtime:</p>

        <CodeWindow
          code={`// Checking the type of a value
door a = 42
door b = "Soplang"
door c = [1, 2, 3]
door d = {"magac": "Cabdi"}
door e = waxba

qor(nooca(a))  // Outputs: "tiro"
qor(nooca(b))  // Outputs: "qoraal"
qor(nooca(c))  // Outputs: "liis"
qor(nooca(d))  // Outputs: "shey"
qor(nooca(e))  // Outputs: "waxba"

// Type checking in conditionals
haddii (nooca(a) == "tiro") {
    qor("Waa tiro")
}

// Instance checking
fasalka Qof {
    howl cusub(magac) {
        nafta.magac = magac
    }
}

door qof1 = cusub Qof("Aaden")
qor(qof1 ka_tirsan Qof)  // Outputs: true`}
          title="type_checking.sop"
        />
      </div>

      {/* <div className="p-6 mt-10 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h2 className="mb-3 text-xl font-bold">Next Steps</h2>
        <p className="mb-4">
          Now that you understand the data types in Soplang, you can explore
          other aspects of the language:
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/docs/variables"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Variables →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn more about variable declaration and scope
            </p>
          </Link>
          <Link
            href="/docs/functions"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Functions →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Understand how to define and use functions
            </p>
          </Link>
          <Link
            href="/docs/control-flow"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Control Flow →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn about conditional statements and loops
            </p>
          </Link>
          <Link
            href="/docs/classes-objects"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Classes & Objects →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Explore object-oriented programming in Soplang
            </p>
          </Link>
        </div>
      </div> */}
      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Return to the fundamental syntax of Soplang",
        }}
        nextPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Learn more about variable declaration and scope",
        }}
      />
    </div>
  );
}
