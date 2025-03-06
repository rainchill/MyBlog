---
sidebar_position: 1
# 显示 h2 到 h5 标题
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# JavaScript 类型总览

在 JavaScript 中，有多种数据类型，这些类型可以分为两大类：**原始类型（Primitive Types）** 和 **引用类型（Reference Types）**。

关于 `String` 和 `string`、`Number` 和 `number`、`Obeject` 和 `object` 等的区别可以看 [object 与 Object](./2-object/6-object-Object.md) 以及 [string 与 String](./2-object/7-string-String.md)

## 原始类型（Primitive Types）

### number

表示数字，包括整数和浮点数。

```javascript
let age = 25; // 整数
let price = 99.99; // 浮点数
```

### string

表示文本数据，由字符组成的序列。

```javascript
let name = "Alice";
let greeting = "Hello, world!";
```

### boolean

表示逻辑实体，只有两个值：true 和 false。

```javascript
let isApproved = true;
let isReady = false;
```

### undefined

表示变量已声明但未初始化，即没有赋予具体的值。

```javascript
let x;
console.log(x); // 输出：undefined
```

### null

表示故意赋予变量的空值。

```javascript
let y = null;
console.log(y); // 输出：null
```

### symbol

（ES6 新增）用于创建唯一的、不可变的数据类型，常用于对象属性的键。

```javascript
let mySymbol = Symbol("mySymbol");
console.log(mySymbol); // 输出：Symbol(mySymbol)
```

### bigInt

（ES2020 新增）用于表示大于 2^53 - 1 的整数。

```javascript
let bigNumber = BigInt(1234567890123456789012345678901234567890n);
console.log(bigNumber); // 输出：1234567890123456789012345678901234567890n
```

## 引用类型（Reference Types）

在 JavaScript 中，引用类型（Reference Types） 被称为“引用类型”，是因为它们存储的不是实际的数据值，而是对数据的引用。这种引用指向内存中的实际数据存储位置。换句话说，引用类型变量保存的是一个指向实际数据的“指针”或“引用”，而不是数据本身。

具体可以看[这里](../../blog/reference-types)

### object

表示一组键值对的集合。

```javascript
let person = {
  name: "Alice",
  age: 25,
  isApproved: true,
};
```

其中 `object`包括以下类型等。

#### Array

表示一组有序的值的集合，可以包含任意类型的数据。

```javascript
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "Alice", true, { name: "Bob" }];
```

#### Function

表示可执行的代码块，可以作为值传递和赋值。

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

let myFunction = function () {
  console.log("This is an anonymous function.");
};
```

#### Date

表示日期和时间。

```javascript
let currentDate = new Date();
console.log(currentDate); // 输出当前日期和时间
```

#### RegExp

表示正则表达式，用于字符串匹配和替换操作。

```javascript
let regex = /pattern/g;
console.log(regex.test("some string")); // 检查是否匹配
```
