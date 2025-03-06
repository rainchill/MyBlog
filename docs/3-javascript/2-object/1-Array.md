---
sidebar_position: 1
# 显示 h2 到 h5 标题
# toc_min_heading_level: 2
# toc_max_heading_level: 3
---

# `Array`

## 概述

`Array` 是 JavaScript 中用于存储有序元素集合的内置对象。数组中的每个元素都有一个索引（从 0 开始），并且可以存储任何类型的值，包括基本类型和引用类型。数组是 JavaScript 中最常用的数据结构之一。

## 创建数组

可以通过数组字面量或 `Array` 构造函数创建数组。

### 语法

```javascript
// 使用数组字面量
const array1 = [element1, element2, ..., elementN];

// 使用 Array 构造函数
const array2 = new Array(element1, element2, ..., elementN);
```

### 示例

```javascript
// 使用数组字面量
const fruits = ["apple", "banana", "orange"];

// 使用 Array 构造函数
const numbers = new Array(1, 2, 3, 4, 5);

// 空数组
const emptyArray = [];
```

## 数组的特性

1. **有序性**：

   - 数组中的元素按照插入顺序存储，并通过索引访问。

2. **动态大小**：

   - 数组的大小可以动态调整，可以随时添加或删除元素。

3. **元素类型**：

   - 数组可以存储任何类型的值，包括数字、字符串、对象、函数等。

4. **索引**：
   - 数组的索引从 0 开始，最大索引为 `length - 1`。

## 数组的常用方法

### 1. 访问元素

通过索引访问数组中的元素。

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // 输出: 'apple'
console.log(fruits[2]); // 输出: 'orange'
console.log(fruits[3]); // 输出: undefined（索引超出范围）
```

### 2. 修改元素

通过索引直接修改数组中的元素。

```javascript
const fruits = ["apple", "banana", "orange"];
fruits[1] = "grape";

console.log(fruits); // 输出: ['apple', 'grape', 'orange']
```

### 3. 添加元素

- `push()`：在数组末尾添加一个或多个元素。
- `unshift()`：在数组开头添加一个或多个元素。

```javascript
const fruits = ["apple", "banana"];

fruits.push("orange"); // 末尾添加
console.log(fruits); // 输出: ['apple', 'banana', 'orange']

fruits.unshift("grape"); // 开头添加
console.log(fruits); // 输出: ['grape', 'apple', 'banana', 'orange']
```

### 4. 删除元素

- `pop()`：删除数组的最后一个元素。
- `shift()`：删除数组的第一个元素。

```javascript
const fruits = ["apple", "banana", "orange"];

fruits.pop(); // 删除最后一个元素
console.log(fruits); // 输出: ['apple', 'banana']

fruits.shift(); // 删除第一个元素
console.log(fruits); // 输出: ['banana']
```

### 5. 查找元素

- `indexOf()`：返回元素的索引（如果不存在则返回 -1）。
- `includes()`：检查数组是否包含某个元素（返回 `true` 或 `false`）。

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits.indexOf("banana")); // 输出: 1
console.log(fruits.includes("grape")); // 输出: false
```

### 6. 遍历数组

- `forEach()`：对数组中的每个元素执行一次函数。
- `map()`：创建一个新数组，包含原数组每个元素调用函数后的结果。

```javascript
const numbers = [1, 2, 3, 4];

// forEach 遍历
numbers.forEach(function (num) {
  console.log(num * 2); // 输出: 2, 4, 6, 8
});

// map 创建新数组
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // 输出: [2, 4, 6, 8]
```

### 7. 过滤数组

- `filter()`：创建一个新数组，包含符合条件的所有元素。

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0; // 过滤出偶数
});
console.log(evenNumbers); // 输出: [2, 4]
```

### 8. 数组排序

- `sort()`：对数组元素进行排序（默认按字符串顺序）。
- `reverse()`：反转数组元素的顺序。

```javascript
const fruits = ["banana", "apple", "orange"];

fruits.sort(); // 按字母顺序排序
console.log(fruits); // 输出: ['apple', 'banana', 'orange']

fruits.reverse(); // 反转数组
console.log(fruits); // 输出: ['orange', 'banana', 'apple']
```

### 9. 数组拼接

- `concat()`：合并多个数组。
- `join()`：将数组元素连接成一个字符串。

```javascript
const fruits = ["apple", "banana", "orange"];

const combined = fruits.concat(["kiwi", "mango"]);
console.log(combined); // 输出: ['apple', 'banana', 'orange', 'kiwi', 'mango']

const str = fruits.join(", "); // 将数组转换为字符串
console.log(str); // 输出: 'apple, banana, orange'
```

### 10. 数组切片

- `slice()`：返回数组的一部分（不修改原数组）。
- `splice()`：添加或删除数组中的元素（会修改原数组）。

```javascript
const fruits = ["apple", "banana", "orange"];

