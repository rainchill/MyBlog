---
sidebar_position: 2
---

# CSS 布局

## 概述

CSS（层叠样式表）提供了多种布局方式，用于控制网页元素的排列和定位。随着 CSS 的演进，从最初的浮动和定位，到 CSS3 引入的 Flexbox 和 Grid，布局方式变得更为强大和灵活。

本文将介绍 CSS 中的主要布局方法，包括传统布局（Normal Flow、Float、Position）和现代布局（Flexbox、Grid），并探讨其特点与应用场景。

## 传统布局方式

### 1. 正常流（Normal Flow）

- **描述**：默认的布局方式，元素按文档流的顺序排列，块级元素垂直堆叠，行内元素水平排列。
- **特性**：
  - 块级元素（`block`）占满一行。
  - 行内元素（`inline`）根据内容宽度排列。
- **示例**：

```css
div {
  display: block; /* 默认垂直排列 */
}
span {
  display: inline; /* 水平排列 */
}
```

```html
<div>块1</div>
<div>块2</div>
<span>行内1</span>
<span>行内2</span>
<!-- 输出：块1 和 块2 垂直排列，行内1 和 行内2 水平排列 -->
```

### 2. 浮动（Float）

- **描述**：通过 `float` 属性使元素脱离正常流，向左或右浮动，后续内容环绕。
- **属性**：
  - `float: left | right | none`。
  - 需要 `clear` 清除浮动影响。
- **特性**：常用于图文混排，但布局复杂时需清除浮动。
- **示例**：

```css
.img {
  float: left;
  width: 100px;
  height: 100px;
}
.clear {
  clear: both;
}
```

```html
<img class="img" src="image.jpg" />
<p>文字环绕图片...</p>
<div class="clear"></div>
```

### 3. 定位（Position）

- **描述**：通过 `position` 属性调整元素位置，可脱离正常流。
- **属性**：
  - `position: static | relative | absolute | fixed | sticky`。
  - 配合 `top`、`right`、`bottom`、`left` 定位。
- **特性**：
  - `static`：默认，正常流。
  - `relative`：相对自身原始位置偏移。
  - `absolute`：相对于最近的非 `static` 祖先定位。
  - `fixed`：固定在视口。
  - `sticky`：滚动到指定位置时固定。
- **示例**：

```css
.absolute {
  position: absolute;
  top: 10px;
  left: 20px;
}
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

```html
<div class="absolute">绝对定位</div>
<div class="fixed">固定底部</div>
```

## 现代布局方式

### 4. 弹性布局（Flexbox）

- **描述**：CSS3 引入的一维布局模型，通过 `display: flex` 启用，优化元素在一行或一列中的排列。
- **主要属性**：
  - **容器属性**：
    - `display: flex | inline-flex`：启用 Flex 布局。
    - `flex-direction: row | column | row-reverse | column-reverse`：主轴方向。
    - `justify-content`：主轴对齐（`flex-start`、`center`、`space-between` 等）。
    - `align-items`：交叉轴对齐（`stretch`、`center`、`flex-end` 等）。
    - `flex-wrap`：是否换行（`nowrap`、`wrap`）。
  - **子项属性**：
    - `flex: grow shrink basis`：弹性比例。
    - `order`：排列顺序。
- **特性**：适合一维布局，易于居中和动态调整。
- **示例**：

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.item {
  flex: 1; /* 等分空间 */
}
```

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<!-- 输出：三个等宽项目水平居中排列 -->
```

### 5. 网格布局（Grid）

- **描述**：CSS3 引入的二维布局模型，通过 `display: grid` 启用，支持行和列的精确控制。
- **主要属性**：
  - **容器属性**：
    - `display: grid | inline-grid`：启用 Grid 布局。
    - `grid-template-columns`：定义列宽（如 `1fr 2fr`）。
    - `grid-template-rows`：定义行高。
    - `gap`：网格间距（`row-gap`、`column-gap`）。
    - `justify-items`：单元格水平对齐。
    - `align-items`：单元格垂直对齐。
  - **子项属性**：
    - `grid-column`：占用列范围（如 `1 / 3`）。
    - `grid-row`：占用行范围。
- **特性**：适合复杂二维布局，支持响应式设计。
- **示例**：

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}
.item1 {
  grid-column: 1 / 3; /* 跨两列 */
}
```

```html
<div class="grid">
  <div class="item1">1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
<!-- 输出：2x3 网格，第一项跨两列 -->
```

## 其他布局辅助属性

### 6. 多列布局（Columns）

- **描述**：将内容分成多列，类似报纸排版。
- **属性**：
  - `column-count`：列数。
  - `column-gap`：列间距。
  - `column-width`：列宽。
- **示例**：

```css
article {
  column-count: 3;
  column-gap: 20px;
}
```

### 7. 盒子模型增强

- **属性**：
  - `box-sizing`：控制盒模型计算方式（`content-box`、`border-box`）。
- **示例**：

```css
* {
  box-sizing: border-box; /* 宽度包括边框和内边距 */
}
```

## 应用场景

### 1. 简单页面布局（正常流 + 浮动）

```css
header {
  display: block;
}
img {
  float: left;
}
p {
  margin-left: 120px;
}
```

### 2. 居中与对齐（Flexbox）

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### 3. 复杂网格布局（Grid）

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}
header {
  grid-area: header;
}
```

### 4. 固定导航（Position）

```css
nav {
  position: fixed;
  top: 0;
  width: 100%;
}
```

## 布局方式对比

| 方式    | 维度 | 适用场景       | 优点       | 缺点                   |
| ------- | ---- | -------------- | ---------- | ---------------------- |
| 正常流  | 一维 | 基本文档流     | 简单默认   | 灵活性差               |
| 浮动    | 一维 | 图文混排       | 实现简单   | 需清除浮动，复杂时混乱 |
| 定位    | 二维 | 固定或重叠元素 | 精确控制   | 重叠管理复杂           |
| Flexbox | 一维 | 动态排列、居中 | 灵活、易用 | 不适合二维布局         |
| Grid    | 二维 | 复杂网格布局   | 强大、精确 | 学习曲线稍高           |

## 总结

CSS 提供了多种布局方式，满足不同需求：

- **传统布局**：正常流、浮动、定位，适合简单或特定场景。
- **现代布局**：Flexbox（一维）、Grid（二维），功能强大，适合现代 Web 开发。
- **辅助工具**：多列布局、`box-sizing` 等增强布局能力。

以下是主要布局属性总结：

| 属性/方法       | 用途     | 示例                             |
| --------------- | -------- | -------------------------------- |
| `float`         | 浮动布局 | `float: left`                    |
| `position`      | 定位布局 | `position: absolute`             |
| `display: flex` | 弹性布局 | `flex-direction: row`            |
| `display: grid` | 网格布局 | `grid-template-columns: 1fr 1fr` |

这些布局方式共同构成了 CSS 的核心能力，使开发者能够灵活设计页面结构。
