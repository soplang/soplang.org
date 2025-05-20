# Strings in Soplang

Soplang supports a variety of string manipulation methods using intuitive Somali keywords. Strings are declared using `door` or `qoraal`.

---

### 🧵 Declare a String

```sop
qoraal magac = "Sharafdin Yusuf"
door farriin = "Ku soo dhowow Soplang"
```

---

### 🛠️ String Methods

| Method            | English Equivalent | Description                           | Example                                  |
| ----------------- | ------------------ | ------------------------------------- | ---------------------------------------- |
| `qeybi(xad)`      | `split()`          | Split string by delimiter             | `door parts = text.qeybi(",")`           |
| `leeyahay(sub)`   | `includes()`       | Check if string contains substring    | `haddii (text.leeyahay("search")) {...}` |
| `dhamaad(sub)`    | `endsWith()`       | Check if string ends with substring   | `haddii (text.dhamaad("ing")) {...}`     |
| `bilow(sub)`      | `startsWith()`     | Check if string starts with substring | `haddii (text.bilow("http")) {...}`      |
| `beddel(x, y)`    | `replace()`        | Replace substring x with y            | `door new = text.beddel("old", "new")`   |
| `kudar(teed)`     | `join()`           | Join list of strings with separator   | `door text = ", ".kudar(names)`          |
| `jar(start, end)` | `slice()`          | Extract substring from start to end   | `door sub = text.jar(0, 3)`              |

---

### 📌 Example Usage

```sop
qoraal jumlad = "Soplang waa luqad qurux badan"

// Split string into parts
teed ereyo = jumlad.qeybi(" ")
qor("Ereyada: " + ereyo)

// Check if it contains a word
haddii (jumlad.leeyahay("luqad")) {
    qor("Waa luqad!")
}

// Starts and ends with
haddii (jumlad.bilow("Soplang")) {
    qor("Waxay ku bilaabataa Soplang")
}

haddii (jumlad.dhamaad("badan")) {
    qor("Waxay ku dhammaanaysaa badan")
}

// Replace word
door beddelay = jumlad.beddel("luqad", "barnaamij")
qor("Beddelay: " + beddelay)

// Join string from list
teed magacyo = ["Ayaan", "Omar", "Zahra"]
door joined = ", ".kudar(magacyo)
qor("Dad: " + joined)

// Slice part of string
door qeyb = jumlad.jar(0, 7)
qor("Qeybta koowaad: " + qeyb)
```

---

Strings in Soplang are expressive and accessible with native Somali naming for common operations.
