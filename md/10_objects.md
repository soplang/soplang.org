# Objects in Soplang

Objects in Soplang are defined using the type `walax`. They store key-value pairs and support a set of methods to inspect, modify, and copy object data.

---

### 🧾 Declaring an Object – `walax`

```sop
walax qof = {
    magac: "Ayaan",
    da: 25,
    shaqo: "barayaal"
}
```

---

### 🔧 Core Object Methods

#### `fure()` – Get Keys

```sop
door keys = qof.fure()
qor(keys)
```

#### `qiime()` – Get Values

```sop
door values = qof.qiime()
qor(values)
```

#### `lamaane()` – Get Key-Value Pairs

```sop
door pairs = qof.lamaane()
qor(pairs)
```

#### `leeyahay(x)` – Has Key

```sop
haddii (qof.leeyahay("magac")) {
    qor("Magaca wuu jiraa")
}
```

#### `tir(x)` – Delete Key

```sop
qof.tir("shaqo")
qor(qof)
```

#### `kudar(obj)` – Merge/Assign

```sop
walax A = {x: 1}
walax B = {y: 2}
walax C = A.kudar(B)

qor(C)  // {x: 1, y: 2}
```

#### `nuqul()` – Copy

```sop
walax asal = {a: 10, b: 20}
walax copy = asal.nuqul()
qor(copy)
```

#### `nadiifi()` – Clear All Properties

```sop
asal.nadiifi()
qor("Cleared object: " + asal)
```

---

Objects in Soplang give you a powerful way to manage named data, with methods that match familiar operations but in fully Somali terms.
