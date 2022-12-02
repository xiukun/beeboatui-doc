<template>
    <h2 :style="`color: ${color}`">{{ color }}</h2>
    <h2 :style="`color: ${transparency}`">{{ transparency }}</h2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import beeTheme from 'beeboat-ui/es/bee-theme'
import { TinyColor } from '@ctrl/tinycolor'

console.log(beeTheme.getBtTheme())

beeTheme.start()

const transparency = ref('')
const color = '#5c84f2'

let color1 = new TinyColor(color)
let color2 = new TinyColor('#ffffff')

transparency.value = color1.mix(color2, 85).toHexString() // #808080
</script>
