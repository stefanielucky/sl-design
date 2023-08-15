<template>
  <div class="mobile-demo-single">
    
      <div class="header">{{ props.list.title }}</div>
      <div class="content">
        <div v-for="(item, index) in props.list.data" :key="index">
          <div class="item-box">
            <span class="title">{{ item.title }}</span>
            <div class="component-box">
              <component :is="item.component"></component>
            </div>
          </div>
        </div>
      </div>
   
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["list"]);
</script>

<style lang="scss" scoped>
.mobile-demo-single {
  width: 750px;
  position: relative;

  .header {
    z-index: 20;
    position: absolute;
    top: -150px;
    left: -285px;
    width: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 48px;
    background-color: #fff;
  }

  .content {
    z-index: 20;
    position: absolute;
    top: -50px;
    left: -285px;
    width: 100%;
    background-color: #f7f8fa;
    min-height: 1400px;
  }

  .component-box {
    margin: 0 30px;
    padding: 0 30px;
    border-radius: 16px;
    background-color: #fff;
  }

  .title {
    font-size: 34px;
    line-height: 2;
    color: #969799;
    margin: 0 30px;
  }
}
</style>
