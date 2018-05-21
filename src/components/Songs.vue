<template>
  <div class="songs">
		<section id="songs-section" ref="songsRef">
			<h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Songs</h3>
			<div class="container">
				<div class="row">
					<div class="col s12 m4">
						<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430153242%3Fsecret_token%3Ds-Hwrki&color=%231f1a16&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
					</div>
					<div class="col s12 m4">
						<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430151976%3Fsecret_token%3Ds-vdjIN&color=%231f1a16&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
					</div>
					<div class="col s12 m4">
						<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430150200%3Fsecret_token%3Ds-ECf90&color=%231f1a16&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
					</div>
				</div>
			</div>
    </section>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Songs',
	data() {
		return {
			scrollSpyInstance: null
		}
	},
	mounted() {
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.songsRef, {})	
	}
}
</script>

<style scoped>

</style>
