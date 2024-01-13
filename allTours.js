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
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 24,
          }
      }
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

  const allTourFilterInput = document.querySelectorAll('.all-tours .banner-search-tour-input')
  let allTourFilterInputOpen = []
  allTourFilterInput.forEach((item, index) => {
    allTourFilterInputOpen[index] = false
    const allTourFilterItem = item.querySelectorAll('.banner-search-tour-input-choose li')
    allTourFilterItem.forEach((itm, indx) => {
        itm.addEventListener('click', () => {
            item.querySelector('.banner-search-tour-input-label span').innerText = itm.innerText
            document.querySelectorAll('.alltour-filter-selected span')[index].innerText = itm.innerText
            document.querySelectorAll('.alltour-filter-selected .filter-item')[index].style.display = 'block'
        })
    })
    item.addEventListener('click', () => {
        if(!allTourFilterInputOpen[index]){
            item.querySelector('.banner-search-tour-input-choose').style.visibility = 'visible'
            item.querySelector('.banner-search-tour-input-choose').style.opacity = '1'
            allTourFilterInputOpen[index] = true
        }
        else{
            item.querySelector('.banner-search-tour-input-choose').style.visibility = 'hidden'
            item.querySelector('.banner-search-tour-input-choose').style.opacity = '0'
            allTourFilterInputOpen[index] = false
        }
    })
  })

  const allTourFilterRight = document.querySelector('.alltour-filter-selected .filter-right .filter-right-wrapper')
  let allTourFilterRightOpen = false;
  allTourFilterRight.addEventListener('click', () => {
    if(!allTourFilterRightOpen){
        document.querySelector('.alltour-filter-selected .filter-right ul').style.visibility = 'visible'
        document.querySelector('.alltour-filter-selected .filter-right ul').style.opacity = '1'
        allTourFilterRightOpen = true
    }
    else{
        document.querySelector('.alltour-filter-selected .filter-right ul').style.visibility = 'hidden'
        document.querySelector('.alltour-filter-selected .filter-right ul').style.opacity = '0'
        allTourFilterRightOpen = false
    }
  })
  document.querySelectorAll('.alltour-filter-selected .filter-right ul li').forEach((item,index) => {
    item.addEventListener('click', () => {
        document.querySelector('.alltour-filter-selected .filter-right .filter-right-wrapper span').innerText = item.innerText
    })
  })

  document.querySelectorAll('.alltour-filter-selected .filter-item svg').forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.alltour-filter-selected .filter-item')[index].style.display= 'none'
    })
  })

  const allToursPagination = document.querySelectorAll('.all-tours-pagination .page')
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
  
  const seeMoreNorthOverview = document.querySelector('.northern-vietnam-overview button:nth-child(3)')
  const seeLessNorthOverview = document.querySelector('.northern-vietnam-overview button:nth-child(4)')
  seeMoreNorthOverview.addEventListener('click', () => {
    document.querySelector('.northern-vietnam-overview>.northern-vietnam-content').classList.add('active')
    seeMoreNorthOverview.style.display = 'none'
    seeLessNorthOverview.style.display = 'flex'
  })
  seeLessNorthOverview.addEventListener('click', () => {
    document.querySelector('.northern-vietnam-overview>.northern-vietnam-content').classList.remove('active')
    seeMoreNorthOverview.style.display = 'flex'
    seeLessNorthOverview.style.display = 'none'
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

      const filterPriceMb = document.querySelector('.price-filter-mb')
      const filterPriceMbList = document.querySelector('.price-filter-mb-list')
      let filterMbOpened = false
      filterPriceMb.addEventListener('click', () => {
        if(!filterMbOpened){
            filterPriceMbList.style.visibility = 'visible'
            filterPriceMbList.style.opacity = '1'
            filterMbOpened = true
        }
        else{
            filterPriceMbList.style.visibility = 'hidden'
            filterPriceMbList.style.opacity = '0'
            filterMbOpened = false
        }
      })
      
