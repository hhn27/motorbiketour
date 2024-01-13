const loopSlideBestSellerFunction = () => {
	window.addEventListener('load',()=>{	
	const loopItems = document.querySelectorAll(".best-seller-loop");
// 	loopItems.forEach((item, index) => {
		const newsCarousel = loopItems.querySelector(".elementor-widget-container");
		if(loopItems.classList.contains('col5')){
    	newsCarousel.classList.add("swiper", 'best-seller-slide', 'col5');
		}
    const newsWrapper = loopItems.querySelector(".elementor-loop-container.elementor-grid"); 
    newsWrapper.classList.add("swiper-wrapper");
    const newsLoopItems = loopItems.querySelectorAll(".e-loop-item");
    for(let i=0; i<newsLoopItems.length; i++){
        newsLoopItems[i].classList.add("swiper-slide");
    }
		newsCarousel.innerHTML+= `<div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#161616" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
   <div class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#161616" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>`
		const newsSwiper = new Swiper('.best-seller-slide', {
			freeMode: true,
      breakpoints: {
        240: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
			navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// 	})
	})
	}
	
	function loopSlideBestSellerFunction(x) {
		if (!x.matches) { // If media query matches
			loopSlideBestSellerFunction()
		} else {
			return
		}
	}

	// Create a MediaQueryList object
	var loopSlideBestSellerMedia = window.matchMedia("(max-width: 768px)")

	// Call listener function at run time
	loopSlideBestSellerFunction(loopSlideBestSellerMedia);

	// Attach listener function on state changes
	loopSlideBestSellerMedia.addEventListener("change", function() {
		loopSlideBestSellerFunction(loopSlideBestSellerMedia);
	});