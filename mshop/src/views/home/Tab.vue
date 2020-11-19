<template>
  <div>
    <TabComponent :list="tabs"></TabComponent>
  </div>
</template>

<script>
import TabComponent from "@/components/common/tab/TabComponent";

export default {

  name: "Tab",
  data(){
    return {
      tabs:[
        '流行',
        '新歌',
        '精选'
      ]
    }
  },
  components:{
    TabComponent
  }
}
</script>

<style scoped>

</style>
