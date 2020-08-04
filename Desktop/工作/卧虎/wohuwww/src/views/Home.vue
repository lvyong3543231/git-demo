<template>
  <div class="home">
    <!-- banner部分 -->
    <Banner></Banner>
    <Service></Service>
    <Bottom></Bottom>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Home/banner'
import Service from '@/components/Home/service'
import Bottom from '@/components/Bottom/bottom'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Banner,
    Service,
    Bottom
  }
}
</script>
