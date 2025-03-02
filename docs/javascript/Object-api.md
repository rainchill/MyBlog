---
sidebar_position: 7
---

# `Object` 的 API

## 概述

`Object` 是 JavaScript 中的内置构造函数，不仅用于创建对象实例，还提供了一系列静态方法（API）来操作对象的属性、原型和行为。这些 API 是 JavaScript 编程中处理对象的核心工具，广泛应用于属性遍历、对象复制、继承等场景。

本文将详细介绍 `Object` 的常用 API，包括其用途、参数、返回值及示例。

## API 列表与详细介绍

### 1. `Object.keys()`

- **用途**：返回一个由对象自身可枚举属性键名组成的数组。
- **参数**：
  - `obj`：目标对象。
- **返回值**：字符串数组（键名）。
- **特性**：只返回可枚举属性，不包括继承的属性。
- **示例**：

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // 输出: ["a", "b", "c"]

const objWithHidden = { a: 1 };
Object.defineProperty(objWithHidden, "b", { value: 2, enumerable: false });
console.log(Object.keys(objWithHidden)); // 输出: ["a"] （b 不可枚举）
```

### 2. `Object.values()`

- **用途**：返回一个由对象自身可枚举属性值组成的数组。
- **参数**：
  - `obj`：目标对象。
- **返回值**：数组（属性值）。
- **特性**：与 `Object.keys()` 类似，只包含可枚举属性值。
- **示例**：

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // 输出: [1, 2, 3]
```

### 3. `Object.entries()`

- **用途**：返回一个由对象自身可枚举属性键值对组成的二维数组。
- **参数**：
  - `obj`：目标对象。
- **返回值**：数组（每个元素为 `[key, value]`）。
- **特性**：便于遍历键值对。
- **示例**：

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // 输出: [["a", 1], ["b", 2]]

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`); // 输出: "a: 1", "b: 2"
}
```

### 4. `Object.assign()`

- **用途**：将一个或多个源对象的可枚举属性复制到目标对象。
- **参数**：
  - `target`：目标对象（会被修改并返回）。
  - `source1, source2, ...`：源对象。
- **返回值**：目标对象。
- **特性**：浅复制，仅复制自身属性，后续源对象会覆盖前面的同名属性。
- **示例**：

```javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { a: 3, c: 4 };
const result = Object.assign(target, source1, source2);
console.log(result); // 输出: { a: 3, b: 2, c: 4 }
console.log(target === result); // 输出: true （目标对象被修改）
```

### 5. `Object.create()`

- **用途**：创建新对象并指定其原型。
- **参数**：
  - `proto`：新对象的原型对象。
  - `propertiesObject`（可选）：属性描述符对象。
- **返回值**：新对象。
- **特性**：用于实现原型继承。
- **示例**：

```javascript
const proto = { greet: () => "Hello" };
const obj = Object.create(proto);
console.log(obj.greet()); // 输出: "Hello"

const objWithProps = Object.create(proto, {
  name: { value: "Alice", writable: true, enumerable: true },
});
console.log(objWithProps.name); // 输出: "Alice"
```

### 6. `Object.defineProperty()`

- **用途**：直接在对象上定义新属性或修改现有属性的描述符。
- **参数**：
  - `obj`：目标对象。
  - `prop`：属性名。
  - `descriptor`：属性描述符（`value`, `writable`, `enumerable`, `configurable` 等）。
- **返回值**：目标对象。
- **示例**：

```javascript
const obj = {};
Object.defineProperty(obj, "key", {
  value: "static",
  writable: false,
  enumerable: true,
});
console.log(obj.key); // 输出: "static"
obj.key = "new"; // 不可写，修改无效
console.log(obj.key); // 输出: "static"
```

### 7. `Object.defineProperties()`

- **用途**：同时定义或修改多个属性的描述符。
- **参数**：
  - `obj`：目标对象。
  - `props`：属性描述符的对象。
- **返回值**：目标对象。
- **示例**：

```javascript
const obj = {};
Object.defineProperties(obj, {
  name: { value: "Bob", writable: true },
  age: { value: 30, enumerable: true },
});
console.log(obj.name, obj.age); // 输出: "Bob" 30
```

### 8. `Object.getOwnPropertyDescriptor()`

- **用途**：获取对象自身属性的描述符。
- **参数**：
  - `obj`：目标对象。
  - `prop`：属性名。
