import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Functions in Soplang",
  description:
    "Learn about defining and using functions in the Soplang programming language, including parameters, return values, and advanced function concepts.",
};

export default function FunctionsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Functions in Soplang</h1>

      <p className="mb-6 text-xl lead">
        Functions are reusable blocks of code that perform specific tasks. In Soplang, functions are
        defined using the <code>howl</code> keyword and can take parameters, return values, and be
        composed in various ways.
      </p>

      <CodeWindow
        code={`// Basic function definition
howl greet() {
    qor("Hello, World!")
}

// Calling the function
greet()  // Outputs: "Hello, World!"`}
        title="basic_function.sop"
      />

      <nav className="p-4 my-8 rounded-lg bg-gray-50 dark:bg-gray-800">
        <h2 className="mb-3 text-lg font-semibold">On This Page</h2>
        <ul className="space-y-1">
          <li>
            <a href="#function-basics" className="text-primary hover:underline">
              Function Basics
            </a>
          </li>
          <li>
            <a href="#parameters" className="text-primary hover:underline">
              Parameters and Arguments
            </a>
          </li>
          <li>
            <a href="#return-values" className="text-primary hover:underline">
              Return Values
            </a>
          </li>
          <li>
            <a href="#function-scope" className="text-primary hover:underline">
              Function Scope
            </a>
          </li>
          <li>
            <a href="#anonymous-functions" className="text-primary hover:underline">
              Anonymous Functions
            </a>
          </li>
          <li>
            <a href="#higher-order-functions" className="text-primary hover:underline">
              Higher-Order Functions
            </a>
          </li>
          <li>
            <a href="#recursion" className="text-primary hover:underline">
              Recursion
            </a>
          </li>
        </ul>
      </nav>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="function-basics">
          Function Basics
        </h2>
        <p className="mb-4">
          In Soplang, functions are defined using the <code>howl</code> keyword, followed by the
          function name, parentheses for parameters, and a block of code enclosed in curly braces:
        </p>

        <CodeWindow
          code={`// Basic function definition
howl greet() {
    qor("Hello, World!")
}

// Calling the function
greet()  // Outputs: "Hello, World!"`}
          title="basic_function.sop"
        />

        <p className="mt-4 mb-4">
          Functions should be named according to what they do, typically using verbs or verb
          phrases. In Soplang, function names conventionally use camelCase:
        </p>

        <CodeWindow
          code={`// Good function names
howl calculateSum(a, b) {
    soo_celi a + b
}

howl getFirstName(names) {
    soo_celi names[0]
}

howl addData(data, section) {
    section.kudar(data)
}`}
          title="function_naming.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="parameters">
          Parameters and Arguments
        </h2>
        <p className="mb-4">
          Functions can accept parameters, which are variables listed in the function definition.
          When you call a function with specific values, those values are called arguments.
        </p>

        <h3 className="mb-3 text-xl font-semibold">Basic Parameters</h3>
        <CodeWindow
          code={`// Function with parameters
howl greet(name) {
    qor("Hello, " + name + "!")
}

// Calling with arguments
greet("Farah")  // Outputs: "Hello, Farah!"
greet("Halima")  // Outputs: "Hello, Halima!"`}
          title="basic_parameters.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Multiple Parameters</h3>
        <CodeWindow
          code={`// Function with multiple parameters
howl add(num1, num2, num3) {
    soo_celi num1 + num2 + num3
}

door result = add(10, 20, 30)
qor(result)  // Outputs: 60`}
          title="multiple_parameters.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Default Parameter Values</h3>
        <p className="mb-4">
          You can provide default values for parameters, which are used if no argument is provided:
        </p>

        <CodeWindow
          code={`// Function with default parameter values
howl calculateTax(amount, taxPercent = 15) {
    door tax = (taxPercent / 100) * amount
    soo_celi tax
}

qor(calculateTax(1000))  // Uses default 15%, Outputs: 150
qor(calculateTax(1000, 10))  // Uses provided 10%, Outputs: 100`}
          title="default_parameters.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Named Arguments</h3>
        <p className="mb-4">
          For better readability, especially with multiple parameters, you can use named arguments:
        </p>

        <CodeWindow
          code={`// Function definition
howl createArticle(title, author, date, description = "") {
    // Function body
    soo_celi {
        "title": title,
        "author": author,
        "date": date,
        "description": description
    }
}

// Using named arguments
door article = createArticle(
    title = "Learning Soplang",
    author = "Farah",
    date = "2023-10-24",
    description = "A great new language"
)

// You can change the order with named arguments
door anotherArticle = createArticle(
    author = "Halima",
    description = "Making programming easier to learn", 
    date = "2023-10-20",
    title = "Soplang and Its Benefits"
)`}
          title="named_arguments.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Variable Number of Arguments</h3>
        <p className="mb-4">
          You can create functions that accept a variable number of arguments using the rest
          parameter syntax (denoted by <code>...</code>):
        </p>

        <CodeWindow
          code={`// Function with variable number of arguments
howl addAll(...numbers) {
    door total = 0
    ku_celi num ku dhex jira numbers {
        total += num
    }
    soo_celi total
}

qor(addAll(1, 2, 3))  // Outputs: 6
qor(addAll(10, 20, 30, 40, 50))  // Outputs: 150
qor(addAll())  // Outputs: 0`}
          title="rest_parameters.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="return-values">
          Return Values
        </h2>
        <p className="mb-4">
          Functions can return values using the <code>soo_celi</code> keyword. If no return
          statement is specified, the function returns <code>waxba</code> (null) by default.
        </p>

        <h3 className="mb-3 text-xl font-semibold">Basic Return Values</h3>
        <CodeWindow
          code={`// Function returning a value
howl square(num) {
    soo_celi num * num
}

door result = square(5)
qor(result)  // Outputs: 25

// Function with no explicit return
howl printMessage(message) {
    qor("LOG: " + message)
    // No return statement, implicitly returns waxba (null)
}

door output = printMessage("Hello")
qor(output)  // Outputs: null`}
          title="return_values.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Early Returns</h3>
        <CodeWindow
          code={`// Early return example
howl getDivision(a, b) {
    haddii (b == 0) {
        qor("Error: Cannot divide by zero")
        soo_celi waxba
    }
    
    soo_celi a / b
}

qor(getDivision(10, 2))  // Outputs: 5
qor(getDivision(10, 0))  // Outputs: "Error: Cannot divide by zero" and then null`}
          title="early_returns.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Returning Multiple Values</h3>
        <p className="mb-4">You can return multiple values using tuples or objects:</p>

        <CodeWindow
          code={`// Returning multiple values using a tuple
howl getNameParts(fullName) {
    door parts = fullName.split(" ")
    soo_celi [parts[0], parts.length > 1 ? parts[1] : ""]
}

door [firstName, lastName] = getNameParts("John Smith")
qor(firstName)  // Outputs: "John"
qor(lastName)   // Outputs: "Smith"

// Returning multiple values using an object
howl getPersonStats(person) {
    soo_celi {
        "age": person.age,
        "height": person.height,
        "weight": person.weight
    }
}

door person = { "name": "Sarah", "age": 28, "height": 165, "weight": 60 }
door stats = getPersonStats(person)
qor(stats.age)     // Outputs: 28
qor(stats.height)  // Outputs: 165`}
          title="multiple_returns.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="function-scope">
          Function Scope
        </h2>
        <p className="mb-4">
          Functions create their own scope, which means variables defined inside a function are not
          accessible outside of it:
        </p>

        <CodeWindow
          code={`// Function scope example
howl calculateArea(width, height) {
    door area = width * height  // Local variable
    soo_celi area
}

door rectArea = calculateArea(5, 10)
qor(rectArea)  // Outputs: 50

// This would cause an error:
// qor(area)  // Error: 'area' is not defined

// Variables with the same name don't conflict
door area = "This is a global area variable"
door functionArea = calculateArea(3, 4)  // This uses its own local 'area'
qor(area)  // Outputs: "This is a global area variable"
qor(functionArea)  // Outputs: 12`}
          title="function_scope.sop"
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold">Closures</h3>
        <p className="mb-4">
          Functions in Soplang can form closures, which means they can remember the environment in
          which they were created:
        </p>

        <CodeWindow
          code={`// Closure example
howl createCounter(startValue = 0) {
    door count = startValue
    
    // Return a function that has access to the 'count' variable
    howl increment() {
        count += 1
        soo_celi count
    }
    
    soo_celi increment
}

door counter1 = createCounter(10)
door counter2 = createCounter(5)

qor(counter1())  // Outputs: 11
qor(counter1())  // Outputs: 12
qor(counter2())  // Outputs: 6
qor(counter1())  // Outputs: 13 - counter1 maintained its own state
qor(counter2())  // Outputs: 7 - counter2 maintained its own state`}
          title="closures.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="anonymous-functions">
          Anonymous Functions
        </h2>
        <p className="mb-4">
          Anonymous functions are functions without a name. They can be assigned to variables or
          passed as arguments to other functions:
        </p>

        <CodeWindow
          code={`// Anonymous function assigned to a variable
door greet = howl(name) {
    soo_celi "Hello, " + name + "!"
}

qor(greet("John"))  // Outputs: "Hello, John!"

// Anonymous function as an argument
door numbers = [1, 2, 3, 4, 5]
door squaredNumbers = numbers.map(howl(num) {
    soo_celi num * num
})

qor(squaredNumbers)  // Outputs: [1, 4, 9, 16, 25]

// Shorthand syntax for simple functions (arrow functions)
door cubes = numbers.map(num => num * num * num)
qor(cubes)  // Outputs: [1, 8, 27, 64, 125]`}
          title="anonymous_functions.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="higher-order-functions">
          Higher-Order Functions
        </h2>
        <p className="mb-4">
          Higher-order functions are functions that take other functions as arguments or return
          functions. They are powerful for functional programming patterns:
        </p>

        <CodeWindow
          code={`// Higher-order function that takes a function as an argument
howl applyToEach(array, func) {
    door results = []
    ku_celi item ku dhex jira array {
        results.push(func(item))
    }
    soo_celi results
}

door numbers = [1, 2, 3, 4, 5]
door doubled = applyToEach(numbers, num => num * 2)
qor(doubled)  // Outputs: [2, 4, 6, 8, 10]

// Higher-order function that returns a function
howl multiplier(factor) {
    soo_celi howl(number) {
        soo_celi number * factor
    }
}

door double = multiplier(2)
door triple = multiplier(3)

qor(double(5))  // Outputs: 10
qor(triple(5))  // Outputs: 15

// Chaining higher-order functions
howl filterMap(array, predicate, transform) {
    door results = []
    ku_celi item ku dhex jira array {
        haddii (predicate(item)) {
            results.push(transform(item))
        }
    }
    soo_celi results
}

// Get squares of even numbers
door numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
door evenSquares = filterMap(
    numbers,
    num => num % 2 == 0,  // Filter for even numbers
    num => num * num      // Transform by squaring
)
qor(evenSquares)  // Outputs: [4, 16, 36, 64, 100]`}
          title="higher_order_functions.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="recursion">
          Recursion
        </h2>
        <p className="mb-4">
          Recursion is a technique where a function calls itself. This is useful for solving
          problems that can be broken down into smaller, similar subproblems:
        </p>

        <CodeWindow
          code={`// Factorial function using recursion
howl factorial(n) {
    haddii (n <= 1) {
        soo_celi 1
    }
    soo_celi n * factorial(n - 1)
}

qor(factorial(5))  // Outputs: 120 (5 * 4 * 3 * 2 * 1)

// Fibonacci sequence using recursion
howl fibonacci(n) {
    haddii (n <= 0) {
        soo_celi 0
    } laq_heli (n == 1) {
        soo_celi 1
    }
    soo_celi fibonacci(n - 1) + fibonacci(n - 2)
}

qor(fibonacci(7))  // Outputs: 13

// Tree traversal using recursion
howl createNode(value, left = null, right = null) {
    soo_celi { value, left, right }
}

// Creating a simple binary tree
door root = createNode(1,
    createNode(2, 
        createNode(4), 
        createNode(5)
    ),
    createNode(3, 
        createNode(6), 
        createNode(7)
    )
)

// In-order traversal (Left -> Root -> Right)
howl inorder_traverse(node) {
    haddii (node == null) {
        soo_celi []
    }
    
    door results = []
    results = results.concat(inorder_traverse(node.left))
    results.push(node.value)
    results = results.concat(inorder_traverse(node.right))
    
    soo_celi results
}

qor(inorder_traverse(root))  // Outputs: [4, 2, 5, 1, 6, 3, 7]`}
          title="recursion.sop"
        />

        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Be cautious with recursion, as deep recursion can lead to stack
          overflow errors. For deep recursion, consider using tail-call optimization or iterative
          approaches.
        </p>
      </div>

      <div className="p-6 mt-10 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h2 className="mb-3 text-xl font-bold">Best Practices for Functions</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <p>
              <strong>Single Responsibility:</strong> Each function should do one thing and do it
              well.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <p>
              <strong>Descriptive Names:</strong> Name functions with verbs that describe what they
              do.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <p>
              <strong>Limit Parameters:</strong> Functions with many parameters are harder to use.
              Consider using objects for multiple parameters.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <p>
              <strong>Consistent Return Values:</strong> Functions should return consistent types to
              avoid confusion.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <p>
              <strong>Pure Functions:</strong> When possible, use pure functions (no side effects,
              same output for same input).
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <p>
              <strong>Comments:</strong> Add comments to explain complex logic, but aim for
              self-documenting code.
            </p>
          </li>
        </ul>
      </div>

      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Return to variable declarations and scope",
        }}
        nextPage={{
          href: "/docs/control-flow",
          title: "Control Flow",
          description: "Learn about conditionals and loops for controlling program flow",
        }}
      />
    </div>
  );
}
