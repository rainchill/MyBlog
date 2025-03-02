---
sidebar_position: 2
---

# `Set`

# JavaScript `Set` 对象技术文档

## 概述

`Set` 是 JavaScript 中的一种内置对象，用于存储**唯一值**的集合。与数组不同，`Set` 中的值不会重复，且值的顺序是插入顺序。`Set` 可以存储任何类型的值，包括基本类型和引用类型。

## 创建 `Set`

可以通过 `new Set()` 构造函数创建一个 `Set` 对象。

### 语法

```javascript
new Set([iterable]);
```

### 参数

- `iterable`（可选）：一个可迭代对象（如数组），其元素会被添加到 `Set` 中。

### 示例

```javascript
// 创建一个空的 Set
const set1 = new Set();

// 通过数组创建 Set
const set2 = new Set([1, 2, 3, 4, 5]);

// 添加重复值
const set3 = new Set([1, 2, 2, 3, 3]);
console.log(set3); // 输出: Set { 1, 2, 3 }（重复值被忽略）
```

## `Set` 的特性

1. **唯一性**：

   - `Set` 中的值不会重复。如果尝试添加重复值，`Set` 会自动忽略。

2. **值的类型**：

   - `Set` 可以存储任何类型的值，包括 `NaN`、`undefined`、`null` 等。

3. **顺序性**：

   - `Set` 中的值按照插入顺序存储。

4. **无键值对**：
   - `Set` 只存储值，没有键值对的概念。

## `Set` 的常用方法

### 1. `add(value)`

- **用途**：向 `Set` 中添加一个值。
- **返回值**：`Set` 对象本身（支持链式调用）。

```javascript
const set = new Set();
set.add(1).add(2).add(3);

console.log(set); // 输出: Set { 1, 2, 3 }
```

### 2. `delete(value)`

- **用途**：从 `Set` 中删除一个值。
- **返回值**：如果值存在并成功删除，返回 `true`；否则返回 `false`。

```javascript
const set = new Set([1, 2, 3]);
set.delete(2);

console.log(set); // 输出: Set { 1, 3 }
```

### 3. `has(value)`

- **用途**：检查 `Set` 中是否包含某个值。
- **返回值**：如果值存在，返回 `true`；否则返回 `false`。

```javascript
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // 输出: true
console.log(set.has(4)); // 输出: false
```

### 4. `clear()`

- **用途**：清空 `Set` 中的所有值。
- **返回值**：`undefined`。

```javascript
const set = new Set([1, 2, 3]);
set.clear();

console.log(set); // 输出: Set {}
```

### 5. `size`

- **用途**：获取 `Set` 中值的数量。
- **返回值**：`Set` 中值的数量。

```javascript
const set = new Set([1, 2, 3]);

console.log(set.size); // 输出: 3
```

## `Set` 的遍历方法

### 1. `forEach(callbackFn)`

- **用途**：对 `Set` 中的每个值执行一次回调函数。
- **参数**：
  - `callbackFn`：回调函数，接收三个参数：值、值（重复）、`Set` 对象本身。

```javascript
const set = new Set([1, 2, 3]);

set.forEach((value) => {
  console.log(value);
});
// 输出:
// 1
// 2
// 3
```

### 2. `keys()` 和 `values()`

- **用途**：返回 `Set` 中值的迭代器。
- **注意**：`Set` 没有键，因此 `keys()` 和 `values()` 的行为相同。

```javascript
const set = new Set([1, 2, 3]);

for (let value of set.values()) {
  console.log(value);
}
// 输出:
// 1
// 2
// 3
```

### 3. `entries()`

- **用途**：返回 `Set` 中值的键值对迭代器。
- **注意**：`Set` 的键和值相同。

```javascript
const set = new Set([1, 2, 3]);

for (let entry of set.entries()) {
  console.log(entry);
}
// 输出:
// [1, 1]
// [2, 2]
// [3, 3]
```

## `Set` 的应用场景

### 1. 数组去重

`Set` 可以快速去除数组中的重复值。

```javascript
const array = [1, 2, 2, 3, 3, 4];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // 输出: [1, 2, 3, 4]
```

### 2. 存储唯一值

当需要存储一组唯一值时，`Set` 是理想的选择。

```javascript
const tags = new Set();
tags.add("JavaScript");
tags.add("HTML");
tags.add("CSS");
tags.add("JavaScript"); // 重复值被忽略

console.log(tags); // 输出: Set { 'JavaScript', 'HTML', 'CSS' }
```

### 3. 集合运算

`Set` 可以用于实现集合的交集、并集和差集。

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// 并集
const union = new Set([...setA, ...setB]);
console.log(union); // 输出: Set { 1, 2, 3, 4 }

// 交集
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // 输出: Set { 2, 3 }

// 差集
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // 输出: Set { 1 }
```

## 总结

`Set` 是 JavaScript 中用于存储唯一值的数据结构，具有以下特点：

- 值唯一，自动去重。
- 支持任何类型的值。
- 提供丰富的操作方法，如 `add()`、`delete()`、`has()` 等。
- 适用于数组去重、存储唯一值和集合运算等场景。

以下是 `Set` 的常用方法总结：

| 方法            | 用途               | 示例                     |
| --------------- | ------------------ | ------------------------ |
| `add(value)`    | 添加值             | `set.add(1)`             |
| `delete(value)` | 删除值             | `set.delete(1)`          |
| `has(value)`    | 检查值是否存在     | `set.has(1)`             |
| `clear()`       | 清空所有值         | `set.clear()`            |
| `size`          | 获取值的数量       | `set.size`               |
| `forEach()`     | 遍历值             | `set.forEach((v) => {})` |
| `values()`      | 返回值的迭代器     | `set.values()`           |
| `entries()`     | 返回键值对的迭代器 | `set.entries()`          |
