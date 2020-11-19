<template>
  <div>
    <div class="home-nav">
      <NavBar></NavBar>
    </div>
    <div class="start-space"></div>
    <ScrollComponent @doCanBackTop="doCanBackTop" ref="scroll" class="scroll" :init="show" v-if="banner.length>0 && recommend.length>0&&goods.pop.list.length>0">
      <div class="home-slider">
        <WrapperComponent :list="banner"></WrapperComponent>
      </div>

      <div class="home-recommend">
        <RecommendComponent :list="recommend"></RecommendComponent>
      </div>
      <div class="home-tab">
        <Tab></Tab>
      </div>
      <ListComponent :list="goods.pop.list" v-on:doLoadDown="doLoadDown" ></ListComponent>
    </ScrollComponent>
    <BackTopComponent v-show="backTopShow" @click.native="doBackTop" :imgStyle="imgStyle" class="back-top"></BackTopComponent>
  </div>

</template>

<script>
import NavBar from '@/components/content/NavBar.vue'
import homeService from '@/services/homeService.js'
import WrapperComponent from '@/components/common/wrapper/WrapperComponent.vue'
import RecommendComponent from '@/components/common/recommend/RecommendComponent.vue'
import Tab from "@/views/home/Tab";
import ListComponent from "@/components/common/list/ListComponent";
import ScrollComponent from "@/components/common/scroll/ScrollComponent";
import BackTopComponent from "@/components/common/backTop/BackTopComponent";


export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      show:false,
      backTopShow:false
    }
  },
  components: {
    NavBar,
    WrapperComponent,
    RecommendComponent,
    Tab,
    ListComponent,
    ScrollComponent,
    BackTopComponent
  },
  created() {
    homeService.getBanner().then((res) => {
      this.banner = res.data.data
    })
    homeService.getRecommend().then((res) => {
      this.recommend = res.data.data
    })
    homeService.getTabs().then((res) => {
      this.goods.pop.list = res.data.data
      this.goods.news.list = res.data.data
      this.goods.sell.list = res.data.data

    })
  },
  methods:{
    doLoadDown(){
        this.show = true
    },
    doBackTop(){
      this.$refs.scroll.backTop()
    },
    doCanBackTop(show){
      this.backTopShow =show
    }
  },
  computed:{
    imgStyle(){
      return {
          width: '32px',
          height: '32px',
          display: 'block',
      }
    }
  }

}
</script>

<style scoped>

.home-nav {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  background-color: var(--color-tint);
  color: var(--color-background);
  /*阴影*/
  box-shadow: 0px 0px 5px rgba(100, 100, 100, 1);
}

.start-space{
  height: 44px;
}



.home-recommend {
  border-bottom: 8px solid #eee;
  padding-bottom: 10px;
}

.home-tab {
  font-size: var(--font-size);
  position: sticky;
  top: 44px;
  background-color: var(--color-background);
}

.scroll{
  height: calc(100vh - 93px);
  overflow: hidden;
}

.back-top{
  position: absolute;
  bottom: 60px;
  background-color: #fff;
  border-radius: 50%;
  right: 4%;

}


</style>
