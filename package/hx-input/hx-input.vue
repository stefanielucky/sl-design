<template>
  <div class="hxInput">
    <InputItem
      v-bind="attrs"
      ref="hxInputRef"
      :title="title"
      :placeholder="placeholder"
      @blur="codeCheck"
      :error="error"
    >
      <template v-for="k in Object.keys(slots)" #[k] :key="k">
        <slot :name="k"></slot>
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
import codeInfo from "../../public/code.json";

const attrs = useAttrs();
const slots = useSlots();

// 处理label和placeholder
const codeList = codeInfo.data.map((item) => item.code);
const index = attrs.code ? codeList.indexOf(attrs.code) : -1;
const title = index > -1 ? codeInfo.data[index].label : attrs.title;
const placeholder =
  index > -1 ? codeInfo.data[index].placeholder : attrs.placeholder;

// 处理校验
const error = index > -1 ? ref("") : attrs.error;
function codeCheck() {
  if (index === -1) {
    return;
  }
  const regexp = new RegExp(eval(codeInfo.data[index].validate))
  if (regexp.test(attrs.modelValue)) {
    return error.value = '';
  } else {
    error.value = codeInfo.data[index].error;
  }
}

const hxInputRef = ref(null);
defineExpose({
  hxInputRef,
});
</script>

<style scoped lang="scss">
.hxInput {
  // :deep(.md-field-item-title) {
  //   color: blueviolet;
  // }

  // :deep(.md-input-item-input) {
  //   color: var(--md-input-item-color);
  //   line-height: 0.5;
  // }
}
</style>