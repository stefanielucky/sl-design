<template>
  <section class="mobile">
    <div class="input-basic">
      <hx-input
        title="标题"
        v-model="value1"
        placeholder="暗提示"
      >
      <template #left>
            <Icon name="id-card" size="lg"></Icon>
          </template>
      </hx-input>
      <hx-input
        title="标题"
        v-model="value2"
        placeholder="暗提示"
      >
      <template #right>
            <Icon name="id-card" size="lg"></Icon>
          </template>
      </hx-input>
    </div>
  </section>
</template>

<script setup>

import { Icon } from "mand-mobile-next";
import { ref } from "vue";
const value1 = ref("");
const value2 = ref("");
</script>
