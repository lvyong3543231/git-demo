<template>
  <div class="HomeAlert-container">
    <div class="title-part">
      <p>Medical Service Platform for Manufacturers, Distributors and Experts</p>
      <p>生产企业、经销商与专家的医疗服务共亨平台</p>
    </div>
    <!-- 业务部分 -->
    <div class="service-part HomeAlert-item">
      <div class="item-title">
        <p class="main">核心业务</p>
        <p class="line"></p>
        <p class="main-en">OUR SERVICES</p>
        <p>因为专注，所以专业——努力做到最好，只为追求更好！</p>
      </div>
      <el-row  type="flex" class="row-bg" justify="space-around">
        <el-col  v-for="(item,key) in yewus" :key="key"  class="grid-content bg-purple" >
          <div class="text-box">
            <div class="" style="margin-top: 50px;">{{item.en}}</div>
            <div class="item cn">{{item.cn}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 产品部分 -->
    <div class="products-part HomeAlert-item">
      <div class="item-title">
        <p class="main">我们的产品</p>
        <p class="line"></p>
        <p class="main-en">OUR PRODUCTS</p>
        <p>医疗行业丰富产品，打造行业顶级平台！</p>
      </div>
      <el-row>
        <el-col :span="8"  v-for="(item,key) in products" :key="key"  class="prodcts-box">
          <div  @mouseenter="changeIsShow(key)"  @mouseleave="resetIsShow" @click="showProductsDetial(key)">
            <div class="image-box" >
              <el-image :src="item.url" object-fit="none" ></el-image>
            </div>
            <div v-show="isShow==key" class="text-box">
              <div class="alt">{{item.alt}}</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="showmore" @click="gotoProducts">查看更多产品<i class="el-icon-plus"></i></div>
    </div>
     <!-- 合作案例 -->
    <div class="cases-part HomeAlert-item">
      <div class="item-title">
        <p class="main">合作案例</p>
        <p class="line"></p>
        <p class="main-en">Cooperation case</p>
        <p>众多的成功案例，是平台实力的体现！</p>
      </div>
      <div class="cases-img-box">
         <el-carousel height="330px" direction="vertical">
        <el-carousel-item v-for="(item,key) in cases" :key="key">
          <el-row type="flex" justify="space-around" :gutter="10">
            <el-col :span="8" @click="showCasesDetial(key)">
              <div class="img-box" style="width:100%;overflow:hidden;height:270px;"><img :src="item[0].url" height="100%"/></div>
              <div>{{item[0].tip}}</div>
            </el-col>
            <el-col :span="8" @click="showCasesDetial(key)">
              <div class="img-box" style="width:100%;overflow:hidden;height:270px;"><img :src="item[1].url" height="100%"/></div>
              {{item[1].tip}}</el-col>
            <el-col :span="8" @click="showCasesDetial(key)">
              <div class="img-box" style="width:100%;overflow:hidden;height:270px;"><img :src="item[2].url" height="100%"/></div>
              <div>{{item[2].tip}}</div></el-col>
          </el-row>
        </el-carousel-item>
       </el-carousel>
      </div>
      <div class="showmore" @click="gotoCases">查看更多案例<i class="el-icon-plus"></i></div>
    </div>
    <!-- 为什么加入我们 -->
    <div class="JoinUs-part HomeAlert-item">
      <div class="item-title">
        <p class="main">为什么选择卧虎</p>
        <p class="line"></p>
        <p class="main-en">why choose us</p>
      </div>
      <div class="img-box"><img :src="JoinUS" style="width: 100%"/></div>
    </div>
    <!-- 医疗资讯 -->
    <div class="information-part HomeAlert-item">
      <div class="item-title">
        <p class="main">医疗资讯</p>
        <p class="line"></p>
        <p class="main-en">Medical information</p>
      </div>
      <div class="item-content">
        <div class="item-part huiyi-part">
          <div class="img-box"><img :src="messages.url"/></div>
          <div class="text-box">
            <div class="title">{{messages.title}}</div>
            <div class="content">{{messages.content}}</div>
          </div>
          <div class="showmore" @click="showNewsDetial">查看更多详情<i class="el-icon-plus"></i></div>
        </div>
        <div class="item-part info-part">
          <div class="info-list">
            <div class="item" v-for="(item,key) in infoList" :key="key" @click="showNewsDetial(key)">
              <div>>{{item.name}}</div>
            </div>
          </div>
          <div class=" huiyi-part">
            <div class="img-box"  style="height:110px;overflow:hidden;"><img :src="messages.url"/></div>
            <div class="text-box">
              <div class="title">{{messages.title}}</div>
              <div class="content">{{messages.content}}</div>
            </div>
            <div class="showmore" @click="gotoNews">查看更多资讯<i class="el-icon-plus"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import p1 from '@/assets/products/products-01.png'
import p2 from '@/assets/products/products-02.png'
import p3 from '@/assets/products/products-03.png'
import p4 from '@/assets/products/products-04.png'
import p5 from '@/assets/products/products-05.png'
import p6 from '@/assets/products/products-06.png'
import case1 from '@/assets/cases/case-01.png'
import case2 from '@/assets/cases/case-02.png'
import case3 from '@/assets/cases/case-03.png'
import case4 from '@/assets/cases/case-04.png'
import case5 from '@/assets/cases/case-05.png'
import case6 from '@/assets/cases/case-06.png'
import case7 from '@/assets/cases/case-07.png'
import case8 from '@/assets/cases/case-08.png'
import case9 from '@/assets/cases/case-09.png'
import JoinUs from '@/assets/JoinUS.png'
import news1 from '@/assets/news/home1.png'
import news2 from '@/assets/news/home2.png'
export default {
  data () {
    return {
      yewus: [
        { en: 'Resource integration', cn: '资源整合' },
        { en: 'Release industry news', cn: '发布行业消息' },
        { en: 'The meeting lecture', cn: '专家品牌建设' },
        { en: 'The exhibition sponsored', cn: '承办专家学术会议' }
      ],
      products: [
        { url: p1, alt: '第三代睡眠呼吸机', productsId: 12333 },
        { url: p2, alt: '妇产科产品', productsId: 12333 },
        { url: p3, alt: '第一代产品', productsId: 12333 },
        { url: p4, alt: '第二代产品', productsId: 12333 },
        { url: p5, alt: '中药产品', productsId: 12333 },
        { url: p6, alt: '第三代睡眠呼吸机', productsId: 12333 },
        { url: p1, alt: '第三代睡眠呼吸机', productsId: 12333 },
        { url: p2, alt: '第三代睡眠呼吸机', productsId: 12333 },
        { url: p3, alt: '第三代睡眠呼吸机', productsId: 12333 }
      ],
      cases: [
        [{ url: case1, tip: '中山一院', casesId: '001' }, { url: case2, tip: '中山二院', casesId: '001' }, { url: case3, tip: '中山三院', casesId: '001' }],
        [{ url: case4, tip: '省一院', casesId: '001' }, { url: case5, tip: '中山二院', casesId: '001' }, { url: case6, tip: '中山三院', casesId: '001' }],
        [{ url: case7, tip: '南方一院', casesId: '001' }, { url: case8, tip: '中山二院', casesId: '001' }, { url: case9, tip: '中山三院', casesId: '001' }]
      ],
      isShow: 1000,
      JoinUS: JoinUs,
      news: [news1, news2],
      messages: {
        url: news1,
        newsId: 1200,
        title: '论包装设计对产品的影响性',
        content: 'Azimo是于一款于2012年在英国成立的线上国际汇款服务平台，该服务平致力于提供方便、快捷、安全且手续费低廉的国际汇款业'
      },
      infoList: [
        { name: '论包装设计对产品的影响性', newsId: '2001' },
        { name: '论包装设计对产品的影响性', newsId: '2001' },
        { name: '论包装设计对产品的影响性地方大.....', newsId: '2001' },
        { name: '论包装设计对产品的影响性', newsId: '2001' },
        { name: '论包装设计对产品的影响性', newsId: '2001' }
      ]
    }
  },
  methods: {
    changeIsShow (key) {
      this.isShow = key
    },
    resetIsShow () {
      this.isShow = 1000
    },
    showProductsDetial (key) {
      const productsId = this.products[key].productsId
      this.$router.push({ path: '/productsDetial', query: { productsId } })
    },
    gotoProducts () {
      this.$router.push({ path: '/products' })
    },
    showCasesDetial (key) {
      const casesId = this.cases[key].casesId
      this.$router.push({ path: '/casesDetial', query: { casesId } })
    },
    gotoCases () {
      this.$router.push({ path: '/cases' })
    },
    showNewsDetial (key) {
      let newsId = ''
      if (key) {
        newsId = this.infoList[key].newsId
      } else {
        newsId = this.messages.newsId
      }
      this.$router.push({ path: '/newsDetial', query: { newsId } })
    },
    gotoNews () {
      this.$router.push({ path: '/news' })
    }

  },
  components: {

  }
}
</script>

<style scoped>
  .HomeAlert-container{
    margin-top: 50px;
  }
  .title-part {
    font-size: 24px;
    font-weight: 500;
    line-height: 18px;
  }
  .HomeAlert-item {
    padding:  30px 0;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
  }
  .HomeAlert-item .item-title{
    text-align: center;
    line-height: 14px;
     font-size: 14px;
     margin-bottom: 50px;
  }
  .item-title .main{
    font-size: 20px;
    font-weight: 400;

  }
  .item-title .line{
    width: 30px;
    margin: auto;
    border-bottom: 2px solid #E50012;
  }
  .item-title .main-en {
    font-size: 12px;
    color: #999;
  }
  .grid-content{
    text-align: center;
    border-radius: 50%;
    color: #fff;
    padding: 30px 10px;
    box-sizing: border-box;
    font-weight: 500;
  }
  .grid-content:hover {
    color: #E50012;
    border: 1px solid #E50012;
    background: none;
  }
  .bg-purple{
    background: #E50012;
    height: 220px;
    width: 220px;
  }
  .text-box .cn {
    margin-top: 5px;
  }
  .prodcts-box {
    position: relative;
    height:300px;
  }
  .prodcts-box .image-box{
    height:300px;
    overflow:hidden;
  }
  .prodcts-box .text-box{
    width:100%;
    height:300px;
    background: rgba(0,0,0,.5);
    text-align:center;
    position: absolute;
    top: 0;
    left:0;
    text-align:center;
    color: #fff;
    font-size: 24px;
    margin: auto;
  }
  .prodcts-box .text-box .alt {
    line-height: 300px;
  }
  .cases-img-box {
    box-sizing: border-box;
    padding: 0 15%;
  }
  .JoinUs-part {
    width: 100%;
    padding: 0;
    position: relative;
  }
  .JoinUs-part .item-title {
    position: absolute;
    top:0;
    left : 50%;
    color: #fff;
    transform: translateX(-50%);
  }
  .information-part .item-content{
    box-sizing: border-box;
    padding: 0 20%;
    overflow:hidden;
  }
  .information-part .item-content .huiyi-part {
    background: #f3f3f3;
    width: 48%;
    float:left;
  }
  .information-part .item-content .huiyi-part .text-box{
    text-align: left;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 0;

  }
  .information-part .item-content .huiyi-part .title{
    line-height:16px;
    height: 16px;
  }
  .information-part .item-content .huiyi-part .content{
    font-size: 14px;
    margin-top: 10px;
  }
  .information-part .item-content  .img-box img{
    width:100%;
  }
  .information-part .item-content .info-part {
    width: 48%;
    margin-right:0;
    float:right;
    text-align:left;
  }
  .information-part .item-content .info-part .info-list .item {
    line-height: 30px;
    border-bottom: 1px dotted #e0e0e0;
    cursor: pointer;
  }
  .information-part .item-content .info-part .info-list .item:hover{
    color: #E50012;
  }
  .information-part .item-content .info-part .huiyi-part{
    width: 100%;
    background:#fff;
    margin-top: 10px;
  }
  .showmore {
    padding: 5px;
    display: inline-block;
    margin: 20px auto;
    color: #E60012;
    font-size: 14px;
    border: 1px solid #E50012;
  }
  .showmore:hover {
    cursor: pointer;
    color: #fff;
    background: #E50012;
  }
  .showmore i {
    margin-left: 5px;
  }
</style>
