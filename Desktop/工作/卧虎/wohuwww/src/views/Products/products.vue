<template>
  <div class="products-container mt90">
    <div class="banner-box">
      <div class="img-box"><img :src="banner"/></div>
    </div>
    <div class="products-nav">
      <div :class="{active:actives===key}" class="item" v-for="(item,key) in productsList" :key="key" @click="changeItem(key)">{{item}}</div>
    </div>
    <el-row>
      <el-col :span="8"  v-for="(item,key) in products" :key="key"  class="prodcts-box">
        <div  @mouseenter="changeIsShow(key)"  @mouseleave="resetIsShow" @click="showProductsDetial(key)">
          <div class="image-box" >
            <img :src="item.url"/>
          </div>
          <div v-show="isShow==key" class="text-box">
            <div class="alt">{{item.alt}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="pagination-box">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom/bottom'
import ProductsBanner from '@/assets/products/products.png'
import p1 from '@/assets/products/products-01.png'
import p2 from '@/assets/products/products-02.png'
import p3 from '@/assets/products/products-03.png'
import p4 from '@/assets/products/products-04.png'
import p5 from '@/assets/products/products-05.png'
import p6 from '@/assets/products/products-06.png'
export default {
  mounted () {
    const pros = [
      { url: p1, alt: '第三代睡眠呼吸机', productsId: 12333 },
      { url: p2, alt: '妇产科产品', productsId: 12333 },
      { url: p3, alt: '第一代产品', productsId: 12333 },
      { url: p4, alt: '第二代产品', productsId: 12333 },
      { url: p5, alt: '中药产品', productsId: 12333 },
      { url: p6, alt: '第三代睡眠呼吸机', productsId: 12333 },
      { url: p1, alt: '第三代睡眠呼吸机', productsId: 12333 },
      { url: p2, alt: '第三代睡眠呼吸机', productsId: 12333 },
      { url: p3, alt: '第三代睡眠呼吸机', productsId: 12333 }
    ]
    this.products = pros
  },
  data () {
    return {
      banner: ProductsBanner,
      productsList: ['全部产品', '医疗器械', '医用药品', '医用耗材'],
      actives: 0,
      products: [],
      isShow: 1000,
      total: 50
    }
  },
  methods: {
    changeItem (key) {
      this.actives = key
    },
    changeIsShow (key) {
      this.isShow = key
    },
    resetIsShow () {
      this.isShow = 1000
    },
    showProductsDetial (key) {
      const productsId = this.products[key].productsId
      this.$router.push({ path: '/productsDetial', query: { productsId } })
    }
  },
  components: {
    Bottom
  }
}
</script>

<style scoped>
  .banner-box .img-box img{
    width: 100%;
  }
  .products-nav {
    width: 60%;
    margin: 30px auto;
    background: #f3f3f3;
    display: flex;
  }
  .products-nav .item{
    flex:1;
    padding: 5px;
    cursor: pointer;
  }
  .active {
    background: #E50012;
    color: #fff;
  }
  .prodcts-box {
    position: relative;
    height:300px;
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
    cursor: pointer;
  }
  .prodcts-box {
    height: 300px;
    overflow:hidden
  }
  .prodcts-box img{
    width: 100%;
  }
  .pagination-box {
    margin-top: 30px;
  }
</style>
