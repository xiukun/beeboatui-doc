# SvgIcon Svg图标展示

## 用于展示Svg图标

::: warning
子应用引入`vite-plugin-svg-icons`包，展示项目`src/assets`目录下的svg图片

bt-svg-icon 组件引用的svg图片名字规则：icon-[dir]-[name]

组件中已经默认添加前缀`icon-`,如果引用的svg图标在asserts根目录下按照示例1使用

如果有多级子目录,svg在asserts/dir目录下按照示例2使用
:::

```vue
<template>
    <!-- 示例1 -->
    <bt-svg-icon name="add_icon" />
    <!-- 示例2 -->
    <bt-svg-icon name="dir-add_icon" />
</template>
```

## 其他属性 `svg-class` class样式类

```vue
<template>
    <bt-svg-icon name="add_icon" svg-class="autoClass" color="green" />
</template>
```

## SvgIcon API

### 属性

| 属性名    |   <div style="width:80px">说明</div>     |  类型    | 可选值                                             | 默认值  |
| ------- | --------  | -------  | -------------------------------------------------- | ------- |
| name    | svg名称   | string  |         必填                      | - |
| svgClass    | class   | string  | 是  |  |
| color    | 颜色   | string  | 是  |  |
