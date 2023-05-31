# vue3 源码

## 第二章

### 声明式和命令式

首先一个结论：  
命令式编程的性能 > 声明式编程的性能  
命令式编程的可维护性 < 声明式编程的可维护性

命令式编程关注过程，比如给一个 div 设置新的文本

```js
const divEle = document.querySelector('#app');
divEle.innerText = 'hello world';
```

命令式编程关注结果，比如给一个 div 设置新的文本

```html
<div id="app">{{ msg }}</div>
```

::: tip
vue 很明显是一个声明式的框架，但是为啥命令式编程性能更高不适用命令式呢？  
原因就是因为声明式编程可维护性更好，开发者的心智负担也更小。  
vue 使用声明式编程的方式的同时尽可能的提高性能，这也是 vue 的取舍  
但是声明式编程底层调用的也是命令式的编程，只是框架帮我们完成了命令式的过程，我们只需要关注声明式的结果  
封装了命令式的过程，输出了声明式的接口

总结：  
框架的设计过程其实是一个不断在 **可维护性和性能** 之间的取舍的过程
:::

### 运势时 + 编译时

::: tip 运行时

```js
// 纯运行时，使用render函数渲染出dom
const container = document.querySelector('#app');
const { render, h } = Vue;
const vnode = h(
  'div',
  {
    class: 'text'
  },
  'hello render'
);

render(vnode, container);
```

:::

::: tip 运行时+编译时

```js
const { compile, createApp } = Vue;

// 通过compile编译将dom编译成一个render函数
const renderFn = compile(`<div>hello compile</div>`);

const app = createApp({
  render: renderFn
});

app.mount('#app');
```

:::

**vue 是一个运行时+编译时的混合系统**  
[vue 的响应性基本上是基于运行时](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html#runtime-vs-compile-time-reactivity)
