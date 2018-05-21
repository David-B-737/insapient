<template>
  <div class="band">
		<section id="band-section" ref="bandRef">
			<h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Band</h3>
			<div class="container">
				<div class="row">
					<div class="col s12 m4">
						<div class="card grey darken-4">
							<div class="card-image waves-effect waves-block waves-light">
								<img class="activator" src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1523806893/insapient/band/noam.jpg">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-lighten-4">Noam - Vocals/Guitar<i class="material-icons right">more_vert</i></span>
							</div>
							<div class="card-reveal grey darken-4">
								<span class="card-title grey-text text-lighten-4">Noam - Vocals/Guitar<i class="material-icons right">close</i></span>
								<p class="grey-text text-lighten-4">
									Schmidi ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, perspiciatis. 
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam doloribus corporis, officiis, 
									provident et dolor quos ea soluta eligendi beatae nemo dignissimos nesciunt a culpa distinctio autem voluptatem cupiditate?
								</p>
							</div>
						</div>
					</div>
					<div class="col s12 m4">
						<div class="card grey darken-4">
							<div class="card-image waves-effect waves-block waves-light">
								<img class="activator" src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1523806893/insapient/band/dima.jpg">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-lighten-4">Dima - Vocals/Bass Guitar<i class="material-icons right">more_vert</i></span>
							</div>
							<div class="card-reveal grey darken-4">
								<span class="card-title grey-text text-lighten-4">Dima - Vocals/Bass Guitar<i class="material-icons right">close</i></span>
								<p class="grey-text text-lighten-4">
									Dima dolor sit amet consectetur adipisicing elit. Id, soluta!
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam doloribus corporis, officiis, 
									provident et dolor quos ea soluta eligendi beatae nemo dignissimos nesciunt a culpa distinctio autem voluptatem cupiditate?
								</p>
							</div>
						</div>
					</div>
					<div class="col s12 m4">
						<div class="card grey darken-4">
							<div class="card-image waves-effect waves-block waves-light">
								<img class="activator" src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1523806893/insapient/band/andrey.jpg">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-lighten-4">Andrey - Percussion<i class="material-icons right">more_vert</i></span>
							</div>
							<div class="card-reveal grey darken-4">
								<span class="card-title grey-text text-lighten-4">Andrey - Percussion<i class="material-icons right">close</i></span>
								<p class="grey-text text-lighten-4">
									Andrey adipisicing elit. Aspernatur, a iste! Voluptatibus neque minima nesciunt.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam doloribus corporis, officiis, 
									provident et dolor quos ea soluta eligendi beatae nemo dignissimos nesciunt a culpa distinctio autem voluptatem cupiditate?
								</p>
							</div>
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
	name: 'band',
	data() {
		return {
			scrollSpyInstance: null
		}
	},
	mounted() {
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.bandRef, {})	
	}
}
</script>

<style scoped>

</style>
