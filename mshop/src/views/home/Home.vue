<template>
  <div>
    <div class="nav">
      <NavBar></NavBar>
    </div>
    <div>
      <MainTarBar></MainTarBar>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar.vue'
import homeService from '@/services/homeService.js'
import MainTarBar from "@/components/content/MainTarBar";

export default {
  name: "Home",
  data() {
    return {
      banner: null
    }
  },
  components: {
    NavBar,
    MainTarBar
  },
  created() {
    homeService.getBanner().then((res) => {
      this.banner = res.data
    })
  }
}
</script>

<style scoped>

.nav {
  background-color: var(--color-tint);
  color: var(--color-background);
}
</style>
