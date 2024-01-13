var maybeYdkSwiper = new Swiper(".maybeYdkSwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const allToursPagination = document.querySelectorAll('.all-blogs-pagination .page')
  allToursPagination.forEach((item,index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        for(let i=0; i<allToursPagination.length; i++){
            if(index!=i){
                allToursPagination[i].classList.remove('active')
            }
        }
    })
  })

  const blogCategories = document.querySelectorAll('.maybe-ydk-category-item')
  blogCategories[blogCategories.length-1].classList.add('active')
  blogCategories.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.classList.add('active')
      for(let i=0; i<blogCategories.length; i++){
        if(i!=index){
          blogCategories[i].classList.remove('active')
        }
      }
    })
  })

  var topDestinationSwiper = new Swiper(".topDestinationSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        240: {
            slidesPerView: 1.1,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
  });

  const topDestinationSlide = document.querySelectorAll('.topDestinationSwiper .swiper-slide')
  topDestinationSlide.forEach((item, index) => {
    item.querySelectorAll('.tour-info-thumbs>div').forEach((itm, indx) => {
        itm.addEventListener('click', () => {
            itm.classList.add('active')
            item.querySelector('.top-destinations-item-picture img').src = itm.querySelector('img').src
            for(let i=0; i<item.querySelectorAll('.tour-info-thumbs>div').length; i++){
              if(i!=indx){
                item.querySelectorAll('.tour-info-thumbs>div')[i].classList.remove('active')
              }
            }
        })
    })
  })

  var allTourPopularTourSwiper = new Swiper('.letRideSwiper', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          240: {
              slidesPerView: 1.2,
              spaceBetween: 16,
              pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
              },
          },
          768: {
              slidesPerView: 4,
              spaceBetween: 24,
          }
      }
  })

  const tourItemBtn = document.querySelectorAll('.tour-item-btn>div')
  const tourItemHover = document.querySelectorAll('.tourList-slide-info-img-hover')
  const popularTourSlide = document.querySelectorAll('.all-tours-item')

  function myViewFunction(x) {
    if (x.matches) { // If media query matches
        let viewed = []
        tourItemBtn.forEach((item, index) => {
            viewed[index] = false
            item.addEventListener('click', () => {
                if(!viewed[index]){
                    tourItemHover[index].style.visibility = 'visible'
                    tourItemHover[index].style.opacity = '1'
                    viewed[index] = true
                }
                else{
                    tourItemHover[index].style.visibility = 'hidden'
                    tourItemHover[index].style.opacity = '0'
                    viewed[index] = false
                }
            })
        })
    } else {
        tourItemBtn.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                tourItemHover[index].style.visibility = 'visible'
                tourItemHover[index].style.opacity = '1'
                popularTourSlide[index].style.zIndex = '2'
            })
            item.addEventListener('mouseleave', () => {
                tourItemHover[index].style.visibility = 'hidden'
                tourItemHover[index].style.opacity = '0'
                popularTourSlide[index].style.zIndex = '1'
            })
        })
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 767px)")
  
  // Call listener function at run time
  myViewFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myViewFunction(x);
  }); 