# Label 文本展示

用于展示Label文本内容。

:::demo

```vue
<template>
    <bt-label text="hello world" :mark="true" :code="true" 
    :delete-line="true" :underline="true" :strong="true" />
    &nbsp;
    <bt-label text="hello world too" :mark="false" :code="false"
    :delete-line="false" :underline="false" :strong="false" />
</template>
```

:::

## Label API

### 属性

| 属性名    |   <div style="width:80px">说明</div>     |  类型    | 可选值                                             | 默认值  |
| ------- | --------  | -------  | -------------------------------------------------- | ------- |
| text    | 内容   | string  |         必填                      | - |
| mark    | 标记   | boolean/number  | 是  |  |
| code    | 代码   | boolean/number  | 是  |  |
| deleteLine    | 删除线   | boolean/number  | 是  |  |
| underline    | 下划线   | boolean/number  | 是  |  |
| strong    | 是否加粗   | boolean/number  | 是  |  |
