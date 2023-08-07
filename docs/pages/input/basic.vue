<template>
  <section class="mobile">
    <div class="input-basic">
      <HXInput
        title="标题"
        v-model="value"
        placeholder="暗提示"
      >
      </HXInput>
    </div>
  </section>
</template>

<script setup>
// TODO 直接引入，非从package引入
import { HXInput } from "../../../package/index";
import { ref } from "vue";
const value = ref("");
</script>
