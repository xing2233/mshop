<template>
  <div class="item" @click="doClickItem">
    <div v-if="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img-active"></slot>
    </div>
    <div :style="isActiveClass">
      <slot name="img-text"></slot>

    </div>
  </div>

</template>

<script>
export default {
  name: "TarBarItemComponent",
  data() {
    return {}
  },
  props: {
    path: String,
    color: {
      type:String,
      default: '#d4237a'
    }
  },
  computed: {
    isActive() {
      return this.$route.name === this.path
    },
    isActiveClass(){
      return this.isActive?{color:this.color}:{}
    }
  },
  methods: {
    doClickItem() {
      if (this.$route.name==this.path){
        return
      }
      this.$router.replace(this.path)

    }
  }
}
</script>

<style scoped>


.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  margin: 0 auto;
  height: 49px;
}

.item img {
  width: 28px;
  height: 28px;
}

</style>
