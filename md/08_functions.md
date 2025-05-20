# Functions in Soplang

Functions in Soplang are declared using the keyword `hawl` and return values using the keyword `celi`.

---

### 🛠️ Define a Function – `hawl`

A function starts with `hawl`, followed by the function name and parameters (no type annotations).

```sop
hawl salaan(magac) {
    qor("Asalaamu calaykum, " + magac)
}
```

---

### 🧾 Call a Function

Once defined, call the function by name:

```sop
salaan("Aamina")
```

---

### 🔁 Return Values – `celi`

Use `celi` to return a value from a function.

```sop
hawl labanlaab(x) {
    celi x * 2
}

abn natiijo = labanlaab(5)
qor("Natiijo: " + natiijo)
```

---

### 🔄 Loops Inside Functions

Functions can contain loops and logic like any regular Soplang block:

```sop
hawl muujin(liis) {
    kuceli (i 0 ilaa liis.dherer() - 1) {
        qor("Liiska: " + liis[i])
    }
}
```

---

### ✅ Summary

| Keyword   | Meaning            |
|-----------|---------------------|
| `hawl`    | function definition |
| `celi`    | return value        |

Functions in Soplang make code reusable and clean while using native Somali terms.
