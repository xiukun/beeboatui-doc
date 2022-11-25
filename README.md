# beeboatui-doc

基于 [Vitepress-Theme-Demoblock](https://github.com/xinlei3166/vitepress-theme-demoblock) 插件来实现vue组件的支持。

- [x] vue组件

```js
<demo-block>
  <bt-button>Default</bt-button>
    <bt-button type="secondary">secondary</bt-button>
    <bt-button type="secondary-plain">secondary-plain</bt-button>
    <bt-button type="danger">Danger</bt-button>
    <bt-button type="success">Success</bt-button>
    <bt-button type="info">Info</bt-button>
    <bt-button type="warning">Warning</bt-button>
    <bt-button type="danger">Danger</bt-button>
    <bt-button type="blank">blank</bt-button>
    <bt-button type="text">text</bt-button>
</demo-block>
```

![image-20210629113103980](https://cdn.nlark.com/yuque/0/2022/png/1029044/1669349832439-a5135016-ff49-44a9-95aa-9f75aa224a88.png)



- [x] vue代码自动渲染并且显示对应code（支持script和style）

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```vue
<template>
    <bt-button>Default</bt-button>
    <bt-button type="secondary">secondary</bt-button>
    <bt-button type="secondary-plain">secondary-plain</bt-button>
    <bt-button type="danger">Danger</bt-button>
    <bt-button type="success">Success</bt-button>
    <bt-button type="info">Info</bt-button>
    <bt-button type="warning">Warning</bt-button>
    <bt-button type="danger">Danger</bt-button>
    <bt-button type="blank">blank</bt-button>
    <bt-button type="text">text</bt-button>
</template>
```
:::


![image-20210629112953325](https://cdn.nlark.com/yuque/0/2022/png/1029044/1669349858720-a6a51783-e3ee-402c-a239-1efb10fdb31c.png)

