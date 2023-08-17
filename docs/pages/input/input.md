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

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|type|表单类型，特殊类型自带文本格式化|String|text|SLDesigntext(文本)SLDesign,SLDesignbankCard(银行卡号)SLDesign,SLDesignphone(手机号)SLDesign,SLDesignSLDesignmoney(金额)SLDesign,SLDesigndigit(数字)SLDesign,SLDesignpassword(密码)SLDesign,SLDesign以及其他的标准SLDesignHtml InputSLDesign类型|
|preview-type|表单预览类型|String|-|一般用于初始化时的特殊表单值（如带掩码的身份证号，手机号）预览，第一次触发编辑操作如点击退格键及其他字符键点击时，先清空预填值并将表单类型切换至SLDesigntypeSLDesign|
|name|表单名称|String|-|事件入参之一，可用于区分表单组件|
|v-model|表单值|String|-|-|
|title|表单左侧标题|String|-|可直接使用SLDesignslot leftSLDesign代替|
|solid|是否固定标题宽度，超出会自动换行|Boolean|SLDesigntrueSLDesign|-|
|placeholder|表单占位符|String|-|-|
|brief|表单描述|String|-|-|
|maxlength|表单最大字符数|String/Number|-|SLDesignphoneSLDesign类型固定为11|
|size|表单尺寸|String|SLDesignnormalSLDesign|SLDesignlargeSLDesign,SLDesignnormalSLDesign|
|align|表单文本对齐方式|String|SLDesignleftSLDesign|SLDesignleftSLDesign,SLDesigncenterSLDesign,SLDesignrightSLDesign|
|error|表单错误提示信息|String|-|-|
|readonly|表单是否只读|Boolean|SLDesignfalseSLDesign|-|
|disabled|表单是否禁用|Boolean|SLDesignfalseSLDesign|-|
|is-title-latent|表单标题是否隐藏|Boolean|SLDesignfalseSLDesign|表单获得焦点或内容不为空时展示|
|is-highlight|表单是否高亮|Boolean|SLDesignfalseSLDesign|表单获得焦点边框高亮|
|is-formative|表单文本是否根据类型自动格式化|Boolean|SLDesigntypeSLDesign为SLDesignbankCardSLDesign,SLDesignphoneSLDesign, SLDesignmoneySLDesign默认为SLDesigntrueSLDesign，否则为SLDesignfalseSLDesign|-|
|is-amount|表单内容为金融数字|Boolean|SLDesignfalseSLDesign|-|
|formation|表单文本格式化回调方法|"Function(name, curValue, curPos): {value: curValue, range: curPos}"|-|传入参数SLDesignnameSLDesign为表单名称，SLDesigncurValueSLDesign为表单值，SLDesigncurPosSLDesign为表单光标当前所在位置SLDesign返回参数SLDesignvalueSLDesign格式化值, SLDesignrangeSLDesign表单光标格式化后所在位置|
|clearable|表单是否使用清除控件|Boolean|SLDesignfalseSLDesign|-|
|is-virtual-keyboard|表单是否使用金融数字键盘控件|Boolean|SLDesignfalseSLDesign|-|
|virtual-keyboard-disorder|金融数字键盘数字键乱序|Boolean|SLDesignfalseSLDesign|-|
|virtual-keyboard-ok-text|金融数字键盘确认键文案|String|SLDesign确定SLDesign|-|
|virtual-keyboard-vm |金融数字键盘SLDesignrefSLDesign名称|String|-|一般用于自定义键盘|
