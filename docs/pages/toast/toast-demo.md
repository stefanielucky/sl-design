---
prev: false
next: false
---

<script setup>
  import basicToast from './demo/basic.vue'

  import { reactive, markRaw } from 'vue'

  const list = reactive({
    title: 'Input',
    data: [
      {
        title: '基础用法',
        component: markRaw(basicToast),
      }
    ]
  })

</script>

<MobileDemoSingle :list="list" />