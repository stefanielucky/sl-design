<template>
  <div class="mobile-demo-single">
    <div class="header">{{ props.list.title }}</div>
    <div v-for="(item, index) in props.list.data" :key="index">
      <span class="title">{{ item.title }}</span>
      <div class="component-box">
        <component :is="item.component"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps(['list'])
</script>

<style lang="scss" scoped>
.mobile-demo-single{
  width: 750px;
  height: 1440px;
  transform: scale(0.5);
  background-color: #f6f6f7;
  border-radius: 36px;
  position: fixed;
  right: -100px;
  top: -260px;

  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  .header{
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 48px;
    background-color: #fff;
  }

  .component-box{
    margin: 0 30px;
    padding: 0 30px;
    border-radius: 16px;
    background-color: #fff;
  }

  .title{
    font-size: 34px;
    line-height: 2;
    color:#969799;
    margin: 0 30px;
  }
}

.mobile-demo-single::-webkit-scrollbar {
  display: none;
}


</style>