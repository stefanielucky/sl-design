<template>
  <section class="mobile">
    <div class="input-basic">
      <HXInput
        title="标题"
        v-model="value"
        placeholder="暗提示"
        disabled
      >
      </HXInput>
    </div>
  </section>
</template>

<script setup>
import { HXInput } from "../../../package/index";
import { ref } from "vue";
const value = ref("");
</script>
