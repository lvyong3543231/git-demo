<template>
  <div id="app">
    <div id="nav">
      <Nav></Nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/nav'
export default {
  components: {
    Nav
  }
}
</script>

<style>
body {
  padding:0;
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul, li {
  list-style: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #E50012;
  border-bottom: 2px solid #E50012;
}
.mt90 {
  margin-top: 90px;
}
</style>
