# Captcha 验证码展示

## 用于展示验证码

::: demo

```vue
<template>
    <bt-captcha v-model="captchaValue" />
            结果：{{ captchaValue }}
</template>
<script setup lang="ts">
import { ref } from 'vue'
const captchaValue = ref('')
</script>

```

:::

## Captcha API

### 属性

| 属性名    |   <div style="width:80px">说明</div>     |  类型    | 可选值                                             | 默认值  |
| ------- | --------  | -------  | -------------------------------------------------- | ------- |
| width    | 宽度   | string  |         是                      | 80 |
| height    | 高度   | string  | 是  | 40 |
| size    | 字体大小   | string  | 是  | 26 |
| backEffects    | 背景特效   | string  | 是  | true |
