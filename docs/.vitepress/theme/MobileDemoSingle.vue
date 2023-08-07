<template>
  <div class="mobile-demo-single">
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
    <h1>这是一个全局组件</h1>
  </div>
</template>

<script setup>
</script>

<style scoped>
.mobile-demo-single{
  width: 375px;
  height: calc(100vh - 150px);
  padding: 10px;
  background-color: #f6f6f7;
  border-radius: 16px;

  position: fixed;
  right: 40px;
  top: 100px;

  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.mobile-demo-single::-webkit-scrollbar {
  display: none;
}
</style>