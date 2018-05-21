<template>
  <div id="app">
    <Navbar/>
		<div class="background"></div>
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
}

.background {
	opacity: 0;
	background-image: url("http://res.cloudinary.com/dqvimfd8b/image/upload/v1526902310/insapient/home/teeth.jpg");
	background-repeat: repeat;
	-webkit-animation: subliminalImage 20s ease infinite;
	-moz-animation: subliminalImage 20s ease infinite;
	animation: subliminalImage 20s ease infinite;
	position: fixed;
	height: 100%;
	width: 100%;
	z-index: -1;
}

@-webkit-keyframes subliminalImage {
	98.99999% {
		opacity: 0;
	}
	99% {
		opacity: 1;
	}
	99.11111% {
		opacity: 0;
	}
}
@-moz-keyframes subliminalImage {
	98.99999% {
		opacity: 0;
	}
	99% {
		opacity: 1;
	}
	99.11111% {
		opacity: 0;
	}
}
@keyframes subliminalImage {
	98.99999% {
		opacity: 0;
	}
	99% {
		opacity: 1;
	}
	99.11111% {
		opacity: 0;
	}
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

body {
	-webkit-animation: backGroundAnimation 20s ease infinite;
	-moz-animation: backGroundAnimation 20s ease infinite;
	animation: backGroundAnimation 20s ease infinite;
}

@-webkit-keyframes backGroundAnimation {
	0% {
		background-color: #212121;
	}
	10% {
		background-color: #424242;
	}
	20% {
		background-color: #616161;
	}
	30% {
		background-color: #757575;
	}
	40% {
		background-color: #9e9e9e;
	}
	50% {
		background-color: #9e9e9e;
	}
	60% {
		background-color: #757575;
	}
	70% {
		background-color: #616161;
	}
	80% {
		background-color: #424242;
	}
	100% {
		background-color: #212121;
	}
}

@-moz-keyframes backGroundAnimation {
	0% {
		background-color: #212121;
	}
	10% {
		background-color: #424242;
	}
	20% {
		background-color: #616161;
	}
	30% {
		background-color: #757575;
	}
	40% {
		background-color: #9e9e9e;
	}
	50% {
		background-color: #9e9e9e;
	}
	60% {
		background-color: #757575;
	}
	70% {
		background-color: #616161;
	}
	80% {
		background-color: #424242;
	}
	100% {
		background-color: #212121;
	}
}

@keyframes backGroundAnimation {
	0% {
		background-color: #212121;
	}
	10% {
		background-color: #424242;
	}
	20% {
		background-color: #616161;
	}
	30% {
		background-color: #757575;
	}
	40% {
		background-color: #9e9e9e;
	}
	50% {
		background-color: #9e9e9e;
	}
	60% {
		background-color: #757575;
	}
	70% {
		background-color: #616161;
	}
	80% {
		background-color: #424242;
	}
	100% {
		background-color: #212121;
	}
}
</style>
