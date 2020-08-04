<template>
  <div class="aboutUs-container mt90">
    <div class="banner-box">
      <div class="img-box"><img :src="banner"/></div>
    </div>
    <div class="youshi-box w60">
      <div class="content" v-for="(item,key) in youshi" :key="key" >
        <div class="cn">{{item.cn}}</div>
        <div class="en">{{item.en}}</div>
      </div>
    </div>
    <div class="about-box item-box w60">
      <div class="title">
        <span class="line line-left"></span>
        关于卧虎
        <span class="line line-right"></span>
      </div>
      <div class="small-title">卧虎 = 生产企业、经销商与专家的医疗服务共亨平台</div>
      <p>广东卧虎商务有限公司创立于2020年6月，注册资金500万。广东卧虎是一家医疗卫生行业商务顾问公司，更是一家医疗卫生服务行业的平台公司。公司拥有专业的服务团队，为客户提供一流的商业服务；公司拥有强大的专家团队，为客户提供强大的专业帮助。</p>
      <p>广东卧虎商务有限公司以人为本，力求实现产品交易链的扁平化，为交易的上下链找到最佳匹配，实现利益的最大化。专业的运营管理模式，会员利益的最大化，增加会员与公司、企业与平台的粘性，逐步实现销售的网络化，交易的简单化。</p>
      <p>会员体系不断壮大，灵活机动的自由交易体系，强大的市场兼容性，对厂家来说，保护已经稳定的市场，对未开发市场以查漏补缺的方式进行拓展。对企业生产的新产品能借助平台的优势迅速完成产品推广与普及。对于经销商来说，可以从平台上拿到更多的更便宜的质量更好的产品。</p>
    </div>
    <div class="yuanjing-box item-box w60">
      <div class="title">
        <span class="line line-left"></span>
        <div class="title-font">卧虎目标：打造一个医疗卫生领域的阿里巴巴</div>
        <span class="line line-right"></span>
      </div>
      <p>卧虎会定期举办各种招商活动，定期举办各种培训班，组织各种学术沙龙和承办各类学术会议。力求打造一个国内最大的企业、经销商和专家的共亨平台。</p>
      <div class="img-box">
        <div class="img" v-for="(item,key) in imgs" :key="key">
          <img :src="item"/>
        </div>
      </div>
    </div>
    <div class="team-box item-box w60">
      <div class="title">
        <span class="line line-left"></span>
        专家团队顾问
        <span class="line line-right"></span>
      </div>
      <div class="small-title">卧虎拥有丰富的医院专家团队，为行业销售提供专业的建议，帮助解决经销过程中遇到的问题。</div>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import AboutUsBanner from '@/assets/aboutUs/banner.png'
import about1 from '@/assets/aboutUs/about-01.png'
import about2 from '@/assets/aboutUs/about-02.png'
import about3 from '@/assets/aboutUs/about-03.png'
import Bottom from '@/components/Bottom/bottom'
export default {
  mounted () {
  },
  data () {
    return {
      banner: AboutUsBanner,
      youshi: [
        { cn: '专业', en: 'professional' },
        { cn: '专注', en: 'focus' },
        { cn: '服务', en: 'serivce' },
        { cn: '创新', en: 'innovation' },
        { cn: '灵活', en: 'flexible' }
      ],
      imgs: [about1, about2, about3]
    }
  },
  methods: {
    changeItem (key) {
      this.actives = key
    }
  },
  components: {
    Bottom
  }
}
</script>
<style scope>
  .banner-box .img-box img{
    width: 100%;
  }
 .youshi-box{
   display:flex;
   margin: 20px auto;
 }
 .youshi-box .content{
   flex: 1;
   margin-left: 20px;
   border: 1px solid #E50012;
   color: #E50012;
   padding: 20px 0;
   font-size: 14px;
   cursor: pointer;
 }
  .youshi-box .content:hover{
    color: #fff;
    background: #e50012;
  }
  .item-box  {
    margin: 40px auto;
  }
  .item-box  .title{
    font-size: 20px;
  }
  .item-box  .title .line{
    height: 24px;
    width: 5px;
    display: inline-block;
  }
  .item-box  .title .line-left{
    border-left: 1px solid #E50012;
    border-top: 1px solid #E50012;
    margin-right: 5px;
  }
  .item-box .title .line-right{
    border-right: 1px solid #E50012;
    border-bottom: 1px solid #E50012;
    margin-left: 5px;
  }
  .small-title {
    font-size: 15px;
    color: #E50012;
    margin-top: 10px;
  }
  .title-font {
    display: inline-block;
    color: #E50012;
  }
  .yuanjing-box .img-box{
    display: flex;
  }
  .yuanjing-box .img-box .img{
    flex: 1;
    margin-left: 10px;
    overflow: hidden;
  }
  .yuanjing-box .img-box .img img{
    width: 100%;
  }
  .w60 {
    width: 60%;
  }
</style>
