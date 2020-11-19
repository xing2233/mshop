<template>
  <div class="tab" >
    <div @click.stop="doSelect(index)"
         class="tab-item"
         v-for="(item,index) in tabs" :key="item">
      <span :class="{'tab-active':currentIndex===index}">{{item}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabComponent",
  props: {
    list: {
      require: true,
      type: Array
    }
  },
  data() {
    return {
      tabs: this.list,
      currentIndex:0
    }
  },
  methods:{
    doSelect(index){
      this.currentIndex = index
      // e.stopPropagation()
    }

  }
}
</script>

<style scoped>
.tab{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
}
.tab-item{
  flex: 1;
  text-align: center;

}
.tab-item span{
  padding:  4px;

}
.tab-active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-tint);
}
</style>
