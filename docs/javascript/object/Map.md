---
sidebar_position: 3
---

# `Map`

## 概述

`Map` 是 JavaScript 中的一种内置对象，用于存储**键值对**的集合。与普通对象不同，`Map` 的键可以是任何类型的值（包括对象、函数等），而不仅限于字符串或符号。`Map` 保留了键值对的插入顺序，并提供了丰富的方法来操作数据。

## 创建 `Map`

可以通过 `new Map()` 构造函数创建一个 `Map` 对象。

### 语法

```javascript
new Map([iterable]);
```

### 参数

- `iterable`（可选）：一个可迭代对象（如数组），其元素是键值对数组（`[key, value]`）。

### 示例

```javascript
// 创建一个空的 Map
const map1 = new Map();

// 通过数组创建 Map
const map2 = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

// 添加重复键
const map3 = new Map([
  ["name", "Alice"],
  ["name", "Bob"], // 后面的值会覆盖前面的值
]);
console.log(map3); // 输出: Map { 'name' => 'Bob' }
```

## `Map` 的特性

1. **键的类型**：

   - `Map` 的键可以是任何类型的值，包括对象、函数、`NaN` 等。

2. **顺序性**：

   - `Map` 中的键值对按照插入顺序存储。

3. **性能**：

   - 在频繁增删键值对的场景中，`Map` 的性能优于普通对象。

4. **大小**：
   - 可以通过 `size` 属性获取 `Map` 中键值对的数量。

## `Map` 的常用方法

### 1. `set(key, value)`

- **用途**：向 `Map` 中添加或更新一个键值对。
- **返回值**：`Map` 对象本身（支持链式调用）。

```javascript
const map = new Map();
map.set("name", "Alice").set("age", 25);

console.log(map); // 输出: Map { 'name' => 'Alice', 'age' => 25 }
```

### 2. `get(key)`

- **用途**：获取指定键对应的值。
- **返回值**：如果键存在，返回对应的值；否则返回 `undefined`。

```javascript
const map = new Map([["name", "Alice"]]);

console.log(map.get("name")); // 输出: 'Alice'
console.log(map.get("age")); // 输出: undefined
```

### 3. `has(key)`

- **用途**：检查 `Map` 中是否包含指定的键。
- **返回值**：如果键存在，返回 `true`；否则返回 `false`。

```javascript
const map = new Map([["name", "Alice"]]);

console.log(map.has("name")); // 输出: true
console.log(map.has("age")); // 输出: false
```

### 4. `delete(key)`

- **用途**：从 `Map` 中删除指定的键值对。
- **返回值**：如果键存在并成功删除，返回 `true`；否则返回 `false`。

```javascript
const map = new Map([["name", "Alice"]]);
map.delete("name");

console.log(map); // 输出: Map {}
```

### 5. `clear()`

- **用途**：清空 `Map` 中的所有键值对。
- **返回值**：`undefined`。

```javascript
const map = new Map([["name", "Alice"]]);
map.clear();

console.log(map); // 输出: Map {}
```

### 6. `size`

- **用途**：获取 `Map` 中键值对的数量。
- **返回值**：`Map` 中键值对的数量。

```javascript
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

console.log(map.size); // 输出: 2
```

## `Map` 的遍历方法

### 1. `forEach(callbackFn)`

- **用途**：对 `Map` 中的每个键值对执行一次回调函数。
- **参数**：
  - `callbackFn`：回调函数，接收三个参数：值、键、`Map` 对象本身。

```javascript
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// 输出:
// name: Alice
// age: 25
```

### 2. `keys()`

- **用途**：返回 `Map` 中所有键的迭代器。

```javascript
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

for (let key of map.keys()) {
  console.log(key);
}
// 输出:
// name
// age
```

### 3. `values()`

- **用途**：返回 `Map` 中所有值的迭代器。

```javascript
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

for (let value of map.values()) {
  console.log(value);
}
// 输出:
// Alice
// 25
```

### 4. `entries()`

- **用途**：返回 `Map` 中所有键值对的迭代器。

```javascript
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

for (let entry of map.entries()) {
  console.log(entry);
}
// 输出:
// ['name', 'Alice']
// ['age', 25]
```

## `Map` 的应用场景

### 1. 存储复杂键

当键不是字符串或符号时，`Map` 是更好的选择。

```javascript
const objKey = { id: 1 };
const map = new Map();
map.set(objKey, "value");

console.log(map.get(objKey)); // 输出: 'value'
```

### 2. 维护插入顺序

`Map` 会保留键值对的插入顺序，适合需要顺序访问的场景。

```javascript
const map = new Map();
map.set("first", 1);
map.set("second", 2);

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// 输出:
// first: 1
// second: 2
```

### 3. 高性能增删

在频繁增删键值对的场景中，`Map` 的性能优于普通对象。

```javascript
const map = new Map();
for (let i = 0; i < 1000; i++) {
  map.set(i, i * 2);
}
map.delete(500);
console.log(map.size); // 输出: 999
```

## `Map` 与普通对象的区别

| 特性     | `Map`              | 普通对象           |
| -------- | ------------------ | ------------------ |
| 键的类型 | 任意类型           | 字符串或符号       |
| 顺序性   | 保留插入顺序       | 不保证顺序         |
| 大小     | 通过 `size` 获取   | 需要手动计算       |
| 性能     | 频繁增删时性能更好 | 频繁增删时性能较差 |
| 默认键   | 无默认键           | 有原型链上的默认键 |

## 总结

`Map` 是 JavaScript 中用于存储键值对的数据结构，具有以下特点：

- 键可以是任意类型。
- 保留插入顺序。
- 提供丰富的方法，如 `set()`、`get()`、`has()` 等。
- 适用于存储复杂键、维护顺序和高性能增删的场景。

以下是 `Map` 的常用方法总结：

| 方法              | 用途               | 示例                        |
| ----------------- | ------------------ | --------------------------- |
| `set(key, value)` | 添加或更新键值对   | `map.set('name', 'Alice')`  |
| `get(key)`        | 获取键对应的值     | `map.get('name')`           |
| `has(key)`        | 检查键是否存在     | `map.has('name')`           |
| `delete(key)`     | 删除键值对         | `map.delete('name')`        |
| `clear()`         | 清空所有键值对     | `map.clear()`               |
| `size`            | 获取键值对的数量   | `map.size`                  |
| `forEach()`       | 遍历键值对         | `map.forEach((v, k) => {})` |
| `keys()`          | 返回键的迭代器     | `map.keys()`                |
| `values()`        | 返回值的迭代器     | `map.values()`              |
| `entries()`       | 返回键值对的迭代器 | `map.entries()`             |
