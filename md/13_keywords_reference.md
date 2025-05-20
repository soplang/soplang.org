# Soplang Keywords Reference

This document provides a reference for all keywords in the Soplang programming language, along with their meanings and examples of usage.

---

## Variable Declaration Keywords

| Keyword  | Meaning                       | English Equivalent | Example                                |
| -------- | ----------------------------- | ------------------ | -------------------------------------- |
| `door`   | Dynamic variable declaration  | `var`/`let`        | `door magac = "Sharafdin"`             |
| `madoor` | Constant variable declaration | `const`            | `madoor PI = 3.14159`                  |
| `abn`    | Integer type                  | `int`              | `abn da = 25`                          |
| `jajab`  | Decimal/float type            | `float`/`double`   | `jajab qiimo = 3.14`                   |
| `qoraal` | String type                   | `string`           | `qoraal magac = "Sharafdin"`           |
| `bool`   | Boolean type                  | `bool`             | `bool waaRun = run`                    |
| `walax`  | Object type                   | `object`           | `walax person = { name: "Sharafdin" }` |
| `teed`   | List/array type               | `array`            | `teed numbers = [1, 2, 3]`             |
| `maran`  | Null value                    | `null`             | `door a = maran`                       |

---

## Control Flow Keywords

| Keyword       | Meaning            | English Equivalent | Example                                      |
| ------------- | ------------------ | ------------------ | -------------------------------------------- |
| `haddii`      | If statement       | `if`               | `haddii (x > 10) { qor("Weyn") }`            |
| `haddii_kale` | Else if statement  | `else if`          | `haddii_kale (x == 10) { qor("Dhexe") }`     |
| `ugudambeyn`  | Else statement     | `else`             | `ugudambeyn { qor("Yar") }`                  |
| `dooro`       | Switch statement   | `switch`           | `dooro (x) { xaalad 1 { qor("Hal") } }`      |
| `xaalad`      | Case clause        | `case`             | `xaalad "A" { qor("Case A") }`               |
| `kuceli`      | For loop           | `for`              | `kuceli (i 1 ilaa 5) { qor(i) }`             |
| `ilaa`        | Loop range end     | `to`               | `kuceli (i 1 ilaa 5) { qor(i) }`             |
| `::`          | Loop increment     | `step`             | `kuceli (i 1 ilaa 10 :: 2) { qor(i) }`       |
| `intay`       | While loop         | `while`            | `intay (x < 5) { qor(x) }`                   |
| `jooji`       | Break statement    | `break`            | `haddii (x == 3) { jooji }`                  |
| `soco`        | Continue statement | `continue`         | `haddii (x == 3) { soco }`                   |

---

## Function Keywords

| Keyword | Meaning              | English Equivalent | Example                            |
| ------- | -------------------- | ------------------ | ---------------------------------- |
| `hawl`  | Function declaration | `function`         | `hawl isuGee(a, b) { celi a + b }` |
| `celi`  | Return statement     | `return`           | `celi x * 2`                       |

---

## Special Values

| Somali Value | English Equivalent | Description         | Example                  |
| ------------ | ------------------ | ------------------- | ------------------------ |
| `run`        | `true`             | Boolean true value  | `haddii (run) { ... }`   |
| `been`       | `false`            | Boolean false value | `haddii (!been) { ... }` |
| `maran`      | `null`             | Empty/null value    | `door val = maran`       |

---

## Operators

| Somali Operator | English Equivalent | Description              | Example                   |
| --------------- | ------------------ | ------------------------ | ------------------------- |
| `+`             | `+`                | Addition                 | `x = a + b`               |
| `-`             | `-`                | Subtraction              | `x = a - b`               |
| `*`             | `*`                | Multiplication           | `x = a * b`               |
| `/`             | `/`                | Division                 | `x = a / b`               |
| `%`             | `%`                | Modulo                   | `x = a % b`               |
| `==`            | `==`               | Equal to                 | `haddii (a == b) {...}`   |
| `!=`            | `!=`               | Not equal to             | `haddii (a != b) {...}`   |
| `>`             | `>`                | Greater than             | `haddii (a > b) {...}`    |
| `<`             | `<`                | Less than                | `haddii (a < b) {...}`    |
| `>=`            | `>=`               | Greater than or equal to | `haddii (a >= b) {...}`   |
| `<=`            | `<=`               | Less than or equal to    | `haddii (a <= b) {...}`   |
| `&&`            | `&&`               | Logical AND              | `haddii (a && b) {...}`   |
| `||`            | `||`               | Logical OR               | `haddii (a || b) {...}`   |
| `!`             | `!`                | Logical NOT              | `haddii (!a) {...}`       |
