gsap.registerPlugin(ScrollTrigger);

const contentHeading = document.querySelectorAll('.destinations-detail-content-right-detail h2')
const tableContent = document.querySelector('.table-content.desktop .table-content-list')
const tableContentMb = document.querySelector('.table-content.mobile .table-content-list')
contentHeading.forEach((item, index) => {
    tableContent.innerHTML += `<span class='table-content-item'>${item.innerText}</span>`
    tableContentMb.innerHTML += `<span class='table-content-item'>${item.innerText}</span>`
})

const tableContentItem = document.querySelectorAll('.table-content.desktop .table-content-item')
const tableContentItemMb = document.querySelectorAll('.table-content.mobile .table-content-item')

contentHeading.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top top+=150",
      onEnter: (self) => {
        tableContentItem[index].classList.add("active")
        tableContentItemMb[index].classList.add("active")
        for(let i=0; i<contentHeading.length; i++){
          if(i!=index){
            tableContentItem[i].classList.remove("active")
            tableContentItemMb[i].classList.remove("active")
          }
        }
      },
      onLeaveBack: (self) => {
        for(let i=0; i<contentHeading.length; i++){
          if(i!=index-1){
            tableContentItem[i].classList.remove("active")
            tableContentItemMb[i].classList.remove("active")
          }
          if(i==index-1 && index>=1){
            tableContentItem[i].classList.add("active")
            tableContentItemMb[i].classList.add("active")
          }
        }
      }
    })  
  })

  tableContentItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        contentHeading[index].scrollIntoView({ behavior: "smooth"});
    })
  })
  tableContentItemMb.forEach((item, index) => {
    item.addEventListener('click', () => {
        contentHeading[index].scrollIntoView({ behavior: "smooth"});
    })
  })

  const socialFacebook = document.querySelector('.social-icon-item.facebook')
  const socialInsta = document.querySelector('.social-icon-item.insta')
  const socialYoutube = document.querySelector('.social-icon-item.youtube')
  const socialTwitter = document.querySelector('.social-icon-item.twitter')
  const currentUrl = window.location.href;

  socialTwitter.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`, "_blank");
  })
  socialFacebook.addEventListener('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, "_blank");
  })

  var tourWithDes = new Swiper('.tourWithDestinationSwiper', {
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
