<template>
  <div class="home">
		<section id="home-section" ref="homeRef">
			<div class="container">
				<div class="row">
					<div class="col s12">
						<div class="carousel carousel-slider" ref="myCarousel">
							<a class="carousel-item" href="#"><img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817143/insapient/home/1.jpg"></a>
							<a class="carousel-item" href="#"><img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817313/insapient/home/2.jpg"></a>
							<a class="carousel-item" href="#"><img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817143/insapient/home/3.jpg"></a>
							<a class="carousel-item" href="#"><img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817313/insapient/home/4.jpg"></a>
							<a class="carousel-item" href="#"><img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817143/insapient/home/5.jpg"></a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col s12">
						<p class="flow-text grey-text text-lighten-4">
							Insapient is Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Necessitatibus officia ducimus qui iure quas at quod voluptas praesentium eveniet libero.
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Porro officiis quam minima architecto magnam in labore tenetur unde voluptas recusandae!
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Home',
	data () {
		return {
			carouselInstance: null,
			scrollSpyInstance: null
		}
	},
	mounted () {
		this.carouselInstance = M.Carousel.init(this.$refs.myCarousel, {fullWidth: true})
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.homeRef, {})		
		// this.autoPlay()
	}
	// methods: {
	// 	autoPlay() {
	// 		this.carouselInstance.next()
	// 		setTimeout(this.autoplay, 4500)
	// 	}
	// }
}
</script>

<style scoped>

</style>
