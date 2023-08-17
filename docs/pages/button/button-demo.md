---
prev: false
next: false
---

<script setup>
  import basic from './demo/basic.vue'
  import line from './demo/line.vue'
  import round from './demo/round.vue'
  import inline from './demo/inline.vue'
  import link from './demo/link.vue'

  import { reactive, markRaw } from 'vue'

  const list = reactive({
    title: 'Input',
    data: [
      {
        title: '填充按钮',
        component: markRaw(basic),
      },
      {
        title: '描边按钮',
        component: markRaw(line),
      },
      {
        title: '圆角按钮',
        component: markRaw(round),
      },
      {
        title: '行内按钮',
        component: markRaw(inline),
      },
      {
        title: '文字链接按钮',
        component: markRaw(link),
      }
    ]
  })

</script>

<MobileDemoSingle :list="list" />