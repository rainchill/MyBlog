---
sidebar_position: 2
---

# ES6 之后的类

## 概述

在 ES6（ECMAScript 2015）中，JavaScript 引入了 `class` 关键字，提供了一种更清晰、直观的语法来定义类。虽然底层仍然基于构造函数和原型链，但 `class` 语法是对传统方式的封装，使面向对象编程更加现代化和易读。本文将介绍 ES6 之后类的定义及其特性。

## 定义与创建

### 1. `class` 语法

通过 `class` 关键字定义类，类中包含构造函数（`constructor`）和其他方法。构造函数用于初始化实例属性，其他方法自动绑定到类的原型上。

#### 创建方式

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // 实例属性
    this.age = age;
  }

  sayHello() {
    return `Hello, I am ${this.name}`;
  }
}
```

### 2. 实例化

使用 `new` 关键字创建类的实例。

```javascript
const person1 = new Person("Alice", 25);
console.log(person1.name); // 输出: "Alice"
console.log(person1.sayHello()); // 输出: "Hello, I am Alice"
```

### 示例

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    return `${this.brand} ${this.model} is driving`;
  }
}

const car1 = new Car("Toyota", "Camry");
console.log(car1.drive()); // 输出: "Toyota Camry is driving"
```

## 特性

1. **语法糖**：

   - `class` 是对构造函数和原型链的封装，底层仍是原型机制。

2. **严格模式**：

   - 类内部自动运行在严格模式（`"use strict"`）。

3. **不可提升**：

   - 与函数声明不同，类声明不会被提升，必须先定义再使用。

4. **方法绑定**：
   - 类中的方法默认绑定到原型上，所有实例共享。

### 示例

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `${this.name} says woof!`;
  }
}

const dog1 = new Dog("Max");
console.log(dog1.bark()); // 输出: "Max says woof!"
console.log(typeof Dog.prototype.bark); // 输出: "function"
```

## 继承的实现

ES6 使用 `extends` 关键字实现继承，结合 `super` 调用父类构造函数或方法。

### 1. 基本继承

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name); // 调用父类构造函数
    this.color = color;
  }

  meow() {
    return `${this.name} says meow`;
  }
}

const cat1 = new Cat("Whiskers", "black");
console.log(cat1.eat()); // 输出: "Whiskers is eating"
console.log(cat1.meow()); // 输出: "Whiskers says meow"
```

### 2. 方法重写

子类可以重写父类方法。

```javascript
class Bird extends Animal {
  eat() {
    return `${this.name} is pecking food`;
  }
}

const bird1 = new Bird("Tweety");
console.log(bird1.eat()); // 输出: "Tweety is pecking food"
```

## 常用特性

### 1. 静态方法

使用 `static` 关键字定义静态方法，直接通过类名调用。

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 输出: 5
```

### 2. getter 和 setter

通过 `get` 和 `set` 定义属性的访问器。

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    this._width = value;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 输出: 50
rect.width = 8;
console.log(rect.area); // 输出: 80
```

### 3. 类字段（ES2022+）

类字段允许直接在类中定义实例属性（无需 `constructor`）。

```javascript
class User {
  name = "Anonymous"; // 默认值

  constructor(name) {
    if (name) this.name = name;
  }

  getName() {
    return this.name;
  }
}

const user1 = new User("Alice");
console.log(user1.getName()); // 输出: "Alice"
const user2 = new User();
console.log(user2.getName()); // 输出: "Anonymous"
```

## 属性

### 1. `prototype`

- **用途**：类的原型对象，存储实例共享的方法。
- **示例**：

```javascript
class Book {
  constructor(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}
console.log(Book.prototype.getTitle); // 输出: 函数
```

### 2. `constructor`

- **用途**：指向类本身。
- **示例**：

```javascript
const book = new Book("JS Guide");
console.log(book.constructor === Book); // 输出: true
```

## 应用场景

### 1. 对象模板

类提供清晰的模板定义方式。

```javascript
class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  study() {
    return `${this.name} is studying`;
  }
}

const student1 = new Student(1, "Alice");
console.log(student1.study()); // 输出: "Alice is studying"
```

### 2. 继承与扩展

实现多层次继承。

```javascript
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    return `${this.type} is moving`;
  }
}

class Bike extends Vehicle {
  constructor(type, speed) {
    super(type);
    this.speed = speed;
  }
  move() {
    return `${this.type} is moving at ${this.speed} km/h`;
  }
}

const bike1 = new Bike("Mountain Bike", 20);
console.log(bike1.move()); // 输出: "Mountain Bike is moving at 20 km/h"
```

### 3. 封装工具

使用静态方法封装工具函数。

```javascript
class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

console.log(StringUtils.capitalize("hello")); // 输出: "Hello"
```

## 总结

ES6 之后的 `class` 语法增强了 JavaScript 的面向对象能力：

- 提供简洁的类定义和继承方式。
- 支持静态方法、getter/setter 和类字段等特性。
- 本质上是构造函数和原型链的语法糖，但更易于理解和维护。

以下是相关特性总结：

| 特性        | 用途           | 示例                        |
| ----------- | -------------- | --------------------------- |
| `extends`   | 实现类继承     | `class B extends A`         |
| `static`    | 定义静态方法   | `static method()`           |
| `get`/`set` | 定义属性访问器 | `get prop()` / `set prop()` |
