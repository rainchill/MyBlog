---
sidebar_position: 7
---

# `string` 与 `String`

在 JavaScript 中， String 和 string 是两个不同的概念，它们在使用场景和功能上有所区别。以下是详细的解释：

## string

`string` 是 JavaScript 中的原始数据类型之一，用于表示文本数据。它是不可变的，即一旦创建，其内容不能被修改。

### 示例

```javascript
let greeting = "Hello, world!";
console.log(typeof greeting); // 输出：string
```

## String

`String` 是 JavaScript 中的一个构造函数，用于创建字符串对象。它提供了许多字符串操作的方法和属性。

### 示例

```javascript
let greeting = new String("Hello, world!");
console.log(typeof greeting); // 输出：object
```

## String 和 string 的区别

### 类型不同

- `string` 是原始数据类型， typeof 返回 "string" 。
- `String` 是构造函数，创建的是字符串对象， typeof 返回 "object" 。

### 可变性不同

- `string` 是不可变的，每次操作都会创建一个新的字符串。
- `String` 创建的字符串对象是可变的，可以添加属性和方法。

### 使用场景不同

- `string` 通常用于简单的字符串操作，如拼接、查找、替换等。
- `String` 通常用于需要字符串对象的场景，例如需要对字符串进行复杂操作或需要使用字符串对象的特性。

在实际开发中，大多数情况下使用 `string` 即可，因为它的**性能更好**且更符合 JavaScript 的常规用法。只有在需要字符串对象的特性时，才使用 `String` 构造函数。
