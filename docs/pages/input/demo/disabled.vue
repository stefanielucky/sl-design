<template>
  <section class="mobile">
    <div class="input-basic">
      <hx-input
        title="标题"
        v-model="value"
        placeholder="暗提示"
        disabled
      >
      </hx-input>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
