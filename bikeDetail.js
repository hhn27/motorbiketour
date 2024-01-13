gsap.registerPlugin(ScrollTrigger);

var bikeThumbSwiper = new Swiper(".bikeThumbSwiper", {
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 2,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 2,
      }
    }
  });
  var bikeGallerySwiper = new Swiper(".bikeGallerySwiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: bikeThumbSwiper,
    },
  });

  const imageNumberLeft = document.querySelector('.bike-thumb-number-left span')
  const bikeThumbSlide = document.querySelectorAll('.bikeThumbSwiper .swiper-slide')
  imageNumberLeft.innerText = `+${bikeThumbSlide.length - 2}`

  var ourMotobikeSwiper = new Swiper(".ourMotobikeSwiper", {
    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1.15,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
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

  const bikeInfoContentRight = document.querySelectorAll(".bike-info-content-right-item")
  const bikeInfoContentSection = document.querySelectorAll(".bike-info-content-section")
  bikeInfoContentSection.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top top+=100",
      onEnter: (self) => {
        bikeInfoContentRight[index].classList.add("active")
        for(let i=0; i<bikeInfoContentRight.length; i++){
          if(i!=index){
            bikeInfoContentRight[i].classList.remove("active")
          }
        }
      },
      onLeaveBack: (self) => {
        for(let i=0; i<bikeInfoContentRight.length; i++){
          if(i!=index-1 && i!=0){
            bikeInfoContentRight[i].classList.remove("active")
          }
          if(i==index-1 && index>=0){
            bikeInfoContentRight[i].classList.add("active")
          }
        }
      }
    })  
  })

  bikeInfoContentRight.forEach((item, index) => {
    item.addEventListener('click', () => {
      bikeInfoContentSection[index].scrollIntoView({ behavior: "smooth"});
    })
  })

  const btnSeeMore = document.querySelector(".best-moto-for-touring .btn-see-more")
  const btnSeeLess = document.querySelector(".best-moto-for-touring .btn-see-less")
  const bestColumnDes = document.querySelector(".best-column-description")
  btnSeeMore.addEventListener('click', () => {
    bestColumnDes.classList.add('active')
    btnSeeMore.style.display = 'none'
    btnSeeLess.style.display = 'flex'
  })
  btnSeeLess.addEventListener('click', () => {
    bestColumnDes.classList.remove('active')
    btnSeeMore.style.display = 'flex'
    btnSeeLess.style.display = 'none'
  })
  