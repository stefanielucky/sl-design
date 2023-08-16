---
prev: false
next: false
---

<script setup>
  import basic from './demo/basic.vue'
  import disabled from './demo/disabled.vue'
  import loading from './demo/loading.vue'
  import error from './demo/error.vue'
  import right from './demo/right.vue'
  import noTitle from './demo/noTitle.vue'
  import icons from './demo/icons.vue'

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