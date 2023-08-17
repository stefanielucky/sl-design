<template>
  <div class="toast-basic">
    <Button @click="showTextToast">点击展示</Button>
  </div>
</template>

<script setup>
import {Toast, Button} from 'mand-mobile-next'

const showTextToast = () => {
  Toast.info('一段文字')
  setTimeout(() => {
    Toast.hide()
  }, 1500)
}
</script>

<style lang="scss" scoped>
.toast-basic{
  padding: 20px 0;
}
</style>
