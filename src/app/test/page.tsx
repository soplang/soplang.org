"use client";

import React from "react";
import CodeWindow from "../../components/CodeWindow";

// Sample code snippet with Hello World example
const codeSnippet = `// Hello World
qor("Salaan, Adduunka!")

// Variables
door magac = 'Sharafdin'
qoraal cinwaan = "Soplang Developer"
tiro da = 10

qor("Magaca: " + magac)
qor("Cinwaanka: " + cinwaan)
qor("Da'da: " + qoraal(da))

// Function
howl salaan(qofka) {
    soo_celi "Salaan, " + qofka + "!"
}
qor(salaan(magac))
`;

export default function TestPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="max-w-2xl w-full mx-4">
        <CodeWindow code={codeSnippet} title="main.sop" />
      </div>
    </div>
  );
}
