---
sidebar_position: 1
---

# CSS3 新增属性

## 概述

CSS3 是层叠样式表（Cascading Style Sheets）的第三个主要版本，相较于 CSS2，引入了大量新属性和功能，极大地增强了网页的表现力与交互性。CSS3 新增的属性涵盖了选择器、颜色、布局、动画、过渡、变换等多方面，支持模块化开发，使开发者可以创建更复杂、动态和响应式的页面设计。

本文将详细介绍 CSS3 的主要新增属性及其用法。

## 新增属性分类与介绍

### 1. 颜色与透明度

#### `rgba` 和 `hsla`

- **用途**：支持 alpha 透明度的颜色表示方法。
- **语法**：
  - `rgba(red, green, blue, alpha)`：RGB 颜色加透明度（0-1）。
  - `hsla(hue, saturation, lightness, alpha)`：色相、饱和度、亮度加透明度。
- **示例**：

```css
div {
  background: rgba(255, 0, 0, 0.5); /* 半透明红色 */
  color: hsla(120, 100%, 50%, 0.8); /* 半透明绿色 */
}
```

#### `opacity`

- **用途**：设置元素的整体透明度。
- **取值**：0（完全透明）到 1（完全不透明）。
- **示例**：

```css
img {
  opacity: 0.7; /* 70% 不透明 */
}
```

### 2. 边框与背景

#### `border-radius`

- **用途**：创建圆角边框。
- **取值**：长度值（如 `px`、`em`）或百分比，支持四个角分别设置。
- **示例**：

```css
button {
  border-radius: 10px; /* 统一圆角 */
  border-radius: 5px 10px 15px 20px; /* 左上、右上、右下、左下 */
}
```

#### `box-shadow`

- **用途**：为元素添加阴影。
- **语法**：`h-offset v-offset blur spread color inset`。
- **示例**：

```css
div {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* 外阴影 */
  box-shadow: inset 0 0 10px #000; /* 内阴影 */
}
```

#### `background-size`

- **用途**：控制背景图片的大小。
- **取值**：`length`、`percentage`、`cover`（覆盖）、`contain`（包含）。
- **示例**：

```css
body {
  background: url("image.jpg") no-repeat;
  background-size: cover; /* 背景填满容器 */
}
```

#### `background-clip`

- **用途**：定义背景的裁剪区域。
- **取值**：`border-box`（默认）、`padding-box`、`content-box`。
- **示例**：

```css
div {
  background: yellow;
  background-clip: content-box; /* 背景仅填充内容区域 */
  padding: 10px;
  border: 5px dashed black;
}
```

#### `border-image`

- **用途**：使用图片作为边框。
- **语法**：`source slice width outset repeat`。
- **示例**：

```css
div {
  border-image: url("border.png") 30 stretch;
  border-width: 10px;
}
```

### 3. 渐变

#### `linear-gradient`

- **用途**：创建线性渐变背景。
- **语法**：`linear-gradient(direction, color-stop1, color-stop2, ...)`。
- **示例**：

```css
div {
  background: linear-gradient(to right, red, blue); /* 从左到右渐变 */
  background: linear-gradient(45deg, #ff0, #00f 50%, #0f0); /* 45度渐变 */
}
```

#### `radial-gradient`

- **用途**：创建径向（圆形）渐变。
- **语法**：`radial-gradient(shape size at position, color-stop1, ...)`。
- **示例**：

```css
div {
  background: radial-gradient(circle, yellow, green); /* 圆形渐变 */
}
```

### 4. 变换（Transform）

#### `transform`

- **用途**：对元素应用 2D 或 3D 变换。
- **取值**：`translate`、`rotate`、`scale`、`skew` 等。
- **示例**：

```css
div {
  transform: rotate(45deg); /* 旋转 45 度 */
  transform: translate(50px, 100px) scale(1.5); /* 平移并放大 */
}
```

#### `transform-origin`

- **用途**：设置变换的原点。
- **取值**：坐标（如 `top left`、`50% 50%`）。
- **示例**：

```css
div {
  transform: rotate(30deg);
  transform-origin: top left; /* 从左上角旋转 */
}
```