const sliced = fruits.slice(1, 3); // 从索引1到索引2
console.log(sliced); // 输出: ['banana', 'orange']

fruits.splice(1, 1, "grape"); // 从索引1删除1个元素，并插入'grape'
console.log(fruits); // 输出: ['apple', 'grape', 'orange']
```

## 数组的 ES6+ 新增方法

### 1. `find()`

- **用途**：返回第一个符合条件的元素。
- **返回值**：如果找到符合条件的元素，返回该元素；否则返回 `undefined`。

```javascript
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find((num) => num > 3); // 找到第一个大于3的元素
console.log(found); // 输出: 4
```

### 2. `findIndex()`

- **用途**：返回第一个符合条件的元素的索引。
- **返回值**：如果找到符合条件的元素，返回其索引；否则返回 `-1`。

```javascript
const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex((num) => num > 3); // 找到第一个大于3的元素的索引
console.log(index); // 输出: 3
```

### 3. `some()`

- **用途**：检查数组中是否有元素符合条件。
- **返回值**：如果有符合条件的元素，返回 `true`；否则返回 `false`。

```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some((num) => num % 2 === 0); // 是否有偶数
console.log(hasEven); // 输出: true
```

### 4. `every()`

- **用途**：检查数组中的所有元素是否都符合条件。
- **返回值**：如果所有元素都符合条件，返回 `true`；否则返回 `false`。

```javascript
const numbers = [1, 2, 3, 4, 5];

const allEven = numbers.every((num) => num % 2 === 0); // 是否所有元素都是偶数
console.log(allEven); // 输出: false
```

### 5. `flat()`

- **用途**：将多维数组扁平化。
- **参数**：指定扁平化的层数（默认为 1）。

```javascript
const nested = [1, [2, [3, [4]]]];

const flatArray = nested.flat(2); // 扁平化两层
console.log(flatArray); // 输出: [1, 2, 3, [4]]
```

## 数组的应用场景

### 1. 存储有序数据

数组适合存储需要按顺序访问的数据。

```javascript
const tasks = ["task1", "task2", "task3"];
tasks.push("task4"); // 添加新任务
console.log(tasks); // 输出: ['task1', 'task2', 'task3', 'task4']
```

### 2. 数据过滤和转换

使用 `filter()` 和 `map()` 可以轻松实现数据的过滤和转换。

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0); // 过滤出偶数
const doubled = evenNumbers.map((num) => num * 2); // 将偶数翻倍
console.log(doubled); // 输出: [4, 8]
```

### 3. 多维数据存储

数组可以嵌套，用于存储多维数据。

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // 输出: 6（第二行第三列）
```

## 总结

`Array` 是 JavaScript 中最常用的数据结构之一，具有以下特点：

- 有序存储元素。
- 动态调整大小。
- 提供丰富的操作方法，如 `push()`、`pop()`、`map()`、`filter()` 等。
- 适用于存储有序数据、数据过滤和转换、多维数据存储等场景。

以下是 `Array` 的常用方法总结：

| 方法          | 用途                       | 示例                            |
| ------------- | -------------------------- | ------------------------------- |
| `push()`      | 在末尾添加元素             | `array.push(1)`                 |
| `pop()`       | 删除末尾元素               | `array.pop()`                   |
| `unshift()`   | 在开头添加元素             | `array.unshift(1)`              |
| `shift()`     | 删除开头元素               | `array.shift()`                 |
| `indexOf()`   | 查找元素的索引             | `array.indexOf(1)`              |
| `includes()`  | 检查是否包含元素           | `array.includes(1)`             |
| `forEach()`   | 遍历数组                   | `array.forEach((v) => {})`      |
| `map()`       | 创建新数组                 | `array.map((v) => v * 2)`       |
| `filter()`    | 过滤数组                   | `array.filter((v) => v > 1)`    |
| `sort()`      | 排序数组                   | `array.sort()`                  |
| `reverse()`   | 反转数组                   | `array.reverse()`               |
| `concat()`    | 合并数组                   | `array.concat([1, 2])`          |
| `join()`      | 将数组转换为字符串         | `array.join(', ')`              |
| `slice()`     | 返回数组的一部分           | `array.slice(1, 3)`             |
| `splice()`    | 添加或删除元素             | `array.splice(1, 1)`            |
| `find()`      | 查找符合条件的元素         | `array.find((v) => v > 1)`      |
| `findIndex()` | 查找符合条件的元素的索引   | `array.findIndex((v) => v > 1)` |
| `some()`      | 检查是否有符合条件的元素   | `array.some((v) => v > 1)`      |
| `every()`     | 检查是否所有元素都符合条件 | `array.every((v) => v > 1)`     |
| `flat()`      | 扁平化数组                 | `array.flat(2)`                 |
