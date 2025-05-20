# Soplang Syntax

Soplang syntax is designed to be clear, minimal, and intuitive for Somali speakers. It uses Somali keywords to represent familiar programming concepts, making code feel natural and readable.

---

### 🟢 Hello World

```sop
qor("Hello, Adduun!")
```

This is the simplest Soplang program. It uses the built-in function `qor()` to display output.

---

### 🧱 Structure

Soplang programs consist of:

- **Declarations** – using `door`, `abn`, `jajab`, or `madoor`
- **Functions** – using `howl`, `celi`
- **Control flow** – using `haddii`, `ugudambeyn`, `celi`, etc.
- **Built-ins** – like `qor()`, `gelin()`, `nooc()`

Blocks are defined using curly braces `{}` and code is written line by line.

---

### 🔍 Example Program

```sop
howl salaan(magac) {
    qor("Asalaamu calaykum, " + magac)
}

door magaca = gelin("Magacaaga qor: ")
salaan(magaca)
```

This example reads user input and greets them. It includes:

- a function definition (`howl`)
- a variable (`door`)
- built-in functions (`qor`, `gelin`)

---

### 📦 File Extension

Soplang source files use the `.sop` extension. You can run them with the Soplang CLI or REPL:

```bash
soplang file.sop
```

---

This syntax introduces the flow and feeling of Soplang: simple, expressive, and Somali-first.
