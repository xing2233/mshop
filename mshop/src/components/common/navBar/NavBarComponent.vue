<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBarComponent",
    props: {}
  }
</script>

<style scoped>
  .nav {
    display: flex;

  }

  .left, .right {
    width: 50px;
  }

  .center {
    flex: 1;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
</style>