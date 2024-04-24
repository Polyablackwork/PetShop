const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    speed: 650,
    loop: true,
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  
    autoplay: window.innerWidth < 500,
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
const header = document.querySelector('.header__wrapper');

btn.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});
