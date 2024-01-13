const destinationsFilterItemBox = document.querySelectorAll('.destinations-filter-item-box')
let destinationsFilterOpen = []
destinationsFilterItemBox.forEach((item, index) => {
    destinationsFilterOpen[index] = false
    const filterList = item.querySelectorAll('ul li')
    item.addEventListener('click', () => {
        if(!destinationsFilterOpen[index]){
            item.querySelector('.destinations-filter-item-box-select').style.visibility = 'visible'
            item.querySelector('.destinations-filter-item-box-select').style.opacity = '1'
            destinationsFilterOpen[index] = true
        }
        else{
            item.querySelector('.destinations-filter-item-box-select').style.visibility = 'hidden'
            item.querySelector('.destinations-filter-item-box-select').style.opacity = '0'
            destinationsFilterOpen[index] = false
        }
    })
    filterList.forEach((itm, indx) => {
        itm.addEventListener('click', () => {
            item.querySelector('.destinations-selected').innerText = itm.innerText
        })
    })
})
    // handle change map
    const imgMapChange = document.querySelector(".map-content > img")
    const listMap = [
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/sapaMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/hagiangMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/caobangMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/hanoiMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/hueMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/hoianMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/taynguyenMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/hcmMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/mekongMap.svg",
        "https://motorbiketourexpert.com/demo/wp-content/uploads/2024/01/hcmTrailMap.svg"
    ]
    
    const mapHover = document.querySelectorAll(".map-content > span")
    if(window.innerWidth < 768){
        mapHover.forEach((item,index) => {
        item.addEventListener('click',() => {
            imgMapChange.src = listMap[index]
        })
        })
    }else{
        mapHover.forEach((item,index) => {
        item.addEventListener('mouseover',() => {
            imgMapChange.src = listMap[index]
        })
        })
    }

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

    const filterSort = document.querySelector('.destinations-filter-sort>div')
    const filterSortLi = document.querySelectorAll('.destinations-filter-sort>div ul li')
    let filterSortOpen = false
    filterSortLi.forEach((item, index) => {
        item.addEventListener('click', () => {
            document.querySelector('.destinations-sorted').innerText = item.innerText
        })
    })
    filterSort.addEventListener('click', () => {
        if(!filterSortOpen){
            filterSort.querySelector('ul').style.visibility = 'visible'
            filterSort.querySelector('ul').style.opacity = '1'
            filterSortOpen = true
        }
        else{
            filterSort.querySelector('ul').style.visibility = 'hidden'
            filterSort.querySelector('ul').style.opacity = '0'
            filterSortOpen = false
        }
    })

    const allDestinationsPagination = document.querySelectorAll('.all-destinations-pagination .page')
    allDestinationsPagination.forEach((item,index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        for(let i=0; i<allDestinationsPagination.length; i++){
            if(index!=i){
                allDestinationsPagination[i].classList.remove('active')
            }
        }
    })
  })

  function myViewFunction(x) {
    if (x.matches) { // If media query matches
        var topDestinationSwiper = new Swiper(".topDestinationSwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
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
    } else {
        return
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