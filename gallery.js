var galleryDesSwiper = new Swiper(".galleryDestinationSwiper", {
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 6,
            },
        },
        767: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        }
    }, 
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

const galleryFilterTitle = document.querySelector('.gallery-filter-title')
const galleryFilterList = document.querySelector('.gallery-filter-list')
let galleryFilterOpen = false
galleryFilterTitle.addEventListener('click', () => {
    if(!galleryFilterOpen){
        galleryFilterList.style.visibility = 'visible'
        galleryFilterList.style.opacity = '1'
        galleryFilterOpen = true
    }
    else{
        galleryFilterList.style.visibility = 'hidden'
        galleryFilterList.style.opacity = '0'
        galleryFilterOpen = false
    }
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