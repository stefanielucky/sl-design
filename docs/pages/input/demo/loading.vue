<template>
  <section class="mobile">
    <div class="input-basic">
      <hx-input title="标题" v-model="value" placeholder="暗提示">
        <template #right>
          <Icon name="spinner" size="lg" svg></Icon>
        </template>
      </hx-input>
    </div>
  </section>
</template>

<script setup>

import { Icon } from "mand-mobile-next";
import { ref } from "vue";
const value = ref("示例文字");
</script>
