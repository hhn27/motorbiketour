  const bikeDetailPopup = document.querySelectorAll('.item-hover-details')
  const bikeInfo = document.querySelectorAll('.bike-info')
  const bikePopup = document.querySelector('.bike-popup')

  bikeInfo.forEach((item, index) => {
    var bikeThumbSwiper = new Swiper(item.querySelector('.bikeThumbSwiper'), {
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 2,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 8,
          slidesPerView: 3,
        }
      }
    });
    var bikeGallerySwiper = new Swiper(item.querySelector('.bikeGallerySwiper'), {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: bikeThumbSwiper,
      },
    });
  })

  const bikePopupFunction = (index) => {
    bikePopup.classList.add('active')
    bikeInfo[index].classList.add('active')
  }

  bikeDetailPopup.forEach((item, index) => {
    item.addEventListener('click', () => {
      bikePopupFunction(index)
    })
  })

  const popUpCloseFuntion = () => {
    bikePopup.classList.remove('active')
    bikeInfo.forEach((itm, indx) => {
      itm.classList.remove('active')
    })
  }

  const bikePopupOverlay = document.querySelector('.bike-popup-overlay')
  bikePopupOverlay.addEventListener('click', () => {
    popUpCloseFuntion()
  })

  const popUpBtnClose = document.querySelectorAll('.bike-popup-close')
  popUpBtnClose.forEach((item, index) => {
    item.addEventListener('click', () => {
      popUpCloseFuntion()
    })
  })

  const topName = document.querySelectorAll('.item-top-name button')
  topName.forEach((item, index) => {
    item.addEventListener('click', () => {
      bikePopupFunction(index)
    })
  })