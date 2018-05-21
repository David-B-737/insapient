<template>
  <div class="media">
		<section id="media-section" ref="mediaRef">
			<h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Media</h3>
			<div class="container">
				<div class="row">
					<div class="col s3">
						<a 
						href="https://twitter.com/justinbieber" 
						class="btn-floating grey darken-4 pulse" 
						target="_blank">
							<i class="fab fa-instagram media-icon"></i>
						</a>
					</div>
					<div class="col s3">
						<a 
						href="https://www.facebook.com/Insapient-155021401858695" 
						class="btn-floating grey darken-4 pulse" 
						target="_blank">
							<i class="fab fa-facebook-f media-icon"></i>
						</a>
					</div>
					<div class="col s3">
						<a 
						href="https://www.youtube.com/channel/UCnscHLfwxs-6kApOiHZMLMQ" 
						class="btn-floating grey darken-4 pulse" 
						target="_blank">
							<i class="fab fa-youtube media-icon"></i>
						</a>
					</div>
					<div class="col s3">
						<a 
						href="https://soundcloud.com/insapient" 
						class="btn-floating grey darken-4 pulse" 
						target="_blank">
							<i class="fab fa-soundcloud media-icon"></i>
						</a>
					</div>
				</div>
			</div>
    </section>
	</div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Media',
	data() {
		return {
			scrollSpyInstance: null
		}
	},
	mounted() {
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.mediaRef, {})
	}
}
</script>

<style scoped>
.media-icon {
    font-size: 3vh;
    color: #eeeeee;
		vertical-align: middle !important;
}
</style>
