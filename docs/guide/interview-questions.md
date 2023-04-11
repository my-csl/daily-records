# 面试题

## CSS

### BFC

BFC 全称`Block Formatter Context`，翻译过来就是块级格式化上下文  
BFC 可以理解为是一个独立的渲染容器，内部的样式布局不会影响外部元素，可以通过 css 属性触发 BFC 效果

**触发BFC**

1. body 本身就是一个 BFC
2. float不为`none`
3. 通过定位触发，position 为`absoluter` 或者 `fixed `
4. overflow 不为 `visible`
5. display 为`table`,`flex`,`inline-block`,`grid`等很多 display 的属性都可以触发 BFC 效果

**BCF主要的作用有：**

1. 防止上下边距重叠，在一个BFC中，正常的元素上下边距是会和别的元素重叠的，要想去除重叠效果，可以给重叠的两个元素添加一个父元素，然后给父元素设置overfloe：hidden；触发BFC以后两个元素的外边距就会重合了
2. 清除浮动，BFC中计算高度的时候是会计算浮动元素的高度的，防止了浮动元素造成的高度塌陷（清除浮动）
3. 设置一列固定一列自适应的双列布局。在正常的文档流中，设置浮动的元素会遮挡普通的元素，但是在BFC中，浮动元素不会遮盖别的元素，所以一列设置浮动，一列通过触发BFC实现双列布局
