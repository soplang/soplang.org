# Operators in Soplang

Soplang supports standard arithmetic, comparison, and logical operators — all written in familiar syntax.

---

### ➕ Arithmetic Operators

Used for numeric calculations with `abn` or `jajab` values.

| Operator | Meaning         | Example         |
|----------|------------------|-----------------|
| `+`      | Addition         | `a + b`         |
| `-`      | Subtraction      | `a - b`         |
| `*`      | Multiplication   | `a * b`         |
| `/`      | Division         | `a / b`         |
| `%`      | Modulo           | `a % b`         |

```sop
abn a = 10
abn b = 3
qor("Wadarta: " + (a + b))
qor("Hadhaaga: " + (a % b))
```

---

### 🧮 Comparison Operators

Used for checking equality or order between values.

| Operator | Meaning         | Example        |
|----------|------------------|----------------|
| `==`     | Equal            | `a == b`       |
| `!=`     | Not equal        | `a != b`       |
| `>`      | Greater than     | `a > b`        |
| `<`      | Less than        | `a < b`        |
| `>=`     | Greater or equal | `a >= b`       |
| `<=`     | Less or equal    | `a <= b`       |

```sop
door a = 5
door b = 10
qor("a == b: " + (a == b))
qor("a < b: " + (a < b))
```

---

### 🔗 Logical Operators

Used to combine multiple boolean conditions.

| Operator | Meaning       | Example               |
|----------|----------------|------------------------|
| `&&`     | Logical AND   | `(a > 5) && (b < 10)`  |
| `||`     | Logical OR    | `(a < 5) || (b > 3)`   |
| `!`      | Logical NOT   | `!(a == b)`            |

```sop
abn x = 5
abn y = 10

bool isInRange = (x > 3) && (y < 15)
bool isMismatch = !(x == y)
qor("Is in range: " + isInRange)
qor("Mismatch: " + isMismatch)
```

---

Soplang operators allow you to build powerful expressions and control logic cleanly.
