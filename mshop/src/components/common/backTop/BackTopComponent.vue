<template>
  <div >
    <img :style="imgStyle" src="@/assets/img/top.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTopComponent",
  props:{
    imgStyle:{
      required:true,
      type:[Object]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
