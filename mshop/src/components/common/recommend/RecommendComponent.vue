<template>
  <div class="recommend">
    <div class="item" v-for="item in lists">
      <img :src="item.pic" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendComponent",
    props: {
      list: {
        required: true,
        type: [Array]
      }
    },
    data() {
      return {
        lists: this.list
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;

  }

  .recommend .item{
    display: flex;
    flex-direction: column;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  }

  .recommend .item img {
    width: 34px;
    height: 34px;
    margin: 9px 0 5px 0 ;
  }
</style>