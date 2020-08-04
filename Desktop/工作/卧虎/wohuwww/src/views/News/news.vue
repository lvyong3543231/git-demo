<template>
  <div class="news-container mt90">
    <div class="banner-box">
      <div class="img-box"><img :src="banner"/></div>
    </div>
    <div class="news-nav">
      <div :class="{active:actives===key}" class="item" v-for="(item,key) in newsNavList" :key="key" @click="changeItem(key)">{{item}}</div>
    </div>
    <div class="news-box" v-for="(item,key) in newsList" :key="key">
      <div class="news-item">
        <div class="img-box">
          <img :src="item.images"/>
        </div>
        <div class="item-detial">
          <div class="title">{{item.title}}</div>
          <div class="date">{{item.date}}</div>
          <div class="content">{{item.content}}</div>
          <div class="showmore" @click="gotoNewsDetial(key)">了解更多详情<i class="el-icon-plus"></i></div>
        </div>
      </div>
    </div>
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
import NewsBanner from '@/assets/news/news.png'
import new1 from '@/assets/news/news-01.png'
import new2 from '@/assets/news/news-02.png'
import Bottom from '@/components/Bottom/bottom'
export default {
  mounted () {
    const news = [
      { images: new1, newsId: '2001', title: '牛人大咖汇聚知酷畅谈产品思维', date: '2020-06-12', content: '今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决方案。 我们要警惕假流量，但我不会旗帜鲜明的反对，如古老的寓言所说，上帝若想毁灭世界，只需在人间安排一位道德家，所以更要警惕道德家。 一，一场所有人的共谋。 长时间...' },
      { images: new2, newsId: '2002', title: '牛人大咖汇聚知酷畅谈产品思维', date: '2020-06-12', content: '今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决方案。 我们要警惕假流量，但我不会旗帜鲜明的反对，如古老的寓言所说，上帝若想毁灭世界，只需在人间安排一位道德家，所以更要警惕道德家。 一，一场所有人的共谋。 长时间...' },
      { images: new1, newsId: '2003', title: '牛人大咖汇聚知酷畅谈产品思维', date: '2020-06-12', content: '今天我们聊聊，虚假流量是怎么回事，以及可能存在的解决方案。 我们要警惕假流量，但我不会旗帜鲜明的反对，如古老的寓言所说，上帝若想毁灭世界，只需在人间安排一位道德家，所以更要警惕道德家。 一，一场所有人的共谋。 长时间...' }
    ]
    this.newsList = news
  },
  data () {
    return {
      banner: NewsBanner,
      newsNavList: ['全部资讯', '医疗讲座', '最新动态', '行业报告'],
      actives: 0,
      total: 20,
      newsList: []
    }
  },
  methods: {
    changeItem (key) {
      this.actives = key
    },
    gotoNewsDetial (key) {
      const newsId = this.newsList[key].newsId
      this.$router.push({ path: '/newsDetial', query: { newsId } })
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
  .news-nav {
    width: 60%;
    margin: 30px auto;
    background: #f3f3f3;
    display: flex;
  }
  .news-nav .item{
    flex:1;
    padding: 5px;
    cursor: pointer;
  }
  .news-box {
    width: 60%;
    margin: 20px auto;
  }
  .news-box .news-item{
    border-bottom: 1px solid #f3f3f3;
    display: flex;
  }
  .news-box .news-item .img-box{
    width: 250px;
  }
  .news-box .news-item .img-box img{
    width:100%;
  }
  .news-box .news-item .item-detial{
    flex: 1;
    margin-left: 20px;
    text-align: left;
  }
  .news-box .news-item .item-detial .date{
    font-size: 12px;
    color:#868686;
  }
  .news-box .news-item .item-detial .content{
    font-size: 14px;
  }
  .active {
    background: #E50012;
    color: #fff;
  }
  .showmore {
    padding: 5px;
    display: inline-block;
    margin-top: 20px;
    color: #E60012;
    font-size: 12px;
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
