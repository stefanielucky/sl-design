---
aside: false
prev: false
next: false
---

# input

### 基础用法

<<< @/pages/input/basic.vue

### 禁用状态

<<< @/pages/input/disabled.vue

### 加载状态

<<< @/pages/input/loading.vue

### 错误状态

<<< @/pages/input/error.vue

### 右侧输入

<<< @/pages/input/right.vue

### 无标题

<<< @/pages/input/noTitle.vue

### 带图标

<<< @/pages/input/icons.vue

# API

## inputItem Props

| 属性         | 说明                             | 类型   | 默认值 | 备注                                                                                                                                                  |
| ------------ | -------------------------------- | ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | 表单类型，特殊类型自带文本格式化 | String | text   | text(文本),bankCard(银行卡号),phone(手机号),money(金额),digit(数字),password(密码),以及其他的标准 Html Input 类型                                     |
| preview-type | 表单预览类型                     | String | -      | 一般用于初始化时的特殊表单值（如带掩码的身份证号，手机号）预览，第一次触发编辑操作如点击退格键及其他字符键点击时，先清空预填值并将表单类型切换至 type |

<script setup>
  import basic from './input/basic.vue'
  import disabled from './input/disabled.vue'
  import loading from './input/loading.vue'
  import error from './input/error.vue'
  import right from './input/right.vue'
  import noTitle from './input/noTitle.vue'
  import icons from './input/icons.vue'

  import { reactive, markRaw } from 'vue'

  const list = reactive({
    title: 'Input',
    data: [
      {
        title: '基础用法',
        component: markRaw(basic),
      },
      {
        title: '禁用状态',
        component: markRaw(disabled),
      },
      {
        title: '加载状态',
        component: markRaw(loading),
      },
      {
        title: '错误状态',
        component: markRaw(error),
      },
      {
        title: '右侧输入',
        component: markRaw(right),
      },
      {
        title: '无标题',
        component: markRaw(noTitle),
      },
      {
        title: '带图标',
        component: markRaw(icons),
      }
    ]
  })

</script>

<MobileDemoSingle :list="list" />