- **返回值**：属性描述符对象或 `undefined`。
- **示例**：

```javascript
const obj = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor); // 输出: { value: 1, writable: true, enumerable: true, configurable: true }
```

### 9. `Object.getOwnPropertyDescriptors()`

- **用途**：获取对象所有自身属性的描述符。
- **参数**：
  - `obj`：目标对象。
- **返回值**：描述符对象。
- **示例**：

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyDescriptors(obj));
// 输出: { a: { value: 1, ... }, b: { value: 2, ... } }
```

### 10. `Object.getPrototypeOf()`

- **用途**：获取对象的原型。
- **参数**：
  - `obj`：目标对象。
- **返回值**：原型对象。
- **示例**：

```javascript
const proto = { x: 10 };
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // 输出: true
```

### 11. `Object.setPrototypeOf()`

- **用途**：设置对象的原型。
- **参数**：
  - `obj`：目标对象。
  - `proto`：新原型。
- **返回值**：目标对象。
- **示例**：

```javascript
const obj = { a: 1 };
const proto = { b: 2 };
Object.setPrototypeOf(obj, proto);
console.log(obj.b); // 输出: 2
```

### 12. `Object.freeze()`

- **用途**：冻结对象，阻止修改属性和值。
- **参数**：
  - `obj`：目标对象。
- **返回值**：目标对象。
- **特性**：浅冻结，仅影响自身属性。
- **示例**：

```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // 修改无效
console.log(obj.a); // 输出: 1
```

### 13. `Object.isFrozen()`

- **用途**：检查对象是否被冻结。
- **参数**：
  - `obj`：目标对象。
- **返回值**：布尔值。
- **示例**：

```javascript
const obj = { a: 1 };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // 输出: true
```

### 14. `Object.seal()`

- **用途**：密封对象，阻止添加或删除属性，但允许修改现有属性值。
- **参数**：
  - `obj`：目标对象。
- **返回值**：目标对象。
- **示例**：

```javascript
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // 可修改
obj.b = 3; // 添加无效
console.log(obj); // 输出: { a: 2 }
```

### 15. `Object.isSealed()`

- **用途**：检查对象是否被密封。
- **参数**：
  - `obj`：目标对象。
- **返回值**：布尔值。
- **示例**：

```javascript
const obj = { a: 1 };
Object.seal(obj);
console.log(Object.isSealed(obj)); // 输出: true
```

## 属性

### 1. `prototype`

- **用途**：`Object` 的原型对象，提供通用方法（如 `toString()`、`hasOwnProperty()`）。
- **示例**：

```javascript
const obj = {};
console.log(
  obj.hasOwnProperty("key") === Object.prototype.hasOwnProperty.call(obj, "key")
); // 输出: true
```

## 应用场景

### 1. 属性遍历

```javascript
const obj = { x: 10, y: 20 };
Object.keys(obj).forEach((key) => console.log(`${key}: ${obj[key]}`)); // 输出: "x: 10", "y: 20"
```

### 2. 对象复制

```javascript
const source = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, source);
console.log(copy); // 输出: { a: 1, b: { c: 2 } }
```

### 3. 属性保护

```javascript
const config = { apiKey: "xyz" };
Object.freeze(config);
config.apiKey = "abc"; // 修改无效
console.log(config.apiKey); // 输出: "xyz"
```

## 总结

`Object` 的 API 提供了丰富的工具来操作对象，包括属性管理、原型操作和对象状态控制。以下是常用 API 的总结：

| 方法                      | 用途                 | 示例                                           |
| ------------------------- | -------------------- | ---------------------------------------------- |
| `Object.keys()`           | 返回键名数组         | `Object.keys(obj)`                             |
| `Object.values()`         | 返回值数组           | `Object.values(obj)`                           |
| `Object.entries()`        | 返回键值对数组       | `Object.entries(obj)`                          |
| `Object.assign()`         | 复制对象属性         | `Object.assign(target, src)`                   |
| `Object.create()`         | 创建对象并指定原型   | `Object.create(proto)`                         |
| `Object.defineProperty()` | 定义或修改属性描述符 | `Object.defineProperty(obj, prop, descriptor)` |
| `Object.freeze()`         | 冻结对象             | `Object.freeze(obj)`                           |
| `Object.getPrototypeOf()` | 获取原型             | `Object.getPrototypeOf(obj)`                   |

这些 API 是 JavaScript 对象操作的基础，适用于各种开发场景。
