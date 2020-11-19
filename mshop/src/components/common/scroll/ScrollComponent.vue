<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: "ScrollComponent",
  props: {
    init:{
      required:true,
      type:Boolean
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    const timer = setTimeout(() => {
      if (this.init) {
        this.scroll = new BetterScroll(this.$refs.wrapper, {
          probeType: 3,
          pullUpLoad: true
        })
        this.scroll.on('scroll', ({y}) => {
          if (-y>100){
            this.$emit('doCanBackTop',true)
          } else{
            this.$emit('doCanBackTop',false)
          }

        })
        this.scroll.on('scrollEnd', ({y}) => {


        })
        clearTimeout(timer)
      }
    }, 100)

  },
  beforeDestroy() {
    this.scroll.destroy()
  },
  methods:{
    backTop(){
      // 返回顶部
      this.scroll.scrollTo(0,0,300)
    }
  }

}
</script>

<style scoped>

</style>
