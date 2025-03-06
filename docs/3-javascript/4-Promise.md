---
sidebar_position: 4
---

# `Promise`

## 概述

`Promise` 是 JavaScript 中用于处理异步操作的对象，引入于 ES6（ECMAScript 2015）。它提供了一种更优雅的方式来管理异步代码，避免了传统的回调地狱（Callback Hell）。`Promise` 表示一个异步操作的最终完成或失败，并允许链式调用来处理结果或错误。

## 定义与创建

### 1. `Promise` 构造函数

通过 `new Promise` 创建，构造函数接收一个执行器函数（executor），该函数包含异步操作逻辑。

#### 创建方式

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("操作成功"); // 成功时调用
    } else {
      reject("操作失败"); // 失败时调用
    }
  }, 1000);
});
```

### 2. 状态

`Promise` 有三种状态：

- **Pending（待定）**：初始状态，未完成或未失败。
- **Fulfilled（已兑现）**：操作成功完成。
- **Rejected（已拒绝）**：操作失败。

状态一旦改变（从 Pending 到 Fulfilled 或 Rejected），就不可逆。

### 示例

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    if (data) {
      resolve(data);
    } else {
      reject("数据获取失败");
    }
  }, 500);
});
```

## 用法与方法

### 1. `then()`

- **用途**：处理 `Promise` 的成功结果。
- **参数**：
  - `onFulfilled`：成功时的回调函数。
  - `onRejected`（可选）：失败时的回调函数。
- **返回值**：新的 `Promise`，支持链式调用。

```javascript
fetchData.then(
  (result) => console.log("成功:", result), // 输出: "成功: { id: 1, name: 'Alice' }"
  (error) => console.log("失败:", error)
);
```

### 2. `catch()`

- **用途**：捕获 `Promise` 的错误。
- **参数**：
  - `onRejected`：失败时的回调函数。
- **返回值**：新的 `Promise`。

```javascript
fetchData
  .then((result) => console.log(result))
  .catch((error) => console.log("错误:", error));
```

### 3. `finally()`

- **用途**：无论成功或失败都会执行的回调。
- **参数**：
  - `onFinally`：状态改变后的回调函数。
- **返回值**：新的 `Promise`。

```javascript
fetchData
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("操作完成")); // 总是执行
```

## 静态方法

### 1. `Promise.resolve()`

- **用途**：返回一个已兑现的 `Promise`。
- **参数**：
  - `value`：要传递的值。
- **示例**：

```javascript
Promise.resolve("立即成功").then((value) => console.log(value)); // 输出: "立即成功"
```

### 2. `Promise.reject()`

- **用途**：返回一个已拒绝的 `Promise`。
- **参数**：
  - `reason`：拒绝的原因。
- **示例**：

```javascript
Promise.reject("立即失败").catch((error) => console.log(error)); // 输出: "立即失败"
```

### 3. `Promise.all()`

- **用途**：等待所有 `Promise` 完成，返回结果数组。若任一失败，则整体失败。
- **参数**：
  - `promises`：`Promise` 数组。
- **示例**：

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
Promise.all([p1, p2]).then((results) => console.log(results)); // 输出: [1, 2]
```

### 4. `Promise.race()`

- **用途**：返回第一个完成的 `Promise` 的结果（成功或失败）。
- **参数**：
  - `promises`：`Promise` 数组。
- **示例**：

```javascript
const p3 = new Promise((resolve) => setTimeout(resolve, 100, "快"));
const p4 = new Promise((resolve) => setTimeout(resolve, 200, "慢"));
Promise.race([p3, p4]).then((result) => console.log(result)); // 输出: "快"
```

## 属性

### 1. `state`

- **用途**：表示 `Promise` 的当前状态（不可直接访问，通过方法间接处理）。
- **示例**：通过 `then` 和 `catch` 推断状态。

### 2. `result`

- **用途**：表示 `Promise` 的最终值（成功或失败原因，内部属性）。
- **示例**：通过回调接收结果。

## 应用场景

### 1. 异步请求

处理网络请求等异步操作。

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id, name: "Alice" };
      if (user) resolve(user);
      else reject("用户未找到");
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => console.log(user)) // 输出: { id: 1, name: "Alice" }
  .catch((error) => console.log(error));
```

### 2. 链式操作

连续执行多个异步任务。

```javascript
function step1() {
  return new Promise((resolve) => setTimeout(() => resolve("步骤1"), 500));
}

function step2(data) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`${data} -> 步骤2`), 500)
  );
}

step1()
  .then((result) => step2(result))
  .then((result) => console.log(result)); // 输出: "步骤1 -> 步骤2"
```

### 3. 并行处理

使用 `Promise.all` 处理多个并行任务。

```javascript
const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("任务1"), 1000)
);
const task2 = new Promise((resolve) => setTimeout(() => resolve("任务2"), 500));

Promise.all([task1, task2]).then((results) => console.log(results)); // 输出: ["任务1", "任务2"]
```

## 总结

`Promise` 是 JavaScript 中处理异步操作的核心工具，具有以下特点：

- 提供三种状态（Pending、Fulfilled、Rejected）管理异步结果。
- 支持 `then`、`catch`、`finally` 等链式调用。
- 静态方法如 `Promise.all` 和 `Promise.race` 扩展了使用场景。

以下是 `Promise` 的常用方法总结：

| 方法             | 用途                   | 示例                         |
| ---------------- | ---------------------- | ---------------------------- |
| `then()`         | 处理成功结果           | `promise.then(onFulfilled)`  |
| `catch()`        | 捕获错误               | `promise.catch(onRejected)`  |
| `finally()`      | 无论成功或失败都执行   | `promise.finally(onFinally)` |
| `Promise.all()`  | 等待所有 Promise 完成  | `Promise.all([p1, p2])`      |
| `Promise.race()` | 返回最快完成的 Promise | `Promise.race([p1, p2])`     |
