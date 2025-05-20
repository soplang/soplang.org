# Type Conversion in Soplang

Soplang supports built-in conversion between types using Somali-first function names. These allow you to safely convert values between integers, strings, decimals, and booleans.

---

### 🧪 Type Checking – `nooc()`

Use `nooc()` to check the type of any value:

```sop
door natiijo = nooc(42)         // "abn"
door natiijo2 = nooc("abc")     // "qoraal"
door natiijo3 = nooc(3.14)      // "jajab"
```

---

### 🔁 Type Conversion Functions

| Conversion         | Function     | Example                         |
|--------------------|--------------|----------------------------------|
| Int → String       | `qoraal()`   | `qoraal(42)`                     |
| String → Int       | `abn()`      | `abn("123")`                     |
| Float → String     | `qoraal()`   | `qoraal(3.14)`                   |
| String → Float     | `jajab()`    | `jajab("3.14")`                  |
| Int → Float        | `jajab()`    | `jajab(5)`                       |
| Float → Int        | `abn()`      | `abn(4.9)` → `4` (truncates)     |
| Any → Bool         | `bool()`     | `bool(1)` → `run`, `bool(0)` → `been` |

---

### 📌 Example

```sop
// From: 13_type_conversion.sop

// Integer to string
abn int_value = 42
qoraal int_str = qoraal(int_value)
qor("Integer to string: " + int_str + " (Type: " + nooc(int_str) + ")")

// String to decimal
qoraal decimal_string = "3.14159"
jajab converted_decimal = jajab(decimal_string)
qor("String to decimal: " + converted_decimal + " (Type: " + nooc(converted_decimal) + ")")

// Decimal to integer
jajab decimal_num = 42.75
abn int_from_decimal = abn(decimal_num)
qor("Decimal to integer (truncation): " + int_from_decimal)
```

---

These conversion functions are essential for building reliable input-handling logic in Soplang.
