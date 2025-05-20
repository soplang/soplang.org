# Loops in Soplang

Soplang supports two distinct types of loops:

- `intay (condition)` → while loop
- `kuceli (start ilaa end)` → for loop

It also provides `jooji` (break) and `soco` (continue) for fine control.

---

### 🔁 While Loop – `intay`

Repeats a block of code as long as the condition is true:

```sop
abn i = 1
intay (i <= 5) {
    qor("i = " + i)
    i = i + 1
}
```

Supports break and continue:

```sop
intay (i <= 10) {
    haddii (i == 6) {
        jooji
    }
    i = i + 1
}
```

---

### 🔁 For Loop – `kuceli`

```sop
kuceli (i 1 ilaa 5) {
    qor("Tirada: " + i)
}
```

With step:

```sop
kuceli (j 2 ilaa 10 :: 2) {
    qor("Step: " + j)
}
```

---

### 🔁 Loop Over List

```sop
teed numbers = [10, 20, 30]
kuceli (i 0 ilaa numbers.dherer() - 1) {
    qor("Element " + i + ": " + numbers[i])
}
```

---

### 🔁 Nested Loops

```sop
kuceli (i 1 ilaa 3) {
    intay (i > 0) {
        qor("Nested example")
        jooji
    }
}
```

---

### 🔁 Factorial with While

```sop
abn a = 5
abn result = 1
abn n = a

intay (n > 0) {
    result = result * n
    n = n - 1
}
qor(result)
```

---

### ✅ Summary

| Keyword     | Meaning         |
|-------------|-----------------|
| `intay`     | while loop      |
| `kuceli`    | for loop        |
| `jooji`     | break           |
| `soco`      | continue        |

Soplang loops support both structured iteration and conditional repetition.
