---
sidebar_position: 1
---

# ES6 之前定义类的方法

## 概述

在 ES6（ECMAScript 2015）引入 `class` 关键字之前，JavaScript 没有原生的类语法。开发者通过构造函数和原型链来模拟类的行为。这种方式依赖于函数和 `prototype` 属性实现面向对象编程的核心特性，如封装、继承等。本文将介绍在 ES6 之前如何定义“类”及其相关机制。

## 定义与创建

### 1. 构造函数

在 ES6 之前，通过定义一个普通函数作为构造函数来创建“类”。构造函数内部使用 `this` 定义实例属性，外部通过 `prototype` 添加方法。

#### 创建方式

```javascript
function Person(name, age) {
  this.name = name; // 实例属性
  this.age = age;
}

// 添加方法到原型
Person.prototype.sayHello = function () {
  return "Hello, I am " + this.name;
};
```

### 2. 实例化

使用 `new` 关键字调用构造函数来创建实例对象。

```javascript
const person1 = new Person("Alice", 25);
console.log(person1.name); // 输出: "Alice"
console.log(person1.sayHello()); // 输出: "Hello, I am Alice"
```

### 示例

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.drive = function () {
  return this.brand + " " + this.model + " is driving";
};

const car1 = new Car("Toyota", "Camry");
console.log(car1.drive()); // 输出: "Toyota Camry is driving"
```

## 特性

1. **构造函数与实例**：

   - 构造函数负责初始化实例属性。
   - 每次 `new` 调用时创建一个新对象，属性独立。

2. **原型链**：

   - 方法定义在 `prototype` 上，所有实例共享这些方法，避免重复创建。

3. **动态性**：
   - 可以随时向 `prototype` 添加方法，已创建的实例会自动获得这些新方法。

### 示例

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  return this.name + " says woof!";
};

const dog1 = new Dog("Max");
console.log(dog1.bark()); // 输出: "Max says woof!"

// 动态添加方法
Dog.prototype.run = function () {
  return this.name + " is running";
};

console.log(dog1.run()); // 输出: "Max is running"
```

## 继承的实现

在 ES6 之前，继承通过操作原型链实现，通常涉及以下步骤：

1. **调用父类构造函数**：

   - 使用 `call` 或 `apply` 在子类构造函数中调用父类构造函数，继承实例属性。

2. **设置原型链**：
   - 将子类的 `prototype` 设置为父类实例，确保继承方法。

### 示例

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  return this.name + " is eating";
};

function Cat(name, color) {
  Animal.call(this, name); // 继承实例属性
  this.color = color;
}

// 继承原型方法
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; // 修正 constructor

Cat.prototype.meow = function () {
  return this.name + " says meow";
};

const cat1 = new Cat("Whiskers", "black");
console.log(cat1.eat()); // 输出: "Whiskers is eating"
console.log(cat1.meow()); // 输出: "Whiskers says meow"
```

## 常用方法

### 1. `Object.create()`

- **用途**：创建新对象并指定其原型，常用于继承。
- **参数**：
  - `proto`：新对象的原型对象。
- **返回值**：新对象。

```javascript
const proto = {
  greet: function () {
    return "Hi";
  },
};
const obj = Object.create(proto);
console.log(obj.greet()); // 输出: "Hi"
```

### 2. `call()`

- **用途**：借用父类构造函数初始化子类实例。
- **参数**：
  - `thisArg`：指定 `this` 的对象。
  - `arg1, arg2, ...`：传递给函数的参数。

```javascript
function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this, name);
}

const child = new Child("Tom");
console.log(child.name); // 输出: "Tom"
```

## 属性

### 1. `prototype`

- **用途**：定义共享方法和属性的对象。
- **示例**：

```javascript
function Book(title) {
  this.title = title;
}
Book.prototype.getTitle = function () {
  return this.title;
};
```

### 2. `constructor`

- **用途**：指向创建实例的构造函数。
- **示例**：

```javascript
const book = new Book("JS Guide");
console.log(book.constructor === Book); // 输出: true
```

## 应用场景

### 1. 对象模板

通过构造函数和原型定义可复用的对象模板。

```javascript
function Student(id, name) {
  this.id = id;
  this.name = name;
}
Student.prototype.study = function () {
  return this.name + " is studying";
};

const student1 = new Student(1, "Alice");
console.log(student1.study()); // 输出: "Alice is studying"
```

### 2. 模拟继承

实现多层次的继承结构。

```javascript
function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.move = function () {
  return this.type + " is moving";
};

function Bike(type, speed) {
  Vehicle.call(this, type);
  this.speed = speed;
}
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

const bike1 = new Bike("Mountain Bike", 20);
console.log(bike1.move()); // 输出: "Mountain Bike is moving"
```

## 总结

在 ES6 之前，JavaScript 通过构造函数和原型链模拟类：

- 使用构造函数定义实例属性，`prototype` 定义共享方法。
- 继承通过 `call` 和原型链操作实现。
- 这种方式灵活但代码较为繁琐，ES6 的 `class` 语法是对其的改进。

以下是相关方法总结：

| 方法              | 用途                  | 示例                       |
| ----------------- | --------------------- | -------------------------- |
| `Object.create()` | 创建新对象并指定原型  | `Object.create(proto)`     |
| `call()`          | 调用函数并指定 `this` | `func.call(thisArg, arg1)` |
