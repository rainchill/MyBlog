---
sidebar_position: 8
---

# 闭包（Closure）

## 概述

闭包（Closure）是 JavaScript 中的一种核心特性，指的是一个函数能够“记住”并访问其定义时所在的词法作用域，即使该函数在其定义作用域之外执行。

闭包由函数及其词法环境（包含外部变量的引用）共同构成，广泛应用于数据封装、模块化设计、回调函数等场景。它是理解 JavaScript 作用域和函数行为的关键。

## 定义与创建

### 1. 闭包的构成

闭包发生在函数嵌套时，内部函数引用了外部函数的变量，且外部函数返回内部函数。内部函数保留了对外部变量的引用，形成闭包。

:::tip
外部函数也可能不返回。比如下面的 [2. 循环中的闭包](./closure#2-循环中的闭包) 以及 [3. 属性装饰器](./装饰器/Decorator#3-属性装饰器) 的 `uppercase`
:::

#### 创建方式

```javascript
function outer() {
  let count = 0; // 外部变量
  function inner() {
    count++; // 引用外部变量
    return count;
  }
  return inner; // 返回内部函数
}
```

### 2. 调用闭包

外部函数执行后，返回的内部函数仍然可以访问其词法作用域中的变量。

```javascript
const counter = outer();
console.log(counter()); // 输出: 1
console.log(counter()); // 输出: 2
console.log(counter()); // 输出: 3
```

### 示例

```javascript
function createGreeter(name) {
  return function () {
    return `Hello, ${name}`;
  };
}

const greetAlice = createGreeter("Alice");
console.log(greetAlice()); // 输出: "Hello, Alice"
```

## 特性

1. **词法作用域**：

   - 闭包基于词法作用域，函数记住定义时的环境，而非调用时的环境。

2. **变量持久化**：

   - 外部变量不会因外部函数执行结束而销毁，只要闭包存在，变量就保留。

3. **数据私有性**：
   - 闭包可以隐藏变量，仅通过返回的函数访问，实现封装。

### 示例（变量持久化）

```javascript
function createCounter() {
  let value = 0;
  return {
    increment: function () {
      value++;
      return value;
    },
    get: function () {
      return value;
    },
  };
}

const counterObj = createCounter();
console.log(counterObj.increment()); // 输出: 1
console.log(counterObj.get()); // 输出: 1
console.log(counterObj.increment()); // 输出: 2
```

## 用法与机制

### 1. 数据封装

通过闭包创建私有变量和方法。

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // 私有变量
  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "余额不足";
    },
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 输出: 150
console.log(account.withdraw(30)); // 输出: 120
// console.log(account.balance); // undefined，无法直接访问
```

### 2. 函数工厂

生成特定功能的函数。

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // 输出: 10
console.log(triple(5)); // 输出: 15
```

### 3. 回调与异步

在回调中保留上下文。

```javascript
function fetchData(url) {
  let data = null;
  setTimeout(() => {
    data = `Data from ${url}`;
    console.log(data);
  }, 1000);
  return function () {
    return data;
  };
}

const getData = fetchData("example.com");
setTimeout(() => console.log(getData()), 1500); // 输出: "Data from example.com"
```

## 注意事项

### 1. 内存管理

- 闭包保留外部变量引用，可能导致内存泄漏，未使用的闭包应及时释放。

```javascript
function leaky() {
  let bigData = new Array(1000000).fill("data");
  return function () {
    return bigData.length;
  };
}
const leak = leaky(); // bigData 不会被垃圾回收
```

### 2. 循环中的闭包

- 在循环中使用闭包可能意外捕获动态变量。

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 输出: 3, 3, 3
}
// 修复：使用 let 或立即执行函数
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 输出: 0, 1, 2
}
```

## 应用场景

### 1. 模块模式

创建私有作用域和公共接口。

```javascript
const module = (function () {
  let privateVar = "secret";
  function privateFunc() {
    return `Private: ${privateVar}`;
  }
  return {
    publicFunc: function () {
      return privateFunc();
    },
  };
})();

console.log(module.publicFunc()); // 输出: "Private: secret"
// console.log(module.privateVar); // undefined
```

### 2. 事件处理

保存事件相关数据。

```javascript
function setupButton(id) {
  const button = document.getElementById(id);
  let clicks = 0;
  button.addEventListener("click", function () {
    clicks++;
    console.log(`Button ${id} clicked ${clicks} times`);
  });
}

setupButton("myButton");
```

### 3. 柯里化

实现函数参数部分应用。

```javascript
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const add5 = curryAdd(5);
const add5and3 = add5(3);
console.log(add5and3(2)); // 输出: 10
```

## 总结

闭包是 JavaScript 中基于词法作用域的强大特性，具有以下特点：

- 函数记住定义时的外部变量，形成闭包。
- 支持数据封装、函数工厂、回调等功能。
- 注意内存管理和循环中的变量捕获问题。

以下是闭包关键点总结：

| 特性       | 描述               | 示例                     |
| ---------- | ------------------ | ------------------------ |
| 词法作用域 | 记住定义时环境     | `outer() -> inner()`     |
| 数据私有性 | 隐藏变量           | `createCounter()`        |
| 应用场景   | 模块、回调、柯里化 | `module()`, `curryAdd()` |
