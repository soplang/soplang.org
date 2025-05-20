# Input and Output in Soplang

Soplang uses simple built-in functions to display output and read user input.

---

### 🖨️ `qor()` – Print to Console

Use `qor()` to display values or strings on the screen.

```sop
qor("Hello, Adduun!")
door magaca = "Aamina"
qor("Magaca: " + magaca)
```

---

### ⌨️ `gelin()` – Read from User Input

Use `gelin()` to prompt the user for input. The value is always returned as a string.

```sop
door magaca = gelin("Magacaaga qor: ")
qor("Waad ku mahadsan tahay, " + magaca)
```

You can convert input values if needed:

```sop
door da = abn(gelin("Da'daada qor: "))
```