---
sidebar_position: 6
---

# `object` 与 `Object`

## 概述

在 JavaScript 中，`object` 和 `Object` 都与对象相关，但它们有着不同的含义和用途。`object` 是 JavaScript 中的一种基本数据类型，而 `Object` 是 JavaScript 提供的一个内置构造函数，用于创建对象实例或定义对象的原型。本文将探讨它们之间的关系与区别。

## 定义与创建

### 1. `object` 类型

`object` 是 JavaScript 的基本数据类型之一，表示一个无序的键值对集合。它是所有非原始数据类型（如数组、函数等）的基石。

#### 创建方式

```javascript
// 对象字面量
const obj1 = { name: "Alice", age: 25 };

// 通过 Object 构造函数
const obj2 = new Object();
obj2.name = "Bob";
obj2.age = 30;
```

### 2. `Object` 构造函数

`Object` 是 JavaScript 的内置构造函数，用于显式创建对象或操作对象的原型。它是所有对象的“蓝图”，并且可以通过 `new Object()` 或对象字面量创建对象实例。

#### 创建方式

```javascript
const obj = new Object();
obj.key = "value";

console.log(obj); // 输出: { key: "value" }
```

### 示例

```javascript
// 使用 object 类型（字面量）
const person1 = { name: "Alice" };

// 使用 Object 构造函数
const person2 = new Object();
person2.name = "Bob";

console.log(typeof person1); // 输出: "object"
console.log(typeof person2); // 输出: "object"
console.log(person1 instanceof Object); // 输出: true
console.log(person2 instanceof Object); // 输出: true
```

## 关系

1. **继承关系**：

   - 所有 `object` 类型的值（包括通过字面量创建的对象）都继承自 `Object.prototype`。
   - `Object` 是构造函数，而 `object` 是该构造函数实例化后的数据类型。

2. **原型链**：

   - 每个 `object` 类型的实例都可以通过原型链访问 `Object.prototype` 上的方法（如 `toString()`、`hasOwnProperty()` 等）。

3. **实例化**：
   - 使用 `new Object()` 创建的对象是 `object` 类型的一个实例。
   - 使用字面量 `{}` 创建的对象本质上等价于 `new Object()`，但更简洁。

### 示例

```javascript
const obj = {};
console.log(obj.toString()); // 输出: "[object Object]"
console.log(Object.prototype.isPrototypeOf(obj)); // 输出: true
```

## 区别

1. **概念层面**：

   - `object` 是数据类型的名称，表示一种具体的数据结构。
   - `Object` 是构造函数，用于创建 `object` 类型的实例或定义对象的通用方法。

2. **大小写**：

   - `object` 是小写，通常用于描述类型（如 `typeof` 返回值）。
   - `Object` 是大写，是一个具体的构造函数名称。

3. **使用场景**：

   - `object` 是程序中实际使用的值，开发者直接操作它。
   - `Object` 更多用于构造对象、扩展功能或调用静态方法。

4. **检测方式**：
   - `typeof` 用于检测值是否为 `object` 类型。
   - `instanceof Object` 用于检测对象是否由 `Object` 构造或继承。

### 示例

```javascript
const obj = {};
console.log(typeof obj); // 输出: "object"
console.log(obj instanceof Object); // 输出: true

console.log(typeof Object); // 输出: "function"
```

## 常用方法

`Object` 构造函数提供了一系列静态方法，用于操作 `object` 类型的值。

### 1. `Object.keys()`

- **用途**：返回对象自身可枚举属性的键名数组。
- **参数**：
  - `obj`：目标对象。
- **返回值**：键名数组。

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // 输出: ["a", "b", "c"]
```

### 2. `Object.values()`

- **用途**：返回对象自身可枚举属性的值数组。
- **参数**：
  - `obj`：目标对象。
- **返回值**：值数组。

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // 输出: [1, 2, 3]
```

### 3. `Object.assign()`

- **用途**：将一个或多个源对象的属性复制到目标对象。
- **参数**：
  - `target`：目标对象。
  - `source1, source2, ...`：源对象。
- **返回值**：目标对象。

```javascript
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // 输出: { a: 1, b: 2 }
```

## 属性

### 1. `prototype`

- **用途**：`Object` 的原型对象，所有 `object` 类型实例共享其方法。
- **示例**：

```javascript
const obj = {};
console.log(obj.hasOwnProperty === Object.prototype.hasOwnProperty); // 输出: true
```

### 2. `constructor`

- **用途**：指向创建实例的构造函数。
- **示例**：

```javascript
const obj = new Object();
console.log(obj.constructor === Object); // 输出: true
```

## 应用场景

### 1. 数据存储

`object` 类型常用于存储键值对数据。

```javascript
const user = {
  name: "Alice",
  age: 25,
};
console.log(user.name); // 输出: "Alice"
```

### 2. 对象合并

使用 `Object.assign()` 合并多个对象。

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // 输出: { a: 1, b: 2 }
```

### 3. 类型检测

结合 `typeof` 和 `instanceof` 判断值的类型。

```javascript
const obj = {};
console.log(typeof obj === "object" && obj instanceof Object); // 输出: true
```

## 总结

`object` 和 `Object` 在 JavaScript 中密切相关但各有侧重：

- `object` 是基本数据类型，表示键值对集合。
- `Object` 是构造函数，用于创建 `object` 类型实例并提供操作方法。
- 所有 `object` 类型的值都继承自 `Object.prototype`。

以下是 `Object` 的常用方法总结：

| 方法              | 用途             | 示例                         |
| ----------------- | ---------------- | ---------------------------- |
| `Object.keys()`   | 返回对象键名数组 | `Object.keys(obj)`           |
| `Object.values()` | 返回对象值数组   | `Object.values(obj)`         |
| `Object.assign()` | 合并对象         | `Object.assign(target, src)` |
