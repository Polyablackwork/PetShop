const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    speed: 600,
    loop: true,
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  
    autoplay: window.innerWidth < 500,
  
    // breakpoints: {
    //    500: {
    //     autoplay: false
    //   },
    //   499: {
    //     autoplay: true 
    //   }
    // },
  });

  let a = document.querySelectorAll('a');

for (let element of a) {
  element.addEventListener('click', function (event) {
    const dataFancybox = this.dataset.fancybox;
    if( !Boolean(dataFancybox )) {
      event.preventDefault();
    }
  })
}

const btn = document.querySelector('.nav-btn');
const header = document.querySelector('.header__top');

btn.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});