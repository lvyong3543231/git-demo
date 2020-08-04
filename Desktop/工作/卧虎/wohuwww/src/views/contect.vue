<template>
  <div class="contect-container mt90">
    <div class="banner-box">
      <div class="img-box"><img :src="banner"/></div>
    </div>
    <div class="map-box w60">
      <div class="img-box"><img :src="map"/></div>
    </div>
    <div class="address-box w60">
      <p>公司全称：广东卧虎商务有限公司</p>
      <p>联系电话：18566130674</p>
      <p>公司邮箱：18566130674@163.com</p>
      <p class="tip">通讯地址：广东省佛山市南海区大沥镇九龙小商品城1号主楼西座402室</p>
      <p>乘车路线：6号地铁到滘口地铁站 --》公交佛263/251/236到岭南站下车，步行700米</p>
      <p>自&nbsp;驾&nbsp;车：广东省佛山市南海区大沥镇九龙小商品城1号主楼西座</p>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import ContectBanner from '@/assets/contects/contect.png'
import ContectMap from '@/assets/contects/map.png'
import Bottom from '@/components/Bottom/bottom'
export default {
  data () {
    return {
      banner: ContectBanner,
      map: ContectMap
    }
  },
  components: {
    Bottom
  }
}
</script>

<style scoped>
  .img-box, .img-box img{
    width: 100%;
  }
  .map-box {
    margin: 20px auto;
    border: 1px solid blue;
  }
  .address-box {
    margin: 20px auto;
    text-align: left;
    font-size: 14px;
  }
  .address-box .tip{
    margin-top: 30px;
  }
  .w60 {
    width:60%;
  }
</style>
