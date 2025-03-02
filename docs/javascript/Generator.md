---
sidebar_position: 5
---

# `Generator`（生成器）

## 概述

`Generator`（生成器）是 ES6（ECMAScript 2015）引入的一种特殊函数，用于控制迭代行为。它可以通过暂停和恢复执行来生成一系列值，极大增强了 JavaScript 在处理异步操作、惰性计算和自定义迭代器等方面的能力。生成器函数通过 `function*` 语法定义，并返回一个 `Generator` 对象。

## 定义与创建

### 1. `function*` 语法

生成器函数使用 `function*` 声明，内部使用 `yield` 关键字暂停执行并返回值。

#### 创建方式

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
```

### 2. 调用生成器

调用生成器函数不会立即执行，而是返回一个 `Generator` 对象。通过调用对象的 `next()` 方法逐步执行。

#### 示例

```javascript
const gen = generatorFunction();
console.log(gen.next()); // 输出: { value: 1, done: false }
console.log(gen.next()); // 输出: { value: 2, done: false }
console.log(gen.next()); // 输出: { value: 3, done: false }
console.log(gen.next()); // 输出: { value: undefined, done: true }
```

## 特性

1. **暂停与恢复**：

   - `yield` 暂停函数执行，返回值给调用者。
   - 调用 `next()` 恢复执行，直到下个 `yield` 或函数结束。

2. **迭代器协议**：

   - 生成器对象实现了 `Iterator` 接口，可用于 `for...of` 循环。

3. **惰性计算**：
   - 值按需生成，不一次性计算所有结果，节省内存。

### 示例

```javascript
function* countUpTo(max) {
  let count = 0;
  while (count < max) {
    yield count++;
  }
}

const counter = countUpTo(3);
for (let value of counter) {
  console.log(value); // 输出: 0, 1, 2
}
```

## 方法

### 1. `next()`

- **用途**：执行生成器到下一个 `yield` 或结束。
- **参数**：
  - 可选值：传递给 `yield` 表达式作为返回值。
- **返回值**：
  - `{ value: any, done: boolean }`：`value` 是当前产量，`done` 表示是否完成。

```javascript
function* example() {
  const a = yield "第一步";
  console.log(a);
  yield "第二步";
}

const g = example();
console.log(g.next()); // 输出: { value: "第一步", done: false }
console.log(g.next("传入值")); // 输出: "传入值" 和 { value: "第二步", done: false }
```

### 2. `return()`

- **用途**：强制结束生成器并返回指定值。
- **参数**：
  - `value`：返回的值。
- **返回值**：`{ value: any, done: true }`。

```javascript
const gen2 = generatorFunction();
console.log(gen2.return("提前结束")); // 输出: { value: "提前结束", done: true }
console.log(gen2.next()); // 输出: { value: undefined, done: true }
```

### 3. `throw()`

- **用途**：向生成器抛出错误，模拟 `yield` 处抛异常。
- **参数**：
  - `error`：抛出的错误对象。
- **返回值**：下一个 `yield` 的结果或抛出错误。

```javascript
function* errorGen() {
  try {
    yield "尝试";
  } catch (e) {
    console.log("捕获:", e);
  }
}

const g3 = errorGen();
console.log(g3.next()); // 输出: { value: "尝试", done: false }
g3.throw("错误"); // 输出: "捕获: 错误"
```

## 属性

### 1. `[Symbol.iterator]`

- **用途**：生成器对象本身是可迭代的。
- **示例**：

```javascript
function* range() {
  yield 1;
  yield 2;
}
const r = range();
console.log([...r]); // 输出: [1, 2]
```

## 应用场景

### 1. 自定义迭代器

生成器可轻松定义复杂的迭代逻辑。

```javascript
function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 输出: 0
console.log(fib.next().value); // 输出: 1
console.log(fib.next().value); // 输出: 1
console.log(fib.next().value); // 输出: 2
```

### 2. 异步操作

结合 `yield` 和外部逻辑处理异步任务（常与 `Promise` 配合）。

```javascript
function* asyncGen() {
  const result1 = yield new Promise((resolve) =>
    setTimeout(() => resolve("第一步"), 500)
  );
  console.log(result1);
  const result2 = yield new Promise((resolve) =>
    setTimeout(() => resolve("第二步"), 500)
  );
  console.log(result2);
}

const ag = asyncGen();
ag.next().value.then((val) => ag.next(val).value.then((val) => ag.next(val)));
// 输出: "第一步" -> "第二步"
```

### 3. 无限序列

生成无限数据流，按需取值。

```javascript
function* infiniteNumbers() {
  let n = 0;
  while (true) {
    yield n++;
  }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value); // 输出: 0
console.log(numbers.next().value); // 输出: 1
console.log(numbers.next().value); // 输出: 2
```

## 总结

`Generator` 是 ES6 中强大的迭代工具，具有以下特点：

- 通过 `function*` 和 `yield` 实现暂停/恢复机制。
- 提供 `next()`、`return()`、`throw()` 方法控制执行。
- 适用于自定义迭代、异步流程和惰性计算。

以下是 `Generator` 的常用方法总结：

| 方法       | 用途                 | 示例                |
| ---------- | -------------------- | ------------------- |
| `next()`   | 继续执行到下个 yield | `gen.next(value)`   |
| `return()` | 强制结束并返回值     | `gen.return(value)` |
| `throw()`  | 抛出错误到生成器     | `gen.throw(error)`  |
