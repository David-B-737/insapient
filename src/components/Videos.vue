<template>
  <div class="videos">
		<section id="videos-section" ref="videosRef">
			<h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Videos</h3>
			<div class="container">
				<div class="row">
					<div class="col s12 m12 l4">
						<div class="video-container">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/h40kXcC0vow" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
					<div class="col s12 m12 l4">
						<div class="video-container">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/da9Jm-4civs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
					<div class="col s12 m12 l4">
						<div class="video-container">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/h40kXcC0vow" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
    </section>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Videos',
	data() {
		return {
			scrollSpyInstance: null
		}
	},
	mounted() {
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.videosRef, {})		
	}
}
</script>

<style scoped>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    overflow: hidden;
    margin: 2vh 2vh 2vh 2vh;
}

.video-container iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
