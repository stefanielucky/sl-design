<template>
  <section class="mobile">
    <div class="input-basic">
      <HXInput title="标题" v-model="value" placeholder="暗提示">
        <template #right>
          <Icon name="spinner" size="lg" svg></Icon>
        </template>
      </HXInput>
    </div>
  </section>
</template>

<script setup>
import { HXInput } from "../../../package/index";
import { Icon } from "mand-mobile-next";
import { ref } from "vue";
const value = ref("示例文字");
</script>
