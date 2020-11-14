<template>
  <div id="box" @touchstart="doTouchStart" @touchend="doTouchEnd">
    <ul id="slider" :style="trans">
      <li :style="'left:'+ index+'00%;'" v-for="(item,index) in sliders" :key="index">
        <a :href="item.href">
          <img :src="item.pic" alt="轮播图">
        </a>
      </li>
    </ul>
    <div class="dots">
      <span :class="isActive===n?'active':''" v-for="n in len"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WrapperComponent",
    props: {
      list: {
        required: true,
        type: [Object, Array]
      }
    },
    data() {
      return {
        sliders: this.list,
        startX: 0,
        count: 0,
        len: 0,
        i: 1,
        isActive: 1,
        trans: '',
        timeId: null
      }
    },

    created() {
      if (this.sliders.length > 0) {
        const count = this.count = this.sliders.length;
        this.len = count - 2
      }
      this.doCreateTimer()
    },

    methods: {
      doCreateTimer() {
        if (!this.timeId) {
          this.timeId = setInterval(() => {
            this.toRight()
          }, 2000)
        }
      },
      doTouchStart(e) {
        e.preventDefault()
        this.startX = e.touches[0].pageX;
        if (this.timeId) {
          clearInterval(this.timeId)
          this.timeId = null
        }
      },
      doTouchEnd(e) {
        e.preventDefault()
        const endX = e.changedTouches[0].pageX;
        const diff = this.startX - endX;
        if (diff > 0) {
          // 处在第一个位置
          // 移动到后一个位置
          this.toRight()

        } else if (diff < 0) {

          this.toLeft()
        }

        if (!this.timeId) {
          this.doCreateTimer()
        }
      },
      toRight() {
        const count = this.count
        let i = this.i
        i = i + 1
        const trans = i * 100

        if (i === count - 1) {
          this.isActive = 1
        } else {
          this.isActive = i
        }
        this.trans = 'transform:translateX(-' + trans + '%);transition:all 0.3s ease 0s;'
        if (i === count - 1) {
          this.trans = 'transform:translateX(0);transition:all 0s ease 0s;'
          setTimeout(() => {

            this.trans = 'transform:translateX(-100%);transition:all 0.3s ease 0s;'

          }, 100)
          i = 1
        }
        this.i = i;
      },
      toLeft() {
        let i = this.i
        i = i - 1
        const trans = i * 100

        if (i === 0) {
          this.isActive = this.len
        } else {
          this.isActive = i

        }

        if (i === 0) {
          this.trans = 'transform:translateX(-600%);transition:all 0s ease 0s;'
          setTimeout(() => {

            this.trans = 'transform:translateX(-500%);transition:all 0.3s ease 0s;'

          }, 100)
          i = 5
        } else {
          this.trans = 'transform:translateX(-' + trans + '%);transition:all 0.3s ease 0s;'
        }
        this.i = i
      }
    }
  }
</script>

<style scoped>
  #box {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 160px;
  }

  #slider {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateX(-100%)
  }


  #slider li {
    list-style: none;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #slider li a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  #slider li a img {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }


  .dots {
    position: absolute;
    bottom: 10px;
    text-align: center;
    width: 100%;

  }

  .dots span {
    display: inline-block;
    border: 3px solid rgba(204, 204, 204, 0.2);
    border-radius: 50%;
    width: 3px;
    height: 3px;
    margin: 0 2px;
  }

  .dots .active {
    background-color: #f46;
  }
</style>