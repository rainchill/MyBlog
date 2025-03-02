---
sidebar_position: 0
---

# `Decorator` 总览

## 概述

装饰器（Decorator）是 ES7（ECMAScript 2016）中引入的一项提案特性，目前处于 Stage 2 实验阶段，尚未正式纳入 JavaScript 标准，需要通过 Babel 或 TypeScript 等工具启用。

它是一种基于函数的语法糖，用于修饰类、方法、属性或参数，从而在不改变原有代码结构的情况下增强其功能。装饰器广泛应用于元编程场景，如日志记录、权限验证和属性增强等。

## 定义与创建

### 1. 装饰器语法

装饰器以 `@` 开头，后接函数名，直接应用于目标（类、方法、属性等）之前。装饰器函数在定义时执行，根据目标类型接收不同参数。

#### 创建方式

```javascript
function log(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Calling ${name} with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Example {
  @log
  say(message) {
    console.log(message);
  }
}
```

### 2. 使用装饰器

装饰器无需显式调用，直接在定义时修饰目标。

```javascript
const ex = new Example();
ex.say("Hello"); // 输出: "Calling say with" ["Hello"], "Hello"
```

### 示例

```javascript
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  getName() {
    return "Alice";
  }
}

const p = new Person();
console.log(p.getName()); // 输出: "Alice"
// p.getName = () => "Bob"; // 不可修改，抛出错误（严格模式）
```

## 特性

1. **声明式语法**：

   - 使用 `@` 符号修饰目标，提升代码可读性。

2. **可组合性**：

   - 多个装饰器可以叠加，从下向上依次执行。

3. **运行时行为**：

   - 装饰器在类定义时执行，动态修改目标。

4. **实验性质**：
   - 需要编译工具支持，未完全标准化。

### 示例（多装饰器）

```javascript
function deco1(target, name, descriptor) {
  console.log("Decorator 1 executed");
  return descriptor;
}

function deco2(target, name, descriptor) {
  console.log("Decorator 2 executed");
  return descriptor;
}

class Test {
  @deco1
  @deco2
  method() {}
}
// 输出: "Decorator 2 executed" -> "Decorator 1 executed"
```

## 装饰器类型与用法

### 1. 类装饰器

- **用途**：修饰整个类。
- **参数**：
  - `target`：类构造函数。
- **返回值**：可选，返回新构造函数替换原类。

```javascript
function addProperty(constructor) {
  constructor.prototype.extra = "extra value";
}

@addProperty
class MyClass {
  say() {
    console.log(this.extra);
  }
}

const mc = new MyClass();
mc.say(); // 输出: "extra value"
```

### 2. 方法装饰器

- **用途**：修饰类的方法。
- **参数**：
  - `target`：类的原型对象。
  - `name`：方法名。
  - `descriptor`：方法描述符。
- **返回值**：修改后的描述符。

```javascript
function time(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    const start = Date.now();
    const result = original.apply(this, args);
    console.log(`${name} took ${Date.now() - start}ms`);
    return result;
  };
  return descriptor;
}

class Calc {
  @time
  sum(n) {
    let total = 0;
    for (let i = 0; i < n; i++) total += i;
    return total;
  }
}

const calc = new Calc();
calc.sum(1000000); // 输出: "sum took ...ms" 和结果
```

### 3. 属性装饰器

- **用途**：修饰类的属性。
- **参数**：
  - `target`：类的原型对象。
  - `name`：属性名。
- **返回值**：可选，返回描述符（需配合现代字段语法）。

```javascript
function uppercase(target, name) {
  let value;
  Object.defineProperty(target, name, {
    get: () => value,
    set: (newValue) => (value = String(newValue).toUpperCase()),
    enumerable: true,
  });
}

class Text {
  @uppercase
  content = "hello";
}

const t = new Text();
console.log(t.content); // 输出: "HELLO"
t.content = "world";
console.log(t.content); // 输出: "WORLD"
```

### 4. 参数装饰器

- **用途**：修饰方法参数。
- **参数**：
  - `target`：类的原型对象。
  - `methodName`：方法名。
  - `parameterIndex`：参数索引。
- **返回值**：通常无返回值，用于元数据收集。

```javascript
function required(target, methodName, parameterIndex) {
  console.log(`${methodName} param ${parameterIndex} is required`);
}

class User {
  setName(@required name) {
    this.name = name;
  }
}

new User().setName("Alice"); // 输出: "setName param 0 is required"
```

## 应用场景

### 1. 日志记录

为方法添加调用日志。

```javascript
function logMethod(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`${name} called with:`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Logger {
  @logMethod
  greet(message) {
    return `Hello, ${message}`;
  }
}

const logger = new Logger();
logger.greet("World"); // 输出: "greet called with: ["World"]", "Hello, World"
```

### 2. 权限控制

限制方法访问。

```javascript
function auth(role) {
  return function (target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
      if (this.role !== role) throw new Error("权限不足");
      return original.apply(this, args);
    };
    return descriptor;
  };
}

class Admin {
  role = "user";

  @auth("admin")
  manage() {
    console.log("管理中");
  }
}

const admin = new Admin();
admin.manage(); // 抛出错误: "权限不足"
```

### 3. 属性增强

自动处理属性值。

```javascript
function clamp(min, max) {
  return function (target, name) {
    let value;
    Object.defineProperty(target, name, {
      get: () => value,
      set: (newValue) => (value = Math.min(max, Math.max(min, newValue))),
      enumerable: true,
    });
  };
}

class Range {
  @clamp(0, 100)
  score = 50;
}

const r = new Range();
r.score = 150;
console.log(r.score); // 输出: 100
r.score = -10;
console.log(r.score); // 输出: 0
```

## 总结

装饰器是 JavaScript 中增强代码功能的实验性特性，具有以下特点：

- 使用 `@` 语法修饰类及其成员，提供声明式编程方式。
- 支持类、方法、属性、参数四种装饰类型，可组合使用。
- 目前需借助编译工具（如 Babel）支持。

以下是装饰器类型总结：

| 类型       | 用途     | 示例           |
| ---------- | -------- | -------------- |
| 类装饰器   | 修饰类   | `@addProperty` |
| 方法装饰器 | 修饰方法 | `@time`        |
| 属性装饰器 | 修饰属性 | `@uppercase`   |
| 参数装饰器 | 修饰参数 | `@required`    |
