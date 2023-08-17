<template>
  <div
    class="button-basic"
  >
    <sl-button type="default">Default</sl-button>
    <sl-button type="default" inactive
      >Default Inactive</sl-button
    >
    <sl-button type="primary">Primary</sl-button>
    <sl-button type="primary" inactive
      >Primary Inactive</sl-button
    >
    <sl-button type="primary" loading>Loading</sl-button>
    <sl-button type="warning">Warning</sl-button>
    <sl-button type="warning" inactive
      >Warning Inactive</sl-button
    >
    <sl-button type="disabled">Disabled</sl-button>
  </div>
</template>

<style lang="scss" scoped>
.button-basic{
  padding: 20px 0;
}
.SLInput{
  margin: 20px 0;
}
</style>
