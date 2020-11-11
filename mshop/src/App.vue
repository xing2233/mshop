<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <MainTarBar></MainTarBar>
    </div>
  </div>
</template>

<script>
  import Home from '@/views/home/Home.vue'
  import MainTarBar from "@/components/content/MainTarBar";
  export default {
    name:'App',
    components:{
      Home,
      MainTarBar
    }
  }
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
