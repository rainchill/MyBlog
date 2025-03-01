---
slug: reference-types
title: 引用类型为什么叫引用类型
authors: [rainchill]
tags: [JavaScript]
---

在 JavaScript 中，引用类型（Reference Types） 被称为“引用类型”，是因为它们存储的不是实际的数据值，而是对数据的引用。这种引用指向内存中的实际数据存储位置。换句话说，引用类型变量保存的是一个指向实际数据的“指针”或“引用”，而不是数据本身。

<!-- truncate -->

## 引用类型的特点

### 1. 存储引用而非值

- 引用类型变量保存的是对实际数据的引用，而不是数据本身。
- 这意味着多个变量可以引用同一个对象，对对象的修改会反映在所有引用该对象的地方。

### 2. 可变性

- 引用类型的数据是可变的，你可以修改对象的属性或数组的元素，而不会影响引用的地址

### 3. 内存管理

- 引用类型的数据存储在堆内存中，而变量存储在栈内存中。引用类型变量保存的是堆内存中的地址。
- 当引用类型的数据不再被任何变量引用时，垃圾回收器会自动回收其占用的内存。

## 示例

```javascrpt
let obj1 = { name: "Alice" }; // 创建一个对象
let obj2 = obj1; // obj2 引用 obj1 指向的对象

console.log(obj1.name); // 输出：Alice
console.log(obj2.name); // 输出：Alice

obj2.name = "Bob"; // 修改 obj2 的属性

console.log(obj1.name); // 输出：Bob
console.log(obj2.name); // 输出：Bob
```

在这个示例中：

- `obj1` 和 `obj2` 都引用了同一个对象。
- 修改 `obj2` 的属性时， `obj1` 的属性也会改变，因为它们都指向同一个对象。
