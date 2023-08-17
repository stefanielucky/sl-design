<template>
  <div
    class="button-inline"
  >
    <div class="md-example-section">
      <sl-button type="primary" icon="edit" inline
        >Inline Primary</sl-button
      >
      <sl-button type="primary" inline plain
        >Inline Plain</sl-button
      >
    </div>
    <div class="md-example-section">
      <sl-button type="warning" size="small" inline
        >Warning</sl-button
      >
      <sl-button type="disabled" size="small" inline
        >Disabled</sl-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-inline{
  padding: 20px 0;
}
.SLInput{
  margin: 20px 0;
}
</style>