---
aside: false
prev: false
next: false
---

<div class="mobile-model">
  <iframe
    class="model-iframe"
    src="/pages/button/button-demo"
  >
  </iframe>
</div>

### 填充按钮

<<< @/pages/button/demo/basic.vue

### 描边按钮

<<< @/pages/button/demo/line.vue

### 圆角按钮

<<< @/pages/button/demo/round.vue

### 行内按钮

<<< @/pages/button/demo/inline.vue

### 文字链接按钮

<<< @/pages/button/demo/link.vue



## API

### Button Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------ |------|
|type|样式|String|"default"|"default", "primary", "warning", "disabled", "link"|
|native-type|类型|String|"button"|-|
|size|尺寸|String|"large"|"large/small"|
|plain|朴素|Boolean|"false"|-|
|round|圆角|Boolean|"false"|-|
|inline|行内|Boolean|"false"|-|
|inactive|未激活|Boolean|"false"|"inactive"设为"true"和"disabled"类型的按钮都无法点击，前者一般用于表单校验无效等主观因素，后者用于无权限或无库存等客观因素|
|icon|图标|String|-|可选值请参考组件"Icon"|
|icon-svg SLDesign|使用svg图标|Boolean|"false"|-|
|loading SLDesign|加载中状态|Boolean\/String|"false"|"roller"（等同于true），"spinner"，"carousel"|
|loading-color SLDesign|加载中图标颜色|String|"false"|-|