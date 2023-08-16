---
aside: false
prev: false
next: false
---

<div class="mobile-model">
  <iframe
    class="model-iframe"
    src="/pages/input/input-demo"
  >
  </iframe>
</div>

# input

### 基础用法

<<< @/pages/input/demo/basic.vue

### 禁用状态

<<< @/pages/input/demo/disabled.vue

### 加载状态

<<< @/pages/input/demo/loading.vue

### 错误状态

<<< @/pages/input/demo/error.vue

### 右侧输入

<<< @/pages/input/demo/right.vue

### 无标题

<<< @/pages/input/demo/noTitle.vue

### 带图标

<<< @/pages/input/demo/icons.vue

# API

## inputItem Props

| 属性         | 说明                             | 类型   | 默认值 | 备注                                                                                                                                                  |
| ------------ | -------------------------------- | ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | 表单类型，特殊类型自带文本格式化 | String | text   | text(文本),bankCard(银行卡号),phone(手机号),money(金额),digit(数字),password(密码),以及其他的标准 Html Input 类型                                     |
| preview-type | 表单预览类型                     | String | -      | 一般用于初始化时的特殊表单值（如带掩码的身份证号，手机号）预览，第一次触发编辑操作如点击退格键及其他字符键点击时，先清空预填值并将表单类型切换至 type |
