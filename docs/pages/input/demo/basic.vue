<template>
  <section class="mobile">
    <div class="input-basic">
      <sl-input
        title="标题"
        v-model="value"
        placeholder="暗提示"
      >
      </sl-input>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
