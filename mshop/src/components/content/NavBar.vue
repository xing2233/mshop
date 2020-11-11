<template>
  <NavBarComponent>
    <div slot="center">
      购物街
    </div>
  </NavBarComponent>
</template>

<script>
  import NavBarComponent from '@/components/common/navBar/NavBarComponent.vue'

  export default {
    name: "NavBar",
    components: {
      NavBarComponent
    },
    data(){
      return{
        style:{
          background:'red'
        }
      }
    }
  }
</script>

<style scoped>

</style>
