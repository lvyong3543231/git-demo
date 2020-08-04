<template>
  <div class="banner-container mt90">
    <el-carousel  class="banner" direction = "none">
      <el-carousel-item   v-for="(item,key) in banners" :key="key" @click = "enterDetial">
        <div class="img-box">
          <img :src="item.url"/>
        </div>
        <div class="uppop-box"></div>
        <div class="text-box">
          <div class="text">{{item.text}}</div>
          <div class="more">查看详情 <i class="el-icon-d-arrow-right"></i></div>
        </div>
        <div class="showMore"><i class="el-icon-arrow-down"></i>往下滚动</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import banner1 from '@/assets/banner1.png'
export default {
  data () {
    return {
      banners: [
        { url: banner1, text: '最新妇科冲洗机产品招商' },
        { url: banner1, text: '最新妇科冲洗机产品招商' },
        { url: banner1, text: '最新妇科冲洗机产品招商' }
      ]
    }
  },
  methods: {
    enterDetial () {}
  },
  components: {

  }
}
</script>

<style scoped>
  .banner-container{
    position: relative;
    width: 100%;
    overflow:hidden;
  }
  .img-box {
    width: 100%;
  }
  .text-box {
    position: absolute;
    top: 30%;
    left: 40%;
    color: #fff;
    font-weight: bold;
    z-index: 30;
    cursor: pointer;
  }
  .text {
    font-size: 30px;
  }
  .more {
    margin-top: 10px;
    font-size: 14px;
    color: #cdcdcd;
  }
  .uppop-box {
    width:100%;
    height:820px;
    background: rgba(0,0,0,.5);
    position: absolute;
    top:0;
    left:0;
    /* z-index: 10; */
  }
  .showMore {
    position: absolute;
    left : 50%;
    bottom: 10px;
    color: #ccc;
    font-size: 14px;
  }
  .showMore i {
    margin-right: 10px;
  }
</style>
