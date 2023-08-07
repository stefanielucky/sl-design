<script lang="ts">
export default {
  name: 'InputItemDemo',
  title: '错误提示',
  titleEnUS: 'Input with error message',
}
</script>

<script setup lang="ts">
import { Field } from "mand-mobile-next";
import { HXInput } from "../../../package/index";
import { ref } from 'vue'

const val = ref('1999999999999')
</script>

<template>
  <div
    class="md-example-child md-example-child-input-item-5"
  >
    <Field>
      <HXInput
        v-model="val"
        type="phone"
        title="手机号码"
        error="手机号码无效"
        clearable
      ></HXInput>
    </Field>
  </div>
</template>