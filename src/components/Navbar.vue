<template>
  <div class="navbar-comp">
    <div class="navbar-fixed">
			<nav>
				<div class="nav-wrapper grey darken-4">
					<a href="#" class="brand-logo center">
						<img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523784781/insapient/logo.png" alt="Insapient Logo">
					</a>
					<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
					<ul class="right hide-on-med-and-down">
						<li><a href="#home-section">Home</a></li>
						<li><a href="#band-section">Band</a></li>
						<li><a href="#songs-section">Songs</a></li>
						<li><a href="#videos-section">Videos</a></li>
						<li><a href="#media-section">Media</a></li>            
					</ul>
				</div>
			</nav>
    </div>
    <ul class="sidenav" id="mobile-demo" ref="mySideNav">
			<li><a href="#home-section" v-on:click="closeSideNav()">Home</a></li>
			<li><a href="#band-section" v-on:click="closeSideNav()">Band</a></li>
			<li><a href="#songs-section" v-on:click="closeSideNav()">Songs</a></li>
			<li><a href="#videos-section" v-on:click="closeSideNav()">Videos</a></li>
			<li><a href="#media-section" v-on:click="closeSideNav()">Media</a></li>            
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'navbar',
	data () {
		return {
			sideNavInstance: null
		}
	},
	mounted () {
		this.sideNavInstance = M.Sidenav.init(this.$refs.mySideNav, {})
	},
	methods: {
		closeSideNav() {
			if (this.sideNavInstance.isOpen) {
				this.sideNavInstance.close()
			}
		}
	}
}
</script>

<style scoped>
nav {
  color: #f5f5f5;
}

.brand-logo img {
  height: 6vh;
  width: 18vh;
  vertical-align: middle;
}
</style>
