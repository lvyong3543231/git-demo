<template>
  <div >
    <div class="productsDetial-container mt90">
      <div class="title">{{products.title}}</div>
      <div class="products-alt">
        <div class="pro-img-box">
          <img :src="products.detail.avatal"/>
        </div>
        <div class="pro-descrption">
          <div><span>产品名称：</span>{{products.detail.name}}</div>
          <p><span>公司名称：</span>{{products.detail.companyName}}</p>
          <p><span>产品买点：</span>{{products.detail.maidian}}</p>
          <p><span>专利号：</span>{{products.detail.zhuanli}}</p>
        </div>
      </div>
      <div class="description">{{products.description.text}}</div>
      <div class="img-box">
        <img v-for="(item,key) in products.description.images" :src="item" :key="key"/>
      </div>
      <div class="contect-box">
        <div class="title">联系我们</div>
        <p><span>公司名称：</span>{{products.contect.companyName}}</p>
        <p><span>联系人：</span>{{products.contect.name}}</p>
        <p><span>联系电话：</span>{{products.contect.tel}}</p>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import avatal from '@/assets/products/products-01.png'
import image1 from '@/assets/products/products-02.png'
import image2 from '@/assets/products/products-03.png'
import image3 from '@/assets/products/products-04.png'
import Bottom from '@/components/Bottom/bottom'
export default {
  mounted () {
    const pro = {
      title: '一次性冲洗液',
      detail: {
        avatal: this.avatals,
        name: '一次性冲洗液',
        companyName: '广东驭林药业',
        maidian: '摩斯型抑菌液',
        zhuanli: 'ZL2018109825027、ZL2018305310111'
      },
      description: {
        text: '专利设计的摩斯型冲洗罐，将抑菌液和摩斯剂型完美结合，利用负压原理储存于储液罐中。使用时只需轻轻按压，即可喷出均匀稳定的摩斯型抑菌液.就像刮胡子使用的泡沫。专利设计的摩斯型冲洗罐，将抑菌液和摩斯剂型完美结合，利用负压原理储存于储液罐中。使用时只需轻轻按压，即可喷出均匀稳定的摩斯型抑菌液.就像刮胡子使用的泡沫。专利设计的摩斯型冲洗罐，将抑菌液和摩斯剂型完美结合，利用负压原理储存于储液罐中。使用时只需轻轻按压，即可喷出均匀稳定的摩斯型抑菌液.就像刮胡子使用的泡沫。专利设计的摩斯型冲洗罐，将抑菌液和摩斯剂型完美结合，利用负压原理储存于储液罐中。使用时只需轻轻按压，即可喷出均匀稳定的摩斯型抑菌液.就像刮胡子使用的泡沫。',
        images: [image1, image2, image3]
      },
      contect: {
        companyName: '广东卧虎商务有限公司',
        name: '闾勇',
        tel: '18566130674'
      }

    }
    this.products = pro
    console.log(this.products.detail.name)
  },
  data () {
    return {
      avatals: avatal,
      products: {}
    }
  },
  components: {
    Bottom
  }
}
</script>

<style scoped>
  .productsDetial-container {
    box-sizing: border-box;
    width: 90%;
    margin: 20px auto;
    background: #f3f3f3;
    padding: 20px;
    text-align:left;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
    line-height:40px;
    text-align:center;
  }
  .products-alt {
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
  .products-alt .pro-img-box{
    float:left;
    width: 200px;
  }
  .products-alt .pro-img-box img{
    width:100%;
  }
  .products-alt .pro-descrption{
    float:left;
    margin-left: 20px;
  }
  .products-alt .pro-descrption span{
    font-size: 18px;
    font-weight: 500;
  }
  .description {
    line-height:30px;
    box-sizing: border-box;
    padding: 20px 3%;
  }
  .img-box {
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
  }
  .contect-box {
    margin-top: 20px;
  }
  .contect-box span{
    font-weight: 500;
  }
</style>
