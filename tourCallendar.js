const eventToutSwiper = document.querySelectorAll('.eventTourSwiper')
eventToutSwiper.forEach((item, index) => {
    var eventTourSwiper = new Swiper(item, {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            240: {
                slidesPerView: 1.15,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
      });
})

const tourItemBtn = document.querySelectorAll('.tour-item-btn>div')
const tourItemHover = document.querySelectorAll('.tourList-slide-info-img-hover')
const allToursMonth = document.querySelectorAll('.all-tours-item')
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
                allToursMonth[index].style.zIndex = '2'
            })
            item.addEventListener('mouseleave', () => {
                tourItemHover[index].style.visibility = 'hidden'
                tourItemHover[index].style.opacity = '0'
                allToursMonth[index].style.zIndex = '1'
            })
        })
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 700px)")
  
  // Call listener function at run time
  myViewFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myViewFunction(x);
  });

  const yearFilter = document.querySelectorAll('.event-tours-filter span')
  const eventTourYear = document.querySelectorAll('.event-tour-year')
  yearFilter.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        eventTourYear.forEach((itm, indx) => {
            itm.innerText = item.innerText
        })
        for(let i=0; i<yearFilter.length; i++){
            if(index!=i){
                yearFilter[i].classList.remove('active')
            }
        }
    })
  })

  const eventTourItems = document.querySelectorAll('.event-tour-item')
  const monthTour = document.querySelectorAll('.available-join-time-item')
  if(eventTourItems[0]){
    eventTourItems[0].classList.add('active')
  }
  if(monthTour[0]){
    monthTour[0].classList.add('active')
  }
  monthTour.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        eventTourItems[index].classList.add('active')
        for(let i=0; i<monthTour.length; i++){
            if(index!=i){
                eventTourItems[i].classList.remove('active')
                monthTour[i].classList.remove('active')
            }
        }
    })
  })

  const availableJoinTimeHeading = document.querySelectorAll('.available-join-time-heading span')
  if(availableJoinTimeHeading[0]){
    availableJoinTimeHeading[0].classList.add('active')
  }
  availableJoinTimeHeading.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        for(let i=0; i<availableJoinTimeHeading.length; i++){
            if(index!=i){
                availableJoinTimeHeading[i].classList.remove('active')
            }
        }
    })
  })