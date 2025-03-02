---
sidebar_position: 5
---

# `Date`

## 概述

`Date` 是 JavaScript 中的一种内置对象，用于处理日期和时间。`Date` 对象提供了丰富的 API，可以获取、设置和操作日期和时间。

## 创建 `Date` 对象

可以通过 `new Date()` 构造函数创建 `Date` 对象。

### 语法

```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

### 参数

- 无参数：创建当前日期和时间的 `Date` 对象。
- `value`：表示自 1970 年 1 月 1 日 00:00:00 UTC 以来的毫秒数。
- `dateString`：表示日期的字符串，符合 RFC 2822 或 ISO 8601 格式。
- `year`：表示年份的整数值（例如，1995）。
- `monthIndex`：表示月份的整数值（0 表示 1 月，11 表示 12 月）。
- `day`：表示月份的某一天的整数值（1 到 31）。
- `hours`：表示小时的整数值（0 到 23）。
- `minutes`：表示分钟的整数值（0 到 59）。
- `seconds`：表示秒数的整数值（0 到 59）。
- `milliseconds`：表示毫秒数的整数值（0 到 999）。

### 示例

```javascript
// 当前日期和时间
const now = new Date();

// 指定日期和时间
const date1 = new Date(2023, 9, 1); // 2023 年 10 月 1 日
const date2 = new Date("2023-10-01T12:00:00Z"); // ISO 8601 格式
const date3 = new Date(1696137600000); // 时间戳
```

## `Date` 对象的常用方法

### 1. 获取日期和时间

- `getFullYear()`：获取年份（四位数）。
- `getMonth()`：获取月份（0 到 11）。
- `getDate()`：获取月份中的某一天（1 到 31）。
- `getDay()`：获取星期几（0 到 6，0 表示星期日）。
- `getHours()`：获取小时（0 到 23）。
- `getMinutes()`：获取分钟（0 到 59）。
- `getSeconds()`：获取秒数（0 到 59）。
- `getMilliseconds()`：获取毫秒数（0 到 999）。
- `getTime()`：获取自 1970 年 1 月 1 日 00:00:00 UTC 以来的毫秒数。

```javascript
const now = new Date();

console.log(now.getFullYear()); // 输出: 当前年份
console.log(now.getMonth()); // 输出: 当前月份（0 到 11）
console.log(now.getDate()); // 输出: 当前日期（1 到 31）
console.log(now.getDay()); // 输出: 当前星期几（0 到 6）
console.log(now.getHours()); // 输出: 当前小时（0 到 23）
console.log(now.getMinutes()); // 输出: 当前分钟（0 到 59）
console.log(now.getSeconds()); // 输出: 当前秒数（0 到 59）
console.log(now.getMilliseconds()); // 输出: 当前毫秒数（0 到 999）
console.log(now.getTime()); // 输出: 当前时间戳
```

### 2. 设置日期和时间

- `setFullYear(year [, month [, date]])`：设置年份（可选月份和日期）。
- `setMonth(month [, date])`：设置月份（可选日期）。
- `setDate(date)`：设置月份中的某一天。
- `setHours(hours [, minutes [, seconds [, milliseconds]]])`：设置小时（可选分钟、秒和毫秒）。
- `setMinutes(minutes [, seconds [, milliseconds]])`：设置分钟（可选秒和毫秒）。
- `setSeconds(seconds [, milliseconds])`：设置秒数（可选毫秒）。
- `setMilliseconds(milliseconds)`：设置毫秒数。
- `setTime(time)`：设置自 1970 年 1 月 1 日 00:00:00 UTC 以来的毫秒数。

```javascript
const date = new Date();

date.setFullYear(2023);
date.setMonth(9); // 10 月
date.setDate(1);
date.setHours(12);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date); // 输出: 2023 年 10 月 1 日 12:00:00
```

### 3. 日期和时间的格式化

- `toDateString()`：返回日期的字符串表示（例如，"Thu Oct 01 2023"）。
- `toTimeString()`：返回时间的字符串表示（例如，"12:00:00 GMT+0800 (中国标准时间)"）。
- `toISOString()`：返回 ISO 8601 格式的日期和时间字符串（例如，"2023-10-01T04:00:00.000Z"）。
- `toLocaleDateString()`：返回本地化的日期字符串。
- `toLocaleTimeString()`：返回本地化的时间字符串。
- `toLocaleString()`：返回本地化的日期和时间字符串。

```javascript
const date = new Date();

