<template>
  <div class="SLInput">
    <Button
      v-bind="attrs"
    >
      <template v-for="k in Object.keys(slots)" #[k] :key="k">
        <slot :name="k"></slot>
      </template>
    </Button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { Button } from "mand-mobile-next";
import { useAttrs, useSlots, ref } from "vue";

const attrs = useAttrs();
const slots = useSlots();

</script>

<style scoped lang="scss">
@import "./sl-button.scss";
</style>