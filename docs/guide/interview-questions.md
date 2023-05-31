# 面试题

## JavaScript

### 遍历数组的办法

1. 传统的 for 循环
2. for of 循环
3. 一些数组的高阶函数：forEach、map、some、every、find、findIndex、indexOf、lastIndexOf、filter、reduce、includes

### 数组乱序的实现

```js
const arr = [1, 2, 3, 4, 5, 6];

/**
 * 这种方法利用set集合不重复的特性，将数组下标都通过随机生成出来
 * 最后通过map方法将下标转换回数组数据
 * 但是，这种方法效率较低，不确定性高，因为不知道收集完所有的下标需要遍历几次
 * 数组数据越多需要遍历的次数越多
 */
function arrayDisorder(arr) {
  const set = new Set();
  const len = arr.length;
  while (true) {
    const index = Math.floor(Math.random() * len);
    if (set.size < len) {
      set.add(index);
    } else {
      break;
    }
  }
  const newArr = [...set].map((index) => arr[index]);
  return newArr;
}

/**
 * 这种方法只需要遍历一次数组即可完成乱序
 * 在每次循环的时候都生成一个随机的下标
 * 然后将当前遍历进行中的数据和这个随机下标的数据进行位置替换
 * 这样保证了每个元素至少进行了一次位置交换，但是可能存在前面交换以后后面被交换回来的问题
 * 不过这个概率是很低的，数据量越大出现这种概率就越低
 */
function arrayDisorder2(arr) {
  // 防止污染原数组，函数传值是值传递，修改arr不会影响调用时外层传递进来的arr
  arr = [...arr];
  const len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(Math.random() * len);
    // const randomItem = arr[index];
    // arr[index] = arr[i];
    // arr[i] = randomItem;

    // 使用解构赋值交换位置
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
  return arr;
}

// console.log(arrayDisorder(arr))
// console.log(arrayDisorder2(arr))
```

## CSS

### BFC

BFC 全称`Block Formatter Context`，翻译过来就是块级格式化上下文  
BFC 可以理解为是一个独立的渲染容器，内部的样式布局不会影响外部元素，可以通过 css 属性触发 BFC 效果

**触发 BFC**

1. body 本身就是一个 BFC
2. float 不为`none`
3. 通过定位触发，position 为`absoluter` 或者 `fixed `
4. overflow 不为 `visible`
5. display 为`table`,`flex`,`inline-block`,`grid`等很多 display 的属性都可以触发 BFC 效果

**BCF 主要的作用有：**

1. 防止上下边距重叠，在一个 BFC 中，正常的元素上下边距是会和别的元素重叠的，要想去除重叠效果，可以给重叠的两个元素添加一个父元素，然后给父元素设置 overflow：hidden；触发 BFC 以后两个元素的外边距就会重合了
2. 清除浮动，BFC 中计算高度的时候是会计算浮动元素的高度的，防止了浮动元素造成的高度塌陷（清除浮动）
3. 设置一列固定一列自适应的双列布局。在正常的文档流中，设置浮动的元素会遮挡普通的元素，但是在 BFC 中，浮动元素不会遮盖别的元素，所以一列设置浮动，一列通过触发 BFC 实现双列布局

## 性能优化

### 前端性能优化

- 图片资源优化，包括图片压缩、base64加载小图
- 资源预加载（preload），预渲染（prerender）
- 代码懒懒执行，懒加载
- CDN优化

### webpack优化

- 代码压缩，包裹打包出来的文件进行gzip压缩
- 路由懒加载
- 开启多线程，thred- loader
- 开启缓存，babel缓存、cache- loader
- 合理设置loader的范围，included，excluded
- 合理设置匹配的文件后缀名
- alias文件别名，加快文件查找速度
- 第三方包使用CND的方式加载
- 抽离出第三方包，只构建一次，DLL Plugin
- 代码预加载
- 合理的代码分割，防止vendor文件过大
- 第三方库按需加载，利用ES6的 Tree Shaking
- 合理利用浏览器缓存，文件哈希名称只会在文件修改以后改变，强缓存和协商缓存
- 使用 可视化插件，定位问题
