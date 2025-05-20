# Built-in Functions in Soplang

Soplang includes essential built-in functions for printing, input, conversion, rounding, and more. These functions use clear Somali terms and are always available in any program.

---

### 📋 Built-in Function Reference

| Function   | Meaning               | English Equivalent | Example                                  |
|------------|------------------------|---------------------|------------------------------------------|
| `qor()`    | Print to console       | `print()`           | `qor("Salaan, Adduunka!")`               |
| `gelin()`  | Read user input        | `input()`           | `door magac = gelin("Magacaaga geli: ")` |
| `nooc()`   | Get type of a value    | `typeof`            | `qor(nooc(magac))`                       |
| `abn()`    | Convert to integer     | `int()`             | `door n = abn("5")`                      |
| `jajab()`  | Convert to float       | `float()`           | `door f = jajab("3.14")`                 |
| `qoraal()` | Convert to string      | `str()`             | `door s = qoraal(25)`                    |
| `bool()`   | Convert to boolean     | `bool()`            | `door b = bool(1)`                       |
| `teed()`   | Create an array        | `list()`            | `door liis = teed(1, 2, 3)`              |
| `walax()`  | Create an object       | `object()`          | `door obj = walax(magac: "Ali")`         |
| `daji()`   | Round down             | `Math.floor()`      | `door x = daji(4.9)`                     |
| `kor()`    | Round up               | `Math.ceil()`       | `door x = kor(4.2)`                      |
| `dherer()` | Length of string/list  | `len()`/`.length`   | `door l = qoraal.dherer()`               |
| `xul()`    | Pick random number     | `random()`          | `door n = xul(1, 6)`                     |

---

### 🧪 Examples

```sop
// Output
qor("Hello World")

// Input
door magac = gelin("Magacaaga geli: ")
qor("Magacaaga waa: " + magac)

// Type detection
door t = nooc(5)
qor("Type: " + t)

// Conversion
door a = abn("42")
door f = jajab("3.14")
door s = qoraal(100)
door b = bool(0)

// List and Object creation
door l = teed(1, 2, 3)
door o = walax(name: "Ayaan", age: 20)

// Math rounding
qor("Floor: " + daji(4.8))
qor("Ceil: " + kor(4.2))

// Random number
door r = xul(1, 6)
qor("Random: " + r)
```

---

Soplang built-ins make code expressive, compact, and accessible in your own language.
