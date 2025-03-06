---
sidebar_position: 1
# 显示 h2 到 h5 标题
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# TypeScript 新增类型

## 概述

TypeScript 是 JavaScript 的超集，在 JavaScript 的动态类型基础上引入了静态类型系统。

通过新增类型和类型注解，TypeScript 增强了代码的可读性、可维护性和安全性，特别适合大型项目开发。

本文将介绍 TypeScript 相比 JavaScript 增加的主要类型，以及它们的定义和用法。

## 新增类型

### 1. 基本类型注解

TypeScript 在 JavaScript 的原始类型（`string`、`number`、`boolean` 等）基础上增加了显式类型注解。

#### 定义与用法

```typescript
let name: string = "Alice"; // 字符串类型
let age: number = 25; // 数字类型
let isActive: boolean = true; // 布尔类型
```

#### 示例

```typescript
function greet(person: string): string {
  return `Hello, ${person}`;
}
console.log(greet("Bob")); // 输出: "Hello, Bob"
// greet(123); // 错误: 类型不匹配
```

### 2. `void`

- **用途**：表示函数没有返回值。
- **特点**：相比 JavaScript 的隐式 `undefined`，更明确地表达无返回值意图。

#### 示例

```typescript
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hi"); // 输出: "Hi"
```

### 3. `never`

- **用途**：表示永不返回的函数（如抛出错误或无限循环）。
- **特点**：JavaScript 中无对应类型，用于类型推断的最底层。

#### 示例

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

### 4. `any`

- **用途**：表示任意类型，禁用类型检查。
- **特点**：JavaScript 默认动态类型行为的显式表示，但应谨慎使用。

#### 示例

```typescript
let value: any = "string";
value = 123; // 合法
value = true; // 合法
```

### 5. `unknown`

- **用途**：表示未知类型，比 `any` 更安全，需类型断言或检查后使用。
- **特点**：JavaScript 无此类型，TypeScript 引入以增强类型安全性。

#### 示例

```typescript
let data: unknown = "maybe string";
if (typeof data === "string") {
  console.log(data.toUpperCase()); // 输出: "MAYBE STRING"
}
// data.toUpperCase(); // 错误: 类型未知
```

### 6. 枚举（`enum`）

- **用途**：定义一组命名的常量集合。
- **特点**：JavaScript 无原生枚举，TypeScript 提供编译时检查。

#### 示例

```typescript
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}

let c: Color = Color.Green;
console.log(c); // 输出: 1

// 指定值
enum Status {
  Pending = 1,
  Active = 2,
  Done = 4,
}
let s: Status = Status.Active;
console.log(s); // 输出: 2
```

### 7. 元组（`tuple`）

- **用途**：固定长度和类型顺序的数组。
- **特点**：JavaScript 数组类型单一，TypeScript 增加元组支持。

#### 示例

```typescript
let tuple: [string, number] = ["Alice", 25];
console.log(tuple[0]); // 输出: "Alice"
console.log(tuple[1]); // 输出: 25
// tuple[2] = "extra"; // 错误: 元组长度固定
// tuple[0] = 123; // 错误: 类型不符
```

### 8. 接口（`interface`）

- **用途**：定义对象的结构和类型。
- **特点**：JavaScript 无接口概念，TypeScript 提供类型契约。

#### 示例

```typescript
interface User {
  name: string;
  age: number;
  isActive?: boolean; // 可选属性
}

const user: User = { name: "Bob", age: 30 };
console.log(user); // 输出: { name: "Bob", age: 30 }
```

### 9. 类型别名（`type`）

- **用途**：为类型创建命名别名，支持复杂类型组合。
- **特点**：JavaScript 无此功能，TypeScript 提供灵活类型定义。

#### 示例

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;

const p: Point = { x: 10, y: 20 };
const id: ID = "abc123";
console.log(p, id); // 输出: { x: 10, y: 20 } "abc123"
```

### 10. 联合类型（Union Type）

- **用途**：表示变量可以是多种类型之一。
- **特点**：JavaScript 无显式联合类型，TypeScript 增强类型灵活性。

#### 示例

```typescript
let result: string | number;
result = "success";
console.log(result); // 输出: "success"
result = 200;
// result = true; // 错误: 类型不符
```

### 11. 交叉类型（Intersection Type）

- **用途**：合并多个类型为一个类型。
- **特点**：JavaScript 无此功能，TypeScript 支持类型组合。

#### 示例

```typescript
interface A {
  a: string;
}
interface B {
  b: number;
}
type AB = A & B;

const ab: AB = { a: "hello", b: 42 };
console.log(ab); // 输出: { a: "hello", b: 42 }
```

### 12. 字面量类型（Literal Type）

- **用途**：指定具体的值作为类型。
- **特点**：JavaScript 无此限制，TypeScript 提供精确类型控制。

#### 示例

```typescript
type Direction = "up" | "down" | "left" | "right";
let move: Direction = "up";
console.log(move); // 输出: "up"
// move = "diagonal"; // 错误: 类型不符
```

### 13. 类型断言（Type Assertion）

- **用途**：手动指定变量类型，告诉编译器“相信我”。
- **特点**：JavaScript 无此语法，TypeScript 提供类型转换方式。

#### 示例

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 输出: 16

// 另一种写法
let strLength2: number = (<string>someValue).length;
```

## 应用场景

### 1. 类型安全

防止类型错误。

```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // 输出: 5
// add("2", "3"); // 错误: 参数类型不符
```

### 2. 对象结构约束

确保对象符合预期形状。

```typescript
interface Product {
  id: number;
  name: string;
  price?: number;
}

function printProduct(p: Product) {
  console.log(`${p.name} (ID: ${p.id})`);
}

printProduct({ id: 1, name: "Book" }); // 输出: "Book (ID: 1)"
```

### 3. 复杂逻辑定义

使用联合类型和交叉类型处理复杂数据。

```typescript
type Result =
  | { success: true; data: string }
  | { success: false; error: string };
function handleResult(r: Result) {
  if (r.success) console.log(r.data);
  else console.log(r.error);
}

handleResult({ success: true, data: "Done" }); // 输出: "Done"
```

## 总结

TypeScript 相比 JavaScript 新增了丰富的类型系统，提升了代码的类型安全性和可维护性。主要新增类型包括：

6 个新增类型: `void` `never` `any` `unknown` `enum` `tuple`，以及 2 个用于自定义类型的方式: `interface` `type`

| 类型        | 用途               | 示例                  |
| ----------- | ------------------ | --------------------- |
| `void`      | 无返回值           | `function(): void`    |
| `never`     | 永不返回           | `function(): never`   |
| `any`       | 任意类型           | `function(): any`     |
| `unknown`   | 未知类型           | `let x: unknown`      |
| `enum`      | 命名常量集合       | `enum Color { Red }`  |
| `tuple`     | 固定类型数组       | `[string, number]`    |
| `interface` | 对象结构契约       | `interface User {}`   |
| `type`      | 为类型创建命名别名 | `type alias = number` |

这些类型使 TypeScript 在静态类型检查、IDE 支持和代码重构方面远超 JavaScript。
