# bee-theme 主题

## 主题示例

::: demo

```vue
<template>
<BeeThemeDemo />
</template>

```

:::

## 主题代码

```vue
<template>
    <h2 :style="`color: ${color}`">{{ color }}</h2>
    <h2 :style="`color: ${transparency}`">{{ transparency }}</h2>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import beeTheme from 'beeboat-ui/es/bee-theme'
import { TinyColor } from '@ctrl/tinycolor'

console.log(beeTheme.getBtTheme())

beeTheme.start({
    color: {
        primary: '#ffffff',
    },
})

const transparency = ref('')
const color = '#5c84f2'

let color1 = new TinyColor(color)
let color2 = new TinyColor('#ffffff')

transparency.value = color1.mix(color2, 85).toHexString() // #808080
</script>


```

## bee-theme API

### 方法

| 方法名    |   <div style="width:80px">说明</div>     |  类型    | 可选值                                             | 默认值  |
| ------- | --------  | -------  | -------------------------------------------------- | ------- |
| start    | 初始化   | function  |         是                      | 80 |
| switchTheme    | 切换主题   | function  | 是  | 40 |
| getBtTheme    | 获取所有主题   | function  | 是  | 26 |
