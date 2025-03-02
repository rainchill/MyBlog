---
sidebar_position: 2
---

# 方法装饰器

方法装饰器（Method Decorator）是 JavaScript 装饰器的一种类型，专门用于修饰类中的方法。

它通过在方法定义前添加 `@` 符号和装饰器函数，能够在运行时动态修改方法的行为。

方法装饰器是元编程的重要工具，常用于日志记录、性能监控、权限控制等场景。虽然装饰器仍是 ES7 的提案特性（Stage 2），但在 Babel 或 TypeScript 中已被广泛支持和使用。

## 定义与创建

### 1. 方法装饰器语法

方法装饰器以 `@` 开头，后接一个函数名，置于类方法定义之前。装饰器函数接收三个参数，用于操作方法的描述符，并在返回时修改方法的行为。

#### 创建方式

```javascript
function log(target, name, descriptor) {
  const original = descriptor.value; // 保存原始方法
  descriptor.value = function (...args) {
    console.log(`Calling ${name} with`, args);
    return original.apply(this, args); // 执行原始方法
  };
  return descriptor; // 返回修改后的描述符
}

class Example {
  @log
  greet(message) {
    return `Hello, ${message}`;
  }
}
```

### 2. 使用方法装饰器

装饰器直接应用于方法，调用实例方法时会触发装饰器定义的行为。

```javascript
const ex = new Example();
console.log(ex.greet("World"));
// 输出:
// "Calling greet with" ["World"]
// "Hello, World"
```

## 参数与返回值

### 参数

方法装饰器函数接收以下三个参数：

1. **`target`**：
   - 类型：对象。
   - 描述：类的原型对象（`Class.prototype`），即方法所属的原型。
2. **`name`**：
   - 类型：字符串。
   - 描述：被修饰的方法名称。
3. **`descriptor`**：
   - 类型：对象（属性描述符）。
   - 描述：方法的描述符，包含 `value`（方法本体）、`writable`、`enumerable` 和 `configurable` 等属性。

### 返回值

- **类型**：对象（属性描述符）或无返回值。
- **描述**：返回修改后的描述符以替换原方法的行为。若无返回值，则使用原始描述符。

### 示例（参数解析）

```javascript
function inspect(target, name, descriptor) {
  console.log("Target:", target); // 类原型
  console.log("Method name:", name); // 方法名
  console.log("Descriptor:", descriptor); // 方法描述符
  return descriptor;
}

class Demo {
  @inspect
  test() {
    console.log("Testing");
  }
}

new Demo().test();
// 输出:
// Target: Demo.prototype
// Method name: test
// Descriptor: { value: [Function: test], writable: true, enumerable: false, configurable: true }
// Testing
```

## 特性

1. **运行时修改**：

   - 装饰器在类定义时执行，动态改变方法行为。

2. **作用于原型**：

   - 修改的是类原型上的方法，所有实例共享。

3. **可组合**：

   - 多个方法装饰器可以叠加，从下到上依次执行。

4. **访问原始方法**：
   - 通过 `descriptor.value` 获取原始方法，可对其进行包装。

### 示例（多装饰器叠加）

```javascript
function log1(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log("Log1:", `${name} called`);
    return original.apply(this, args);
  };
  return descriptor;
}

function log2(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log("Log2:", `${name} called`);
    return original.apply(this, args);
  };
  return descriptor;
}

class Multi {
  @log1
  @log2
  say(text) {
    return text;
  }
}

const m = new Multi();
m.say("Hi");
// 输出:
// Log2: say called
// Log1: say called
// Hi
```

## 用法与实现

### 1. 修改方法逻辑

包装原始方法，添加额外功能。

```javascript
function uppercase(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    const result = original.apply(this, args);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
  return descriptor;
}

class TextProcessor {
  @uppercase
  process(text) {
    return text;
  }
}

const tp = new TextProcessor();
console.log(tp.process("hello")); // 输出: "HELLO"
```

### 2. 参数校验

检查方法传入的参数。

```javascript
function validate(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    if (args.some((arg) => typeof arg !== "number")) {
      throw new Error(`${name} requires numbers`);
    }
    return original.apply(this, args);
  };
  return descriptor;
}

class Calculator {
  @validate
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // 输出: 5
// calc.add(2, "3"); // 抛出错误: "add requires numbers"
```

### 3. 性能监控

测量方法执行时间。

```javascript
function measure(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    const start = performance.now();
    const result = original.apply(this, args);
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
    return result;
  };
  return descriptor;
}

class Timer {
  @measure
  compute(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += i;
    return sum;
  }
}

const t = new Timer();
t.compute(1000000); // 输出: "compute took ...ms" 和结果
```

## 应用场景

### 1. 日志记录

记录方法调用详情。

```javascript
function logCall(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`[${name}] called with:`, args);
    const result = original.apply(this, args);
    console.log(`[${name}] returned:`, result);
    return result;
  };
  return descriptor;
}

class Logger {
  @logCall
  multiply(a, b) {
    return a * b;
  }
}

const l = new Logger();
l.multiply(4, 5);
// 输出:
// [multiply] called with: [4, 5]
// [multiply] returned: 20
```

### 2. 权限控制

限制方法访问权限。

```javascript
function restrict(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    if (!this.isAuthorized) throw new Error(`${name} requires authorization`);
    return original.apply(this, args);
  };
  return descriptor;
}

class Secure {
  isAuthorized = false;

  @restrict
  access() {
    console.log("Access granted");
  }
}

const s = new Secure();
s.access(); // 抛出错误: "access requires authorization"
```

### 3. 异步包装

将方法转为异步操作。

```javascript
function asyncify(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = async function (...args) {
    return original.apply(this, args);
  };
  return descriptor;
}

class AsyncTask {
  @asyncify
  fetchData(id) {
    return `Data for ${id}`;
  }
}

const at = new AsyncTask();
at.fetchData(1).then((data) => console.log(data)); // 输出: "Data for 1"
```

## 总结

方法装饰器是 JavaScript 中修饰类方法的强大工具，具有以下特点：

- 通过 `@` 语法和函数动态修改方法行为。
- 接收 `target`、`name` 和 `descriptor` 参数，返回修改后的描述符。
- 适用于日志、校验、性能监控等场景，支持多装饰器组合。

以下是方法装饰器关键点总结：

| 特性     | 描述                           | 示例                |
| -------- | ------------------------------ | ------------------- |
| 参数     | `target`, `name`, `descriptor` | `@log`              |
| 返回值   | 修改后的描述符                 | `return descriptor` |
| 执行顺序 | 多装饰器从下到上               | `@log1 @log2`       |
