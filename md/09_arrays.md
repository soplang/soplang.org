# Arrays in Soplang

Arrays in Soplang are declared using the `teed` keyword. They support a wide range of methods for managing, transforming, and analyzing collections of values.

---

### 📦 Declaring Arrays

```sop
teed numbers = [1, 2, 3, 4]
teed magacyo = ["Ali", "Zahra"]
```

---

### 🔧 Core Array Methods

#### `dherer()` – Get Length

```sop
teed x = [10, 20, 30]
qor("Length: " + x.dherer())  // 3
```

#### `kudar(x)` – Add to End

```sop
teed x = [1, 2]
x.kudar(3)         // [1, 2, 3]
x.kudar(4)         // [1, 2, 3, 4]
```

#### `kasaar()` – Remove Last

```sop
door last = x.kasaar()
qor("Removed: " + last)
```

#### `kudar(teed)` – Concatenate

```sop
teed a = [1, 2]
teed b = [3, 4]
teed c = a.kudar(b)    // [1, 2, 3, 4]
```

#### `leeyahay(x)` – Contains Check

```sop
haddii (c.leeyahay(3)) {
    qor("Waa jiraa")
}
```

---

### 🧪 Utility Methods

#### `nuqul()` – Copy Array

```sop
teed asal = [10, 20]
teed copy = asal.nuqul()
qor("Copy: " + copy)
```

#### `rog()` – Reverse

```sop
asal.rog()
qor("Reversed: " + asal)
```

#### `nadiifi()` – Clear

```sop
copy.nadiifi()
qor("Emptied copy: " + copy)
```

#### `habee()` – Sort

```sop
teed t = [4, 2, 3]
t.habee()
qor("Sorted: " + t)
```

---

### 🔬 Transform and Filter

#### `aaddin(funk)` – Map Items

```sop
hawl laban(x) {
    celi x * 2
}

teed nums = [1, 2, 3]
teed doubled = nums.aaddin("laban")
```

#### `shaandhee(funk)` – Filter Items

```sop
hawl is_even(x) {
    celi x % 2 == 0
}

teed filtered = nums.shaandhee("is_even")
```

---

### 📍 Indexing and Slicing

#### `muuji(x)` – Find Index

```sop
abn i = nums.muuji(2)
qor("Index of 2: " + i)
```

#### `jar(a, b)` – Slice Sublist

```sop
teed subset = nums.jar(1, 3)
qor("Subset: " + subset)
```

---

Arrays in Soplang are a core data structure, offering a Somali-first syntax for efficient list manipulation and iteration.
