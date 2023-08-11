<template>
  <div>
    <div class="field-box">
      <Field>
        <HXInput type="bankCard" v-model="cardNum" code="1001">
          <template #right>
            <Icon name="id-card" size="lg"></Icon>
          </template>
        </HXInput>
        <HXInput
          title="手机号覆盖例子"
          type="phone"
          v-model="phone"
          placeholder="phone xxx xxxx xxxx"
          ref="phoneNumerRef"
          code="1002"
          @blur="checkPhoneNum"
          clearable
        ></HXInput>
        <HXInput
          title="金额"
          type="money"
          v-model="money"
          @keydown="onInputKeydown"
          @change="onInputChange"
          placeholder="money xx, xxx.xxxx"
        ></HXInput>
        <HXInput
          title="密码"
          type="password"
          v-model="password"
          placeholder="password *********"
        >
          <template #right>
            <Icon name="invisible" size="lg"></Icon>
          </template>
        </HXInput>
      </Field>
    </div>
    <!-- <button @click="clearInput">点击获取节点</button> -->
  </div>
</template>


<script setup>
import { Field, Icon } from "mand-mobile-next";
import { HXInput } from "../../package/index.js";
import { ref } from "vue";

// 校验方法
const phoneNumerRef = ref("");

const money = ref('')
const phone = ref("15500000000")
const cardNum = ref('')
const password = ref('')

const checkPhoneNum = () => {
  if (phone) {
    console.log("直接校验方式");
  }
};

const clearInput = () => {
  console.log(phoneNumerRef.value)
};


const onInputKeydown = (name, event) => {
  console.log(`[Mand Mobile InputItem keydown] ${event}`);
}

const onInputChange = (name, value) => {
  console.log(`[Mand Mobile InputItem change] ${value}`);
}
</script>

<style lang="scss" scoped>
.field-box {
  transform: scale(0.5);
}
</style>
