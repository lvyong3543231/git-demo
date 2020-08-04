<template>
  <div class="cases-container mt90">
    <div class="banner-box">
      <div class="img-box"><img :src="banner"/></div>
    </div>
    <div class="cases-box w60">
      <div class="cases-item"  v-for="(item,key) in casesList" :key="key" @click="gotoCasesDetial(key)">
        <div class="img-box">
          <img :src="item.url"/>
        </div>
        <div class="title-box">{{item.title}}</div>
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
import casesBanner from '@/assets/cases/cases.png'
import case1 from '@/assets/cases/case-01.png'
import case2 from '@/assets/cases/case-02.png'
import case3 from '@/assets/cases/case-03.png'
import case4 from '@/assets/cases/case-04.png'
import case5 from '@/assets/cases/case-05.png'
import case6 from '@/assets/cases/case-06.png'
import case7 from '@/assets/cases/case-07.png'
import case8 from '@/assets/cases/case-08.png'
import case9 from '@/assets/cases/case-09.png'
import Bottom from '@/components/Bottom/bottom'
export default {
  mounted () {
    const cases = [
      { url: case1, casesId: '0001', title: '广东省第一人民医院' },
      { url: case2, casesId: '0001', title: '中山大学附属第一医院' },
      { url: case3, casesId: '0001', title: '佛山市人民医院' },
      { url: case4, casesId: '0001', title: '广州省妇幼医院' },
      { url: case5, casesId: '0001', title: '南方大学附属第一医院' },
      { url: case6, casesId: '0001', title: '中山大学附属第二医院' },
      { url: case7, casesId: '0001', title: '广州祈福医院' },
      { url: case8, casesId: '0001', title: '顺德龙江医院' },
      { url: case9, casesId: '0001', title: '南方大学附属第二医院' }
    ]
    this.casesList = cases
  },
  data () {
    return {
      banner: casesBanner,
      casesNavList: ['全部资讯', '医疗讲座', '最新动态', '行业报告'],
      actives: 0,
      total: 20,
      casesList: []
    }
  },
  methods: {
    changeItem (key) {
      this.actives = key
    },
    gotoCasesDetial (key) {
      const casesId = this.casesList[key].casesId
      this.$router.push({ path: '/casesDetial', query: { casesId } })
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
  .cases-box {
   display: flex;
   flex-wrap: wrap;
  }
  .cases-box .cases-item {
    flex: 205px;
    margin: 20px 0 0 10px;
    cursor: pointer;
  }
  .cases-box .cases-item .img-box img{
    width:100%;
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
  .w60 {
    width: 60%;
    margin: 20px auto;
  }
</style>
