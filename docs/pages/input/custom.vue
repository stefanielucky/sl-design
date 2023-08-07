<template>
  <Field>
    <HXInput
      v-model="val"
      title="文本"
      :is-virtual-keyboard="true"
      placeholder="请输入文本"
    />
    <HXInput
      v-model="val"
      title="手机号"
      type="phone"
      placeholder="请输入手机号"
      :maxlength="11"
    />
    <HXInput
      v-model="val"
      title="银行卡"
      type="bankCard"
      placeholder="请输入银行卡"
      :maxlength="13"
    >
      <template #right>
        <Icon name="id-card" size="lg"></Icon>
      </template>
    </HXInput>

    <HXInput title="密码" type="password" placeholder="请输入密码">
      <template #right>
        <Icon name="invisible" size="lg"></Icon>
      </template>
    </HXInput>
    <HXInput
      v-model="val"
      title="金额"
      type="money"
      placeholder="请输入金额"
      :maxlength="13"
    />
    <HXInput title="日期" placeholder="请输入日期">
      <template #right>
        <Icon name="arrow-right" size="lg"></Icon>
      </template>
    </HXInput>
  </Field>
</template>

<script setup>
import { Field, Icon } from "mand-mobile-next";
import { HXInput } from "../../../package/index";
import { ref } from "vue";

const val = ref("");
</script>
