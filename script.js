var options = {}

var sideNavElem = document.querySelector('.sidenav')
var sideNavInstance = M.Sidenav.init(sideNavElem, options)

var carouselElem = document.querySelector('.carousel')
var carouselInstance = M.Carousel.init(carouselElem, { fullWidth: true })

autoplay()

function autoplay() {
    carouselInstance.next()
    setTimeout(autoplay, 4500)
}