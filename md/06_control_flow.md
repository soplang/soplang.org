# Control Flow in Soplang

Soplang provides conditional execution using Somali keywords to make logic clear and expressive.

---

### 🧠 If Statements – `haddii`, `haddii_kale`, `ugudambeyn`

These are equivalent to `if`, `else if`, and `else` in other languages.

```sop
abn da = 17

haddii (da >= 18) {
    qor("Waad qaan gaadhay")
} haddii_kale (da >= 13) {
    qor("Waxaad tahay dhallinyaro")
} ugudambeyn {
    qor("Waad yar tahay")
}
```

Each block is enclosed in `{}`. You can nest or chain as needed.

---

### 🚦 Boolean Conditions

Use `bool` type expressions with comparison or logic operators.

```sop
abn x = 4
abn y = 9

haddii (x < y && y < 10) {
    qor("Shuruudaha waa sax")
}
```

You can also negate a condition with `!`:

```sop
haddii (!(x == y)) {
    qor("Qiimuhu ma sina")
}
```

---

### ✅ Summary

| Keyword         | Meaning          |
|------------------|------------------|
| `haddii`         | if               |
| `haddii_kale`    | else if          |
| `ugudambeyn`     | else             |

Control flow in Soplang follows a readable Somali-first structure.


---

### 🔄 Switch-Case – `dooro` and `xaalad`

Soplang includes switch-case logic using:

- `dooro` → switch expression
- `xaalad` → case condition
- `ugudambeyn` → default

```sop
qoraal maalinta = "Jimce"

dooro (maalinta) {
    xaalad "Isniin" {
        qor("Todobaad cusub")
    }
    xaalad "Jimce" {
        qor("Waqti nasasho")
    }
    ugudambeyn {
        qor("Maalin kale")
    }
}
```

This is useful for clear multi-branch logic based on values.

---

### 🔁 Combined Usage

You can mix if/else and switch for complex logic in a readable way.