#### `perspective`

- **用途**：为 3D 变换设置透视效果。
- **示例**：

```css
.container {
  perspective: 1000px; /* 透视距离 */
}
.child {
  transform: rotateY(45deg); /* 沿 Y 轴旋转 */
}
```

### 5. 过渡（Transition）

#### `transition`

- **用途**：为属性变化添加平滑过渡效果。
- **语法**：`property duration timing-function delay`。
- **示例**：

```css
button {
  background: blue;
  transition: background 0.5s ease-in-out; /* 背景色过渡 */
}
button:hover {
  background: red;
}
```

### 6. 动画（Animation）

#### `animation`

- **用途**：定义关键帧动画。
- **语法**：`name duration timing-function delay iteration-count direction fill-mode`。
- **示例**：

```css
div {
  animation: slide 2s infinite;
}
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```

#### `@keyframes`

- **用途**：定义动画的关键帧。
- **示例**：

```css
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

### 7. 布局

#### `flex`（弹性布局）

- **用途**：启用 Flexbox 布局，简化一维布局。
- **主要属性**：
  - `display: flex`：容器启用 Flex。
  - `flex-direction`：排列方向。
  - `justify-content`：主轴对齐。
  - `align-items`：交叉轴对齐。
- **示例**：

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

#### `grid`（网格布局）

- **用途**：启用 Grid 布局，支持二维布局。
- **主要属性**：
  - `display: grid`：容器启用 Grid。
  - `grid-template-columns`：列定义。
  - `grid-template-rows`：行定义。
  - `gap`：网格间距。
- **示例**：

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

#### `columns`

- **用途**：创建多列文本布局。
- **属性**：`column-count`（列数）、`column-gap`（间距）。
- **示例**：

```css
article {
  columns: 3;
  column-gap: 20px;
}
```

### 8. 文本与字体

#### `text-shadow`

- **用途**：为文本添加阴影。
- **语法**：`h-offset v-offset blur color`。
- **示例**：

```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

#### `word-break`

- **用途**：控制单词换行行为。
- **取值**：`break-all`、`keep-all`。
- **示例**：

```css
p {
  word-break: break-all; /* 长单词强制换行 */
}
```

#### `@font-face`

- **用途**：加载自定义字体。
- **示例**：

```css
@font-face {
  font-family: "CustomFont";
  src: url("font.woff2") format("woff2");
}
body {
  font-family: "CustomFont", sans-serif;
}
```

### 9. 选择器相关

#### `:nth-child()` 等伪类

- **用途**：增强选择器功能。
- **示例**：

```css
li:nth-child(odd) {
  background: lightgray; /* 奇数行变色 */
}
```

#### `::before` 和 `::after`

- **用途**：插入伪元素内容。
- **示例**：

```css
span::before {
  content: "★";
  color: gold;
}
```

## 应用场景

### 1. 视觉效果

```css
.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #f06, #48f);
}
```

### 2. 动画交互

```css
.button {
  transition: transform 0.3s ease;
}
.button:hover {
  transform: scale(1.1);
}
```

### 3. 响应式布局

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

## 总结

CSS3 新增属性丰富了样式设计的可能性，主要包括：

- **颜色与背景**：`rgba`、`border-radius`、`background-size` 等。
- **变换与动画**：`transform`、`transition`、`animation` 等。
- **布局**：`flex`、`grid`、`columns` 等。
- **文本与字体**：`text-shadow`、`@font-face` 等。

以下是部分新增属性总结：

| 属性              | 用途     | 示例                                     |
| ----------------- | -------- | ---------------------------------------- |
| `border-radius`   | 圆角边框 | `border-radius: 10px`                    |
| `box-shadow`      | 阴影效果 | `box-shadow: 5px 5px 10px`               |
| `linear-gradient` | 线性渐变 | `background: linear-gradient(red, blue)` |
| `transform`       | 元素变换 | `transform: rotate(45deg)`               |
| `transition`      | 平滑过渡 | `transition: all 0.5s`                   |
| `display: flex`   | 弹性布局 | `display: flex`                          |

CSS3 这些属性为现代 Web 设计提供了强大支持。
