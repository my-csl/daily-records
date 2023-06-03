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

## 第三章

### 正确阅读源码的姿势

- **摒弃边界条件。** 在大型框架中，都会有很多边界条件判断，以适应不同环境下框架的正确运行，但是我们阅读源码的时候是可以不用去考虑这些的
- **保持一条主线。** 大型框架的源码都是很复杂的，没必要全部从头看到尾，这样容易陷入逻辑的泥沼。我们应该关心一个功能点为主，在 debugger 的时候无意义的条件判断直接略过，看最后的 return 结果

## 第四章：响应式系统

### JS 的程序性

js 本身就具备程序性，所谓程序性就是：一套固定的，不会发生变化的流程

```js
const product = {
  price: 10,
  quantity: 2
};
let total = product.price * product.quantity;
console.log(`total: ${total}`); // 20

product.quantity = 5;
console.log(`total: ${total}`); // 20
```

### Proxy 和 Reflect

::: warning
使用 Proxy 的时候需要配合上 Reflect 会更安全，如果被代理对象内部通过 this 调用触发了 setter 和 getter，如果我们不使用 Reflect 绑定代理对象的 this  
那被代理对象内部的的修改就监听不到了
:::
