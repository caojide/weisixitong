<style>
.contacts {
  display: flex;
  justify-content: center;
}
.contact {
  color: #fff;
  font-size: 14px;
  width: 100%;
  line-height: 3rem;
  text-align: center;
  border-bottom: 2px solid rgba(0,0,0,0);
  cursor: pointer;
}
.contact.active {
  border-bottom: 2px solid #fff;
}
.swiper-box {
  height: 180px;
  width: 100%;
  margin: auto;
}
.swiper-box  .rd-swipe {
  height: 180px;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <div class="swiper-box">
      <rd-swipe :swipe="swipe">
        <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
        </div>
      </rd-swipe>
    </div>
  </div>
</template>

<script>
import rdSwipe from './vue-slide.vue'
export default {
  data () {
    return {
      swipe: {
        activeIndex: 0
      },
      contacts: [{
        text: 'Page 1'
      }, {
        text: 'Page 2'
      }, {
        text: 'Page 3'
      }, {
        text: 'Page 4'
      }],
      imgs: [
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    }
  },
  components: {
    rdSwipe
  },
  methods: {
    turnTo (index) {
      this.$children.map(swipe => {
          if (swipe.turnTo) {
              swipe.turnTo(index)
          }
      })
    }
  }
}
</script>
