<template>
  <div class="newsDetial-container mt90">
    <div class="title">{{newsDetial.title}}</div>
    <div class="date">发布时间：{{newsDetial.date}}</div>
    <div class="content-box">
      <div class="content" v-for="(item,key) in newsDetial.contents " :key="key">
        <div v-if="item.type=='text'" class="item">
          {{item.content}}
        </div>
        <div v-if="item.type=='image'" class="item item-img">
          <img :src="item.content"/>
        </div>
      </div>
    </div>
    <div class="gotoNews" @click="gobackNews">返回资讯列表</div>
  </div>
</template>

<script>
import new1 from '@/assets/news/home1.png'
export default {
  mounted () {
    const detials = {
      title: '牛人大咖汇聚高度规范畅谈产品思维',
      date: '2020-06-12',
      contents: [
        { type: 'text', content: '今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决方案。 我们要警惕假流量，但我不会旗帜鲜明的 反对，如古老的寓言所说，上帝若想毁灭世界，只需在人间安排一位从品牌基因发道德家，所以更要警惕道德家。 一，一 场所有人的共谋。 长时间...今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决案.我们要警惕假流量，但我不会旗帜鲜明的 反对从品牌基因发如古老的寓言所说.' },
        { type: 'text', content: '真诚的前提是真实。生活在网络时代的年轻人，善于搜索资料、挖掘真相。夸大的宣传，并不能让消费者相信，甚至会产生厌恶拒绝的反作用。从品牌基因出发，将真实放大形从品牌基因发吧成真诚，才能吸引消费者。真诚是一种态度，突出年轻人注重的“以人为本”的社会责任。千禧一代对于道德显现出前所未有的敏感：没有破坏环境的生产废物，没有在动物身上做的从品牌基因发残忍实验，没有对第三世界童工的压榨 … … 才是他们愿意买单的品牌。在这种情况下，真诚的品牌态度，也是一种符合“政治正确”的年轻化沟通。出年轻人注重的“以人为本”的从品牌基因发社会责任。千禧一代对于道德显现出前所未有的敏感：没有破坏环境的生产废物，没有在动物身上做的残忍实验，没有对第三世界童工的压榨 …' },
        { type: 'image', content: new1 },
        { type: 'text', content: '今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决方案。 我们要警惕假流量，但我不会旗帜鲜明的 反对，如古老的寓言所说，上帝若想毁灭世界，只需在人间安排一位从品牌基因发道德家，所以更要警惕道德家。 一，一 场所有人的共谋。 长时间...今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决方案。 我们要警惕假流量，但我不会旗帜鲜明的 反对从品牌基因发如古老的寓言所说.' }
      ]
    }
    this.newsDetial = detials
  },
  data () {
    return {
      newsDetial: {}
    }
  },
  methods: {
    gobackNews () {
      this.$router.push({ path: '/news' })
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .newsDetial-container{
    width: 60%;
    margin: 30px auto;
  }
  .newsDetial-container .title{
    font-size: 16px;
    line-height: 40px;
    font-weight: 500;
  }
  .newsDetial-container .date{
    line-height: 40px;
    font-size: 14px;
    color: #868686;
  }
  .newsDetial-container .content{
    text-indent: 2rem;
    font-size: 14px;
    line-height:32px;
    text-align:left;
  }
  .newsDetial-container .content .item-img{
     text-align:center;
     text-indent: 0;
   }
   .newsDetial-container .content .item-img .img-box{
     width: 100%;
   }
   .newsDetial-container .content .item-img img{
     width: 100%;
   }
   .gotoNews {
     display: inline-block;
     padding:5px 10px;
     margin: 20px auto;
     color: #E50012;
     border: 1px solid #E50012;
     font-size: 12px;
     cursor: pointer;
   }
   .gotoNews:hover{
     background: #E50012;
     color: #fff;
   }
</style>
