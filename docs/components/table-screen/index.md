# table-screen 搜索栏

搜索栏，列表页面的通用搜索栏，配合bt-table表格使用。

## 基础用法

基础的搜索栏用法，支持展开/折叠、查询、重置。

:::demo

```vue
<template>
    <div>
        <bt-table-screen
            :is-btn-show="true"
            @submit="onSubmit"
            @reset="onReset"
        >
            <bt-table-screen-item label="审批单号">
                <el-input
                    v-model="searchItem.order"
                    clearable
                    placeholder="请输入"
                />
            </bt-table-screen-item>
            <bt-table-screen-item label="审批人">
                <el-input
                    v-model="searchItem.name"
                    clearable
                    placeholder="请输入"
                />
            </bt-table-screen-item>
        </bt-table-screen>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// 搜索项
const searchItem = reactive({ 
    order: '123456',
    name: '张三' 
})
// 普通搜索
const onSubmit = (val = { data: [], type: 0 }) => {
    console.log(val, 'search submit..')
}
// 重置
const onReset = () => {
    Object.keys(searchItem).forEach(key => {
        searchItem[key] = undefined
    })
    onSubmit()
}
</script>

<style>
.ever-table-screen__item--content {
    width: 160px;
}
</style>

```

:::
