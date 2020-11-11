<template>
  <TarBarComponent>
    <TarBarItemComponent path="home" >
      <img slot="img" src="@/assets/img/home.svg" alt="">
      <img slot="img-active" src="@/assets/img/home_active.svg" alt="">
      <span slot="img-text" >首页</span>
    </TarBarItemComponent>
    <TarBarItemComponent path="lib">
      <img slot="img" src="@/assets/img/lib.svg" alt="">
      <img slot="img-active" src="@/assets/img/lib_active.svg" alt="">
      <span slot="img-text" >分类</span>
    </TarBarItemComponent>
    <TarBarItemComponent path="cat">
      <img slot="img" src="@/assets/img/cart.svg" alt="">
      <img slot="img-active" src="@/assets/img/cart_active.svg" alt="">
      <span slot="img-text" >购物车</span>
    </TarBarItemComponent>
    <TarBarItemComponent path="profile">
      <img slot="img" src="@/assets/img/profile.svg" alt="">
      <img slot="img-active" src="@/assets/img/profile_active.svg" alt="">
      <span slot="img-text" >我的</span>
    </TarBarItemComponent>

  </TarBarComponent>
</template>

<script>
import TarBarComponent from "@/components/common/TarBarComponent";
import TarBarItemComponent from "@/components/common/TarBarItemComponent";
export default {
name: "MainTarBar",
  components: {
    TarBarComponent,
    TarBarItemComponent
  }
}
</script>

<style scoped>

</style>
