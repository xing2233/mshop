<template>
  <div class="nav">
    <NavBar></NavBar>
  </div>
</template>

<script>
  import NavBar from '@/components/content/NavBar.vue'
  import homeService from '@/services/homeService.js'
  export default {
    name: "Home",
    data(){
      return {
        banner:null
      }
    },
    components: {
      NavBar
    },
    created() {
      homeService.getBanner().then((res) => {
        this.banner = res.data
      })
    }
  }
</script>

<style scoped>
  @import "../assets/css/base.css";

  .nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>