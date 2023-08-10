<template>
  <section class="mobile">
    <div class="input-basic">
      <hx-input
        v-model="value"
        placeholder="暗提示"
      >
      </hx-input>
    </div>
  </section>
</template>

<script setup>

import { ref } from "vue";
const value = ref("");
</script>
