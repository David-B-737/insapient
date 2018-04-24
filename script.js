var options = {}

var sideNavElem = document.querySelector('.sidenav')
var sideNavInstance = M.Sidenav.init(sideNavElem, options)

var carouselElem = document.querySelector('.carousel')
var carouselInstance = M.Carousel.init(carouselElem, { fullWidth: true })

var scrollspyElem1 = document.querySelector('#home-section')
var scrollspyInstance1 = M.ScrollSpy.init(scrollspyElem1, options)
var scrollspyElem2 = document.querySelector('#band-section')
var scrollspyInstance2 = M.ScrollSpy.init(scrollspyElem2, options)
var scrollspyElem3 = document.querySelector('#songs-section')
var scrollspyInstance3 = M.ScrollSpy.init(scrollspyElem3, options)
var scrollspyElem4 = document.querySelector('#videos-section')
var scrollspyInstance4 = M.ScrollSpy.init(scrollspyElem4, options)
var scrollspyElem5 = document.querySelector('#media-section')
var scrollspyInstance5 = M.ScrollSpy.init(scrollspyElem5, options)

autoplay()
function autoplay() {
    carouselInstance.next()
    setTimeout(autoplay, 4500)
}

function closeSideNav () {
    if (sideNavInstance.isOpen) {
        sideNavInstance.close()
    }
}