<template>
  <div class="bottom-container">
    <div class="bottom-item contect-box">
      <div><i class="el-icon-phone"></i>18566130674</div>
      <div><i class="el-icon-message"></i>18566130674@163.com</div>
      <div><i class="el-icon-position"></i><span>广东省佛山市南海区大沥镇九龙小商品城1号主楼西402室</span></div>
    </div>
    <div class="bottom-item home-box">
      <div class="title">首页</div>
      <p>产品中心</p>
      <p>合作案例</p>
      <p>医疗资讯</p>
    </div>
    <div class="bottom-item products-box">
      <div class="title">全部产品</div>
      <p >医疗器械</p>
      <p >医用药品</p>
      <p >医用耗材</p>
    </div>
    <div class="bottom-item news-box">
      <div class="title">医疗资讯</div>
      <p>全部医疗资讯</p>
      <p>专家讲座</p>
      <p>医疗最新消息</p>
    </div>
    <div class="bottom-item aboutUs-box">
      <div class="title">关于我们</div>
      <p>公司简介</p>
    </div>
    <div class="bottom-item ewm-box">
      <div class="img-box"><img :src="ewm"/></div>
    </div>
    <div class="copyright">广东卧虎商务有限公司 版权所有 Copyright©2015-2018,.com.All Rights Reserved.粤ICP备16049013号-1bottom-item </div>
  </div>
</template>

<script>
import ewm from '@/assets/gzh.jpg'
export default {
  data () {
    return {
      ewm: ewm
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .bottom-container{
    box-sizing: border-box;
    padding: 20px 10%;
    background: #252525;
    overflow: hidden;
    text-align: center;
    color: #fff;
    font-size: 12px;
    margin-top: 50px;
  }
  .bottom-container .bottom-item {
    float: left;
    padding: 0 20px;
    margin-bottom: 50px;
  }
  .bottom-container .bottom-item .title{
    font-weight: 500;
  }
  .bottom-container .bottom-item p:hover{
    cursor: pointer;
  }
  .bottom-container .bottom-item i {
    margin-right: 10px;
  }
  .bottom-container .contect-box {
    width: 200px;
    text-align: left;
  }
  .bottom-container .contect-box div{
    line-height: 28px;
  }
  .bottom-container .copyright{
    clear: both;
    color: #f3f3f3;
    font-size: 10px;
  }
  .ewm-box .img-box{
    width: 130px;
  }
  .ewm-box .img-box img{
    width:100%;
  }
</style>
