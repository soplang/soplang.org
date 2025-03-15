import Link from "next/link";
import { Metadata } from 'next';
import CodeWindow from "@/components/CodeWindow";

export const metadata: Metadata = {
  title: 'Extending Soplang - Documentation',
  description: 'Learn how to extend Soplang with custom modules, plugins, and integrations to enhance its capabilities for your specific needs.',
};

export default function ExtendingSoplangPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Extending Soplang</h1>
      
      <p>
        Soplang is designed to be highly extensible, allowing developers to enhance its capabilities
        through custom modules, plugins, and integrations. This guide will walk you through the
        various ways you can extend Soplang to meet your specific needs.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-6">
        <h3 className="text-primary dark:text-blue-400 mt-0">Why Extend Soplang?</h3>
        <p className="mb-0">
          Extending Soplang allows you to add domain-specific functionality, integrate with existing tools,
          optimize performance for specific use cases, and contribute to the growing ecosystem of Somali
          programming tools. Whether you're building applications for education, data analysis, or web development,
          extending Soplang can help you create more powerful and efficient solutions.
        </p>
      </div>

      <h2 id="creating-modules">Creating Custom Modules</h2>

      <p>
        Modules are the primary way to extend Soplang's functionality. A module is a collection of related
        functions, classes, and variables that can be imported and used in Soplang programs.
      </p>

      <h3>Basic Module Structure</h3>

      <p>
        A Soplang module is a file with a <code>.so</code> extension. Here's a simple example of a module
        that provides utility functions for working with dates:
      </p>

      <CodeWindow 
        code={`# dateutils.so - Date utility functions for Soplang

# Import the built-in date module
import waqti from "waqti"

# Define a function to format dates in Somali style
def format_somali_date(date):
    """Format a date in Somali style (dd/mm/yyyy)"""
    return f"{date.day}/{date.month}/{date.year}"

# Define a function to get the current date in Somali format
def maanta():
    """Return today's date in Somali format"""
    return format_somali_date(waqti.today())

# Define a class for date range operations
class DateRange:
    def __init__(self, start_date, end_date):
        self.start_date = start_date
        self.end_date = end_date
    
    def days_between(self):
        """Calculate the number of days between two dates"""
        return (self.end_date - self.start_date).days
        
    def is_in_range(self, date):
        """Check if a date is within this range"""
        return self.start_date <= date <= self.end_date`}
        title="dateutils.so"
      />

      <h3>Using Your Module</h3>

      <p>
        Once you've created a module, you can import and use it in your Soplang programs:
      </p>

      <CodeWindow 
        code={`# Import the custom module
import dateutils

# Use functions from the module
today = dateutils.maanta()
print(f"Maanta waa: {today}")

# Create an instance of a class from the module
start = waqti.date(2023, 1, 1)
end = waqti.date(2023, 12, 31)
year_range = dateutils.DateRange(start, end)

# Use methods from the class
days = year_range.days_between()
print(f"Sanadka 2023 waxaa ku jira {days} maalmood")`}
        title="main.so"
      />

      <h3>Module Distribution</h3>

      <p>
        To share your module with others, you can:
      </p>

      <ul>
        <li>Package it as a Soplang Package (SOP) file</li>
        <li>Publish it to the Soplang Package Index (SOPI)</li>
        <li>Share it directly as source code</li>
      </ul>

      <p>
        For detailed instructions on packaging and publishing modules, see the{" "}
        <Link href="/docs/packaging" className="text-primary hover:underline">
          Packaging Guide
        </Link>.
      </p>

      <h2 id="creating-plugins">Creating Plugins</h2>

      <p>
        Plugins extend the core functionality of the Soplang interpreter or development tools.
        Unlike modules, which are imported by user code, plugins are loaded by the Soplang
        runtime itself.
      </p>

      <h3>Plugin Types</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">Language Plugins</h4>
          <p className="mb-0">
            Extend the Soplang language with new syntax, operators, or language features.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">Runtime Plugins</h4>
          <p className="mb-0">
            Modify the behavior of the Soplang runtime, such as adding performance monitoring or custom error handling.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">Tool Plugins</h4>
          <p className="mb-0">
            Extend the Soplang development tools, such as the REPL, debugger, or package manager.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">IDE Plugins</h4>
          <p className="mb-0">
            Add Soplang support to popular IDEs and text editors, with features like syntax highlighting and code completion.
          </p>
        </div>
      </div>

      <h3>Creating a Basic Plugin</h3>

      <p>
        Here's an example of a simple runtime plugin that logs function calls:
      </p>

      <CodeWindow 
        code={`# function_logger.so - A plugin to log function calls

from soplang.plugin import RuntimePlugin
import logging

class FunctionLogger(RuntimePlugin):
    """Plugin that logs all function calls in Soplang programs"""
    
    def __init__(self, config=None):
        super().__init__(config)
        self.logger = logging.getLogger("soplang.function_logger")
        self.logger.setLevel(logging.INFO)
        
        # Set up console handler if not already configured
        if not self.logger.handlers:
            handler = logging.StreamHandler()
            formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
            handler.setFormatter(formatter)
            self.logger.addHandler(handler)
    
    def before_function_call(self, func_name, args, kwargs):
        """Called before any function is executed"""
        self.logger.info(f"Calling function: {func_name} with args: {args} and kwargs: {kwargs}")
        return args, kwargs
    
    def after_function_call(self, func_name, result, exception=None):
        """Called after any function is executed"""
        if exception:
            self.logger.error(f"Function {func_name} raised exception: {exception}")
        else:
            self.logger.info(f"Function {func_name} returned: {result}")
        return result

# Register the plugin
def register_plugin(registry):
    registry.register_runtime_plugin("function_logger", FunctionLogger)`}
        title="function_logger.so"
      />

      <h3>Installing and Using Plugins</h3>

      <p>
        To use a plugin, you need to install it and enable it in your Soplang configuration:
      </p>

      <CodeWindow 
        code={`# Install the plugin
soplang install-plugin function_logger.so

# Enable the plugin in soplang.config
{
  "plugins": {
    "function_logger": {
      "enabled": true,
      "config": {
        "log_level": "INFO"
      }
    }
  }
}`}
        title="Terminal & soplang.config"
      />

      <h2 id="c-extensions">C/C++ Extensions</h2>

      <p>
        For performance-critical code, you can write extensions in C or C++ that can be called from Soplang.
        This is particularly useful for computationally intensive tasks or when interfacing with existing C libraries.
      </p>

      <h3>Building C Extensions</h3>

      <p>
        Here's a simple example of a C extension that provides a fast implementation of the Fibonacci function:
      </p>

      <CodeWindow 
        code={`// fibonacci.c - Fast Fibonacci implementation for Soplang

#include <soplang.h>

// Calculate Fibonacci number using dynamic programming
static PyObject* fibonacci(PyObject* self, PyObject* args) {
    long n;
    if (!PyArg_ParseTuple(args, "l", &n))
        return NULL;
    
    if (n < 0) {
        PyErr_SetString(PyExc_ValueError, "Input must be non-negative");
        return NULL;
    }
    
    if (n <= 1)
        return PyLong_FromLong(n);
    
    long a = 0, b = 1, c;
    for (long i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return PyLong_FromLong(b);
}

// Method definition
static PyMethodDef FibonacciMethods[] = {
    {"fibonacci", fibonacci, METH_VARARGS, "Calculate the nth Fibonacci number"},
    {NULL, NULL, 0, NULL}
};

// Module definition
static struct PyModuleDef fibonaccimodule = {
    PyModuleDef_HEAD_INIT,
    "fibonacci_c",
    "Fast Fibonacci implementation in C",
    -1,
    FibonacciMethods
};

// Module initialization
PyMODINIT_FUNC PyInit_fibonacci_c(void) {
    return PyModule_Create(&fibonaccimodule);
}`}
        title="fibonacci.c"
      />

      <p>
        You'll also need a setup file to build the extension:
      </p>

      <CodeWindow 
        code={`# setup.so - Build script for the C extension

from soplang.build import setup, Extension

setup(
    name="fibonacci_c",
    version="1.0",
    ext_modules=[
        Extension(
            "fibonacci_c",
            sources=["fibonacci.c"],
        ),
    ],
)`}
        title="setup.so"
      />

      <h3>Using C Extensions</h3>

      <p>
        After building the extension, you can import and use it like any other module:
      </p>

      <CodeWindow 
        code={`# Import the C extension
import fibonacci_c

# Use the fast Fibonacci implementation
n = 40
result = fibonacci_c.fibonacci(n)
print(f"Fibonacci({n}) = {result}")

# Compare with a pure Soplang implementation
def fibonacci_so(n):
    if n <= 1:
        return n
    return fibonacci_so(n-1) + fibonacci_so(n-2)

# This will be much slower for large values of n
# result_so = fibonacci_so(n)  # Uncomment to compare (warning: slow!)`}
        title="main.so"
      />

      <h2 id="integrations">Integrating with Other Tools</h2>

      <p>
        Soplang can be integrated with various tools and frameworks to enhance its capabilities.
      </p>

      <h3>Web Frameworks</h3>

      <p>
        You can use Soplang with web frameworks to build web applications:
      </p>

      <CodeWindow 
        code={`# app.so - A simple web application using the Bogga framework

from bogga import Bogga, request, response

app = Bogga("SoplangWebApp")

@app.route("/")
def home():
    return "<h1>Soo dhawow!</h1><p>Welcome to my Soplang web app!</p>"

@app.route("/api/data")
def get_data():
    return response.json({
        "message": "Data from Soplang API",
        "status": "success",
        "data": [1, 2, 3, 4, 5]
    })

@app.route("/greet/<name>")
def greet(name):
    return f"<h1>Salaan, {name}!</h1>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)`}
        title="app.so"
      />

      <h3>Database Integrations</h3>

      <p>
        Connect Soplang to databases for data storage and retrieval:
      </p>

      <CodeWindow 
        code={`# database_example.so - Connecting to a database from Soplang

from soplang.db import connect

# Connect to a database
db = connect("postgresql://user:password@localhost/mydb")

# Create a table
db.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
""")

# Insert data
def add_user(name, email):
    db.execute(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        (name, email)
    )
    print(f"User {name} added successfully!")

# Query data
def get_users():
    result = db.query("SELECT * FROM users ORDER BY created_at DESC")
    for row in result:
        print(f"User: {row['name']} ({row['email']})")

# Example usage
add_user("Abdirahman", "abdi@example.com")
add_user("Faduma", "faduma@example.com")
get_users()`}
        title="database_example.so"
      />

      <h3>Machine Learning Integration</h3>

      <p>
        Use Soplang with machine learning libraries:
      </p>

      <CodeWindow 
        code={`# ml_example.so - Using machine learning in Soplang

import cilmi  # Soplang's machine learning library
import xogta  # Soplang's data processing library

# Load and prepare data
data = xogta.read_csv("data.csv")
X = data.drop("target", axis=1)
y = data["target"]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = cilmi.model_selection.train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train a model
model = cilmi.ensemble.RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Evaluate the model
accuracy = model.score(X_test, y_test)
print(f"Model accuracy: {accuracy:.2f}")

# Make predictions
predictions = model.predict(X_test)
print("Sample predictions:", predictions[:5])

# Save the model
cilmi.save_model(model, "forest_model.cilmi")`}
        title="ml_example.so"
      />

      <h2 id="best-practices">Best Practices</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
        <h3 className="text-primary dark:text-blue-400 mt-0">Tips for Extending Soplang</h3>
        <ul className="mb-0">
          <li>Follow the Soplang coding style and conventions</li>
          <li>Write comprehensive documentation and examples</li>
          <li>Include tests for your extensions</li>
          <li>Consider backward compatibility</li>
          <li>Optimize for performance where necessary</li>
          <li>Support both English and Somali interfaces when possible</li>
          <li>Contribute to the community by sharing your extensions</li>
        </ul>
      </div>

      <h2 id="community-extensions">Community Extensions</h2>

      <p>
        The Soplang community has developed many useful extensions. Here are some popular ones:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">Bogga</h4>
          <p>
            A lightweight web framework for building web applications with Soplang.
          </p>
          <a href="https://github.com/soplang/bogga" className="text-primary hover:underline text-sm">
            View on GitHub →
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">Xogta</h4>
          <p>
            Data analysis and manipulation library, similar to pandas.
          </p>
          <a href="https://github.com/soplang/xogta" className="text-primary hover:underline text-sm">
            View on GitHub →
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-primary dark:text-blue-400 mt-0">Cilmi</h4>
          <p>
            Machine learning library with implementations of common algorithms.
          </p>
          <a href="https://github.com/soplang/cilmi" className="text-primary hover:underline text-sm">
            View on GitHub →
          </a>
        </div>
      </div>

      <h2 id="contributing">Contributing Your Extensions</h2>

      <p>
        We encourage you to share your Soplang extensions with the community. Here's how:
      </p>

      <ol>
        <li>Develop and test your extension thoroughly</li>
        <li>Create clear documentation with examples</li>
        <li>Publish your code on GitHub or another code hosting platform</li>
        <li>Submit your extension to the Soplang Package Index (SOPI)</li>
        <li>Share your work on the Soplang forums and Discord community</li>
      </ol>

      <p>
        For detailed guidelines on contributing to the Soplang ecosystem, see the{" "}
        <Link href="/contribute" className="text-primary hover:underline">
          Contribution Guide
        </Link>.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <Link
            href="/docs/language"
            className="inline-flex items-center text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous: Language Reference
          </Link>
          <Link
            href="/docs/faq"
            className="inline-flex items-center text-primary hover:underline"
          >
            Next: FAQs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 