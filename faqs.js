const faqCateList = document.querySelectorAll('.faq-category-item')
if(faqCateList[0]){
   faqCateList[0].classList.add('active')
}
const faqContentList = document.querySelectorAll('.faq-content')
if(faqContentList[0]){
    faqContentList[0].classList.add('active')
}
faqCateList.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        faqContentList[index].classList.add('active')
        for(let i=0; i<faqContentList.length; i++){
            if(i!=index){
                faqContentList[i].classList.remove('active')
                faqCateList[i].classList.remove('active')
            }
        }
    })
})

var allTourPopularTourSwiper = new Swiper('.allToursPopularTOurSwiper', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          240: {
              slidesPerView: 1,
              spaceBetween: 16,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
          },
          768: {
              slidesPerView: 4,
              spaceBetween: 24,
          }
      }
    })

    var aboutTextInfinite = new Swiper(".aboutTextInfinite", {
        loop: true,
        allowTouchMove: false,
        speed: 12000,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            240: {
                slidesPerView: 0.7,
            },
            768: {
                slidesPerView: 1.2,
            }
        }
        });

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

          var aDestinationSwiper = new Swiper(".amazingDestinationSwiper", {
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
                    spaceBetween: 24
                }
            }
          });