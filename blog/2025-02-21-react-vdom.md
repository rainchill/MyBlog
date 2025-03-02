---
slug: react-vdom
authors: [rainchill]
tags: [JavaScript]
---

# 虚拟 DOM 更新机制

阅读[react 中文官网](https://zh-hans.react.dev/learn/reacting-to-input-with-state)的挑战部分的最后一句话不是很理解，如下。

<!-- truncate -->

:::note

请记住，如果两个不同的 JSX 代码块描述着相同的树结构，它们的嵌套（第一个 `<div>` → 第一个 `<img>`）必须对齐。否则切换 `isActive` 会再次在后面创建整个树结构并且 [重置 state](https://zh-hans.react.dev/learn/preserving-and-resetting-state)。这也就是为什么当一个相似的 JSX 树结构在两个情况下都返回的时候，最好将它们写成一个单独的 JSX。

:::

于是上网查阅资料得到解惑。如下。

这句话是在讨论 React 的 JSX 渲染机制，特别是当组件在不同状态下渲染相似的 JSX 结构时，如何避免不必要的重新渲染和状态重置的问题。

为了更好地理解这句话，我们需要关注两个关键点：

1. **React 的渲染机制** ：React 通过虚拟 DOM（Virtual DOM）来优化真实 DOM 的操作。当组件的状态或属性发生变化时，React 会比较新旧虚拟 DOM 的差异（diffing），并只更新真实 DOM 中发生变化的部分。
2. **JSX 结构的对齐** ：如果两个 JSX 结构非常相似，但嵌套关系或元素的顺序不同，React 会认为这是一个全新的结构，从而重新创建整个树结构，而不是复用现有的 DOM 元素。

---

### **具体解释**

假设有一个组件，它的渲染逻辑如下：

```javascript
function MyComponent({ isActive }) {
  if (isActive) {
    return (
      <div>
        <img src="image1.jpg" alt="Image 1" />
        <p>Active State</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Inactive State</p>
        <img src="image2.jpg" alt="Image 2" />
      </div>
    );
  }
}
```

在这个例子中：

- 当 `isActive` 为 `true` 时，`<img>` 是第一个子元素。
- 当 `isActive` 为 `false` 时，`<img>` 是第二个子元素。

尽管这两个 JSX 结构看起来很相似，但它们的嵌套关系不同。React 会认为这是一个全新的结构，而不是对现有结构的简单更新。因此，React 会重新创建整个 `<div>` 的内容，而不是复用现有的 DOM 元素。

这种重新创建会导致：

1. 性能问题：React 需要重新构建和渲染整个树结构。
2. 状态丢失：如果 `<img>` 或其他元素有内部状态（例如，一个 `<input>` 的值），这些状态会丢失，因为 React 会重新创建这些元素。

---

### **解决方案**

为了避免这种情况，建议将相似的 JSX 结构写成一个单独的 JSX，确保嵌套关系一致。例如：

```javascript
function MyComponent({ isActive }) {
  return (
    <div>
      {isActive ? (
        <img src="image1.jpg" alt="Image 1" />
      ) : (
        <img src="image2.jpg" alt="Image 2" />
      )}
      <p>{isActive ? "Active State" : "Inactive State"}</p>
    </div>
  );
}
```

在这个改进后的版本中：

- `<div>` 的嵌套结构始终保持一致。
- 不同状态下的 `<img>` 和 `<p>` 的顺序没有改变。
- React 可以复用现有的 DOM 元素，而不是重新创建整个树结构。

---

### **总结**

这句话的意思是：

- 如果两个 JSX 结构描述的是相同的树结构（例如，嵌套关系和元素类型相似），但嵌套顺序不同，React 会认为这是一个全新的结构。
- 这会导致 React 重新创建整个树结构，而不是复用现有的 DOM 元素，从而导致性能问题和状态丢失。
- 为了避免这种情况，最好将相似的 JSX 结构写成一个单独的 JSX，确保嵌套关系一致。

通过这种方式，React 可以更高效地更新 DOM，并保留现有元素的状态。
