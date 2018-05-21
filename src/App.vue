<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Band/>
    <Songs/>
    <Videos/>
    <Media/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Band from './components/Band.vue'
import Songs from './components/Songs.vue'
import Videos from './components/Videos.vue'
import Media from './components/Media.vue'

export default {
  name: 'app',
  components: {
    Navbar,
		Home,
		Band,
		Songs,
		Videos,
		Media
  }
}
</script>

<style>
#app {
	font-family: 'Cinzel', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
	background-color: #424242 ;
}

h3 {
	text-align: center;
}

.container {
	padding-top: 1vh;
}

.container .row {
		text-align: center;
}
</style>
