<template>
  <div>
    <div class="nav">
      <NavBar></NavBar>
    </div>
    <div v-if="banner.length>0">
      <WrapperComponent :banners="banner"></WrapperComponent>
    </div>

  </div>
</template>

<script>
  import NavBar from '@/components/content/NavBar.vue'
  import homeService from '@/services/homeService.js'
  import WrapperComponent from '@/components/common/wrapper/WrapperComponent.vue'

  export default {
    name: "Home",
    data() {
      return {
        banner: []
      }
    },
    components: {
      NavBar,
      WrapperComponent
    },
    created() {
      homeService.getBanner().then((res) => {
        this.banner = res.data.data
      })
    }
  }
</script>

<style scoped>

  .nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    /*阴影*/
    box-shadow: 0px 0px 5px rgba(100, 100, 100, 1);
  }
</style>
