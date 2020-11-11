<template>
  <div class="tar-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TarBarComponent",
}
</script>

<style scoped>

.tar-bar {
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  align-items: center;
  font-size: 12px;
  background-color: #f2f2f2;
}


</style>
