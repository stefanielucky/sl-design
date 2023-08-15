<template>
  <div class="hxInput">
    <InputItem
      v-bind="attrs"
    >
      <template v-for="k in Object.keys(slots)" #[k] :key="k">
        <slot v-if="k == 'abc'" :name="k">
            <div>abc</div>
        </slot>
        <slot v-else :name="k"></slot>
      </template>
    </InputItem>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { InputItem } from "mand-mobile-next";
import { useAttrs, useSlots, ref } from "vue";

const attrs = useAttrs();
const slots = useSlots();
</script>

<style scoped lang="scss">
@import "./hx-input.scss";
</style>