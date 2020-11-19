<template>
  <div class="list">
    <div class="list-item" v-for="item in goods" :key="item.id">
      <img :src="item.pic" alt="item.title">
      <span class="list-item-title">{{ item.title }}</span>
      <span class="list-item-price">{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    list: {
      required: true,
      type: [Array,Object]
    }
  },
  data() {
    return {
      goods: this.list
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$emit('doLoadDown')
    })
  }
  // watch:{
  //   list(val){
  //     this.goods = val
  //   }
  // }
}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 0 1%;
  font-size: var(--font-size);
  line-height: 1.2;
}
.list-item{
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 48%;
}

.list-item img{
  width: 100%;
}

.list-item-title{
  /*width: 100%;*/
  height: 31px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  word-break: break-all;
  -webkit-box-orient: vertical;
  margin-top: 5px;
}
.list-item-price{
  color: var(--color-tint);

}
</style>