console.log(date.toDateString()); // 输出: 当前日期的字符串表示
console.log(date.toTimeString()); // 输出: 当前时间的字符串表示
console.log(date.toISOString()); // 输出: ISO 8601 格式的日期和时间字符串
console.log(date.toLocaleDateString()); // 输出: 本地化的日期字符串
console.log(date.toLocaleTimeString()); // 输出: 本地化的时间字符串
console.log(date.toLocaleString()); // 输出: 本地化的日期和时间字符串
```

## `Date` 对象的应用场景

### 1. 获取当前日期和时间

```javascript
const now = new Date();
console.log(now); // 输出: 当前日期和时间
```

### 2. 计算日期差

```javascript
const date1 = new Date(2023, 9, 1);
const date2 = new Date(2023, 9, 10);
const diffTime = date2 - date1; // 时间差（毫秒）
const diffDays = diffTime / (1000 * 60 * 60 * 24); // 时间差（天）

console.log(diffDays); // 输出: 9
```

### 3. 格式化日期和时间

```javascript
const date = new Date();
const formattedDate = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}`;
console.log(formattedDate); // 输出: 当前日期的格式化字符串
```

## 总结

`Date` 是 JavaScript 中用于处理日期和时间的对象，具有以下特点：

- 提供丰富的 API，可以获取、设置和操作日期和时间。
- 支持多种日期和时间的格式化方法。
- 适用于获取当前日期和时间、计算日期差、格式化日期和时间等场景。

以下是 `Date` 的常用方法总结：

| 方法                   | 用途                         | 示例                          |
| ---------------------- | ---------------------------- | ----------------------------- |
| `getFullYear()`        | 获取年份                     | `date.getFullYear()`          |
| `getMonth()`           | 获取月份                     | `date.getMonth()`             |
| `getDate()`            | 获取日期                     | `date.getDate()`              |
| `getDay()`             | 获取星期几                   | `date.getDay()`               |
| `getHours()`           | 获取小时                     | `date.getHours()`             |
| `getMinutes()`         | 获取分钟                     | `date.getMinutes()`           |
| `getSeconds()`         | 获取秒数                     | `date.getSeconds()`           |
| `getMilliseconds()`    | 获取毫秒数                   | `date.getMilliseconds()`      |
| `getTime()`            | 获取时间戳                   | `date.getTime()`              |
| `setFullYear()`        | 设置年份                     | `date.setFullYear(2023)`      |
| `setMonth()`           | 设置月份                     | `date.setMonth(9)`            |
| `setDate()`            | 设置日期                     | `date.setDate(1)`             |
| `setHours()`           | 设置小时                     | `date.setHours(12)`           |
| `setMinutes()`         | 设置分钟                     | `date.setMinutes(0)`          |
| `setSeconds()`         | 设置秒数                     | `date.setSeconds(0)`          |
| `setMilliseconds()`    | 设置毫秒数                   | `date.setMilliseconds(0)`     |
| `setTime()`            | 设置时间戳                   | `date.setTime(1696137600000)` |
| `toDateString()`       | 返回日期的字符串表示         | `date.toDateString()`         |
| `toTimeString()`       | 返回时间的字符串表示         | `date.toTimeString()`         |
| `toISOString()`        | 返回 ISO 8601 格式的字符串   | `date.toISOString()`          |
| `toLocaleDateString()` | 返回本地化的日期字符串       | `date.toLocaleDateString()`   |
| `toLocaleTimeString()` | 返回本地化的时间字符串       | `date.toLocaleTimeString()`   |
| `toLocaleString()`     | 返回本地化的日期和时间字符串 | `date.toLocaleString()`       |
