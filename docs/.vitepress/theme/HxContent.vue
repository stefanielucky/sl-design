<template>
  <section class="main-box">
    <div class="content">
      <slot name="content-body"></slot>
    </div>
    <aside class="aside">
      <slot name="aside">
        <MobileDemo></MobileDemo>
      </slot>
    </aside>
  </section>
</template>

<script setup>
import MobileDemo from './MobileDemo.vue'
</script>

<style lang="scss">
.main-box{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  .content{
    background-color: #f2f3f5;
    min-height: 100px;
    flex-grow: 1;
  }

  .aside{
    width: 385px;
    min-height: calc(100vh - 200px);
    background-color: #f7f8fa;
    border-radius: 8px;
    flex-grow: 0;
  }
}
</style>

