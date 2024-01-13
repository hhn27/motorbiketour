gsap.registerPlugin(ScrollTrigger);

var tourExpertTourGuide = new Swiper('.tourExpertTourGuide', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
        }
    }
  });

  const tourGuidePersonList = document.querySelectorAll(".tour-guide-person-left-item")
  const tourGuideList = document.querySelectorAll(".tour-guide-item")
  const overview = document.querySelector(".overview")
  tourGuideList.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top top+=100",
      onEnter: (self) => {
        overview.classList.remove("active")
        tourGuidePersonList[index].classList.add("active")
        for(let i=0; i<tourGuideList.length; i++){
          if(i!=index){
            tourGuidePersonList[i].classList.remove("active")
          }
        }
      },
      onLeaveBack: (self) => {
        for(let i=0; i<tourGuideList.length; i++){
          if(i!=index-1){
            tourGuidePersonList[i].classList.remove("active")
          }
          if(i==index-1 && index>=1){
            tourGuidePersonList[i].classList.add("active")
          }
          if(index==0){
            overview.classList.add("active")
          }
        }
      }
    })  
  })

  tourGuidePersonList.forEach((item, index) => {
    item.addEventListener('click', () => {
        tourGuideList[index].scrollIntoView({ behavior: "smooth"});
    })
  })

  ScrollTrigger.create({
    trigger: '.tour-guide-right',
    start: "top top+=100",
    onEnter: (self) => {
        overview.classList.add("active")
    },
    onLeaveBack: (self) => {
        overview.classList.remove("active")
    }
  })  

  overview.addEventListener('click', () => {
    document.querySelector('.tour-guide-right').scrollIntoView({ behavior: "smooth"});
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