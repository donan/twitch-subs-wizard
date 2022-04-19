<template>
  <div id="app">
    <template v-if="!useMenu">
      <b-navbar toggleable="md" type="dark" variant="dark" fixed="top" class="navbar-expand-md">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand class="d-sm-block d-md-none">Twitch subs wizard</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav mt-2 mt-lg-0 mx-auto">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/auth" class="nav-link">Authorize</router-link></li>
          <li><router-link to="/config" class="nav-link">Config</router-link></li>
          <li><router-link to="/share" class="nav-link">Usage</router-link></li>
          </ul>
        </b-collapse>
      </b-navbar>
    </template>
    <main class="container"><router-view :class="[useMenu ? '': 'marginFixed']"/></main>
    <notifications position="bottom right"/>
    <footer class="footer" v-if="!useMenu">
      <div class="container">
        <div class="text-center">© 2022 sonydcf - Twitch subs wizard v1.6</div>
      </div>
    </footer>
  </div>
</template>
<script>

export default {
  computed: {
    useMenu(){
      return this.$route.name=="List"||this.$route.name=="Verification"
    }
  }
}
</script>
<style>
html {position: relative;min-height: 100%}
body { margin-bottom: 60px}
#app {font-family: Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50}
h1{color:#1574de}
.card{max-width:800px;margin:0 auto 6rem}
.marginFixed{margin-top:90px}
.navbar-nav .router-link-exact-active{background:#fff;border-radius:6px;color: #2c3e50 !important;transition: ease-in all 0.15s;}
.show .navbar-nav .router-link-exact-active{margin-left:3px;margin-right:3px}
.footer {position: absolute;bottom: 0;width: 100%;height:60px;line-height: 60px;background-color: #f5f5f5}
</style>
