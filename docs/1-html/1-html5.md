---
sidebar_position: 1
---

# HTML5 新增元素

## 概述

HTML5 是 HTML 标准的第五个主要版本，相较于之前的 HTML4 和 XHTML，引入了许多新元素和属性，以提升网页的语义化、交互性和多媒体支持。

HTML5 新增的元素不仅优化了文档结构，还为开发者提供了更丰富的功能，如原生音频视频播放、语义化标签和表单增强等。本文将详细介绍 HTML5 的主要新增元素及其用途。

## 新增结构元素

### 1. `<header>`

- **用途**：定义文档或节的头部区域，通常包含标题、导航或简介内容。
- **示例**：

```html
<header>
  <h1>网站标题</h1>
  <nav>导航菜单</nav>
</header>
```

### 2. `<footer>`

- **用途**：定义文档或节的底部区域，通常包含版权信息、联系方式等。
- **示例**：

```html
<footer>
  <p>&copy; 2025 公司名称</p>
</footer>
```

### 3. `<article>`

- **用途**：表示文档中独立、可分发的完整内容，如博客文章、新闻报道。
- **示例**：

```html
<article>
  <h2>新闻标题</h2>
  <p>新闻内容...</p>
</article>
```

### 4. `<section>`

- **用途**：表示文档中的一个章节或主题区域，通常包含标题。
- **示例**：

```html
<section>
  <h2>章节标题</h2>
  <p>章节内容...</p>
</section>
```

### 5. `<aside>`

- **用途**：表示与主内容相关但独立的附属内容，如侧边栏、广告。
- **示例**：

```html
<aside>
  <h3>相关链接</h3>
  <ul>
    <li><a href="#">链接</a></li>
  </ul>
</aside>
```

### 6. `<nav>`

- **用途**：定义导航链接区域。
- **示例**：

```html
<nav>
  <ul>
    <li><a href="#home">首页</a></li>
    <li><a href="#about">关于</a></li>
  </ul>
</nav>
```

### 7. `<main>`

- **用途**：表示文档的主要内容区域，一个文档只能有一个 `<main>`。
- **示例**：

```html
<main>
  <h1>主要内容</h1>
  <p>这里是页面的核心内容...</p>
</main>
```

### 8. `<figure>` 和 `<figcaption>`

- **用途**：
  - `<figure>`：表示独立的内容单元，如图片、图表。
  - `<figcaption>`：为其添加说明文字。
- **示例**：

```html
<figure>
  <img src="image.jpg" alt="示例图片" />
  <figcaption>图片说明</figcaption>
</figure>
```

## 新增多媒体元素

### 9. `<audio>`

- **用途**：嵌入音频内容，支持原生播放。
- **属性**：`controls`（显示控制条）、`src`（音频源）、`autoplay` 等。
- **示例**：

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  您的浏览器不支持音频元素。
</audio>
```

### 10. `<video>`

- **用途**：嵌入视频内容，支持原生播放。
- **属性**：`controls`、`src`、`width`、`height`、`poster`（封面图）等。
- **示例**：

```html
<video controls width="320" height="240">
  <source src="video.mp4" type="video/mp4" />
  您的浏览器不支持视频元素。
</video>
```

### 11. `<source>`

- **用途**：为 `<audio>` 或 `<video>` 提供多个媒体源，浏览器选择支持的格式。
- **属性**：`src`（资源路径）、`type`（MIME 类型）。
- **示例**：

```html
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
</video>
```

### 12. `<track>`

- **用途**：为 `<video>` 或 `<audio>` 添加字幕、描述等外部文本轨道。
- **属性**：`kind`（类型，如 subtitles）、`src`（字幕文件）、`srclang`（语言）。
- **示例**：

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English" />
</video>
```

## 新增表单元素

### 13. `<datalist>`

- **用途**：为 `<input>` 提供预定义选项的自动完成列表。
- **示例**：

```html
<input list="colors" name="color" />
<datalist id="colors">
  <option value="Red"></option>
  <option value="Blue"></option>
  <option value="Green"></option>
</datalist>
```

### 14. `<output>`

