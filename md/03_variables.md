# Soplang Variables

Soplang variables are declared using Somali-first keywords that reflect their role or type. These make code more expressive and localized for Somali speakers.

---

### 🟢 Dynamic Variables – `door`

- `door` is short for *doorsoome*
- Used for dynamically typed variables

```sop
door magaca = "Aamina"
door da = 19
door xaqiiqo = run
```

---

### 🔵 Static Variables

Static variables are explicitly typed and use specific keywords for type clarity.

| Type      | Keyword  | Stands for         | Example                              |
|-----------|----------|--------------------|--------------------------------------|
| Integer   | `abn`    | *abyoone*          | `abn tirada = 10`                    |
| Float     | `jajab`  | *jajab*       | `jajab qiime = 3.14`                 |
| String    | `qoraal` | *qoraal*      | `qoraal magaca = "Soplang"`          |
| Boolean   | `bool`   | *bool*        | `bool sax = run`                     |
| List      | `teed`   | *teed*        | `teed liis = [1, 2, 3]`              |
| Object    | `walax`  | *walax*       | `walax qof = {magac: "Ali"}`         |

---

### 🟡 Constants – `madoor`

- `madoor` is short for *madoorsoome*
- Used for immutable values (constants)

```sop
madoor magaca = "Soplang"
madoor da: abn = 21
```

Constants cannot be reassigned:

```sop
madoor luqad = "Somali"
luqad = "English"  // ❌ Error: cannot reassign constant
```

---

This section covers how to declare and use dynamic, static, and constant variables in Soplang.
