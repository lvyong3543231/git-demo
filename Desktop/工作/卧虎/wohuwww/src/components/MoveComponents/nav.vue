<template>
  <el-row :gutter="10" class="nav-container">
    <el-col :lg="4" :ms="12"  class="logo-box">卧虎商务</el-col>
    <el-col :lg="11"  :ms="12" class="nav-box">
      <li class="item" v-for = "(item,key) in nav" :key="key">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </el-col>
    <el-col :lg="5" class="search-box">
      <el-input
        placeholder="请输入内容"
        size = "mini"
        suffix-icon="el-icon-search"
        v-model="searchContent">
      </el-input>
    </el-col>
    <div class="right-part">
      <div class="erweima-box"><el-image :src="gzh.url"></el-image></div>
      <div class="login-box"><i class="el-icon-s-fold"></i></div>
    </div>
  </el-row>
</template>

<script>
import gzh from '@/assets/gzh.jpg'
export default {
  data () {
    return {
      nav: [
        { name: '首页', path: '/' },
        { name: '产品中心', path: '/products' },
        { name: '医疗资讯', path: '/news' },
        { name: '合作案例', path: '/cases' },
        { name: '关于我们', path: '/aboutUs' },
        { name: '联系我们', path: '/contect' }
      ],
      searchContent: '',
      gzh: { url: gzh }
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .nav-container{
    width:100%;
    box-sizing: border-box;
    padding: 1rem;
    font-weight: normal;
    position: fixed;
    top:0;
    z-index: 999;
    background: rgba(255,255,255,.9);

  }
  .logo-box{
    height: 2.5rem;
    line-height: 2.5rem;
    color:#E50012;
    text-align:left;
  }
  .nav-box {
    overflow:hidden;
    font-size: 14px;
    color:#282828;
  }
  .nav-box .item {
    float:left;
    margin-left: 1rem;
    padding: .5rem
  }
  .search-box {
    margin-top: 5px;
  }
  .right-part {
    float:right;
    margin-right:20px;
  }
  .erweima-box {
    float:left;
    width: 60px;
    height: 60px;
    margin-top: -.5rem;
  }
  .login-box {
    float:left;
    margin-left:10px;
    font-size:30px;
    color: #E50012;
    line-height: 2.5rem;
  }
</style>