- **用途**：显示计算或用户操作的结果。
- **示例**：

```html
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0" /> +
  <input type="number" id="b" value="0" /> =
  <output name="result" for="a b"></output>
</form>
```

### 15. `<progress>`

- **用途**：表示任务进度，如下载或表单提交。
- **属性**：`value`（当前值）、`max`（最大值）。
- **示例**：

```html
<progress value="70" max="100">70%</progress>
```

### 16. `<meter>`

- **用途**：表示一个范围内的测量值，如磁盘使用率。
- **属性**：`value`、`min`、`max`、`low`、`high`、`optimum`。
- **示例**：

```html
<meter value="0.6" min="0" max="1">60%</meter>
```

## 新增交互与绘图元素

### 17. `<canvas>`

- **用途**：通过 JavaScript 绘制 2D 图形或动画。
- **示例**：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.fillRect(10, 10, 50, 50);
</script>
```

### 18. `<details>` 和 `<summary>`

- **用途**：
  - `<details>`：创建可展开/折叠的内容区域。
  - `<summary>`：定义其可见标题。
- **示例**：

```html
<details>
  <summary>点击展开</summary>
  <p>这是隐藏内容。</p>
</details>
```

### 19. `<dialog>`

- **用途**：创建对话框或模态窗口。
- **属性**：`open`（显示对话框）。
- **示例**：

```html
<dialog id="myDialog">
  <p>这是一个对话框</p>
  <button onclick="myDialog.close()">关闭</button>
</dialog>
<script>
  document.getElementById("myDialog").showModal();
</script>
```

## 其他新增元素

### 20. `<time>`

- **用途**：表示时间或日期，具有语义化。
- **属性**：`datetime`（机器可读格式）。
- **示例**：

```html
<time datetime="2025-03-03">2025年3月3日</time>
```

### 21. `<mark>`

- **用途**：高亮显示文本，用于强调或标记。
- **示例**：

```html
<p>这是 <mark>重要</mark> 内容。</p>
```

### 22. `<ruby>`、`<rt>` 和 `<rp>`

- **用途**：
  - `<ruby>`：表示带注释的文本（如汉字拼音）。
  - `<rt>`：提供注释内容。
  - `<rp>`：在不支持 ruby 的浏览器中显示括号。
- **示例**：

```html
<ruby>
  汉 <rt>hàn</rt> 字 <rt>zì</rt> <rp>(</rp><rt>Chinese characters</rt><rp>)</rp>
</ruby>
```

## 应用场景

### 1. 语义化布局

```html
<header>
  <nav>导航</nav>
</header>
<main>
  <article>文章</article>
  <aside>侧边栏</aside>
</main>
<footer>页脚</footer>
```

### 2. 多媒体播放

```html
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track kind="subtitles" src="subs.vtt" srclang="en" />
</video>
```

### 3. 表单增强

```html
<input type="email" list="emails" />
<datalist id="emails">
  <option value="user@example.com"></option>
</datalist>

<progress value="50" max="100"></progress>
```

## 总结

HTML5 新增了大量元素，分为以下类别：

- **结构元素**：`<header>`、`<footer>`、`<article>` 等，提升语义化。
- **多媒体元素**：`<audio>`、`<video>`、`<source>` 等，支持原生播放。
- **表单元素**：`<datalist>`、`<output>`、`<progress>` 等，增强交互。
- **交互与绘图**：`<canvas>`、`<details>`、`<dialog>` 等，丰富功能。

以下是部分新增元素总结：

| 元素         | 用途     | 示例                                         |
| ------------ | -------- | -------------------------------------------- |
| `<header>`   | 头部区域 | `<header><h1>标题</h1></header>`             |
| `<video>`    | 视频播放 | `<video src="vid.mp4"></video>`              |
| `<canvas>`   | 绘图区域 | `<canvas id="canvas"></canvas>`              |
| `<datalist>` | 输入建议 | `<input list="data">`                        |
| `<details>`  | 折叠内容 | `<details><summary>标题</summary></details>` |

这些元素使 HTML5 更适应现代 Web 开发需求。
