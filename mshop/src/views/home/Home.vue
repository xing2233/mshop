<template>
  <div>
    <div class="nav">
      <NavBar></NavBar>
    </div>
    <div v-if="banner.length>0">
      <WrapperComponent :list="banner"></WrapperComponent>
    </div>

    <div class="home-recommend" v-if="recommend.length>0">
      <RecommendComponent :list="recommend"></RecommendComponent>
    </div>

  </div>
</template>

<script>
  import NavBar from '@/components/content/NavBar.vue'
  import homeService from '@/services/homeService.js'
  import WrapperComponent from '@/components/common/wrapper/WrapperComponent.vue'
  import RecommendComponent from '@/components/common/recommend/RecommendComponent.vue'

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommend:[]
      }
    },
    components: {
      NavBar,
      WrapperComponent,
      RecommendComponent
    },
    created() {
      homeService.getBanner().then((res) => {
        this.banner = res.data.data
      })
      homeService.getRecommend().then((res) => {
        this.recommend = res.data.data
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
  .home-recommend{
    border-bottom: 8px solid #eee;
    padding-bottom: 10px;
  }
</style>
