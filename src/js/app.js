import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//const portfolioCard = document.querySelectorAll('.projects__portfolio-card');
//const watchWindow = document.querySelector('.watch-window');

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
      const trigger = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);

       trigger.forEach(item => {
          item.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
          });
       });
 
       close.addEventListener('click', () => {
         modal.style.display = "none"
         document.body.style.overflow = "";
       });

       modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = "none"
          document.body.style.overflow = "";
        }
       });
    }
 
    bindModal('.stages__list-btn', '.modal__connect', '.modal__connect .modal__connect-close');
    bindModal('.stages__list-link', '.modal__connect', '.modal__connect .modal__connect-close');
 }
 
 modals();


const mobileNavButton = document.querySelector('.header__nav-button');
const mobileNavIcon = document.querySelector('.header__nav-button-icon');
const navWindow = document.querySelector('.nav-menu');

mobileNavButton.onclick = function() {
  mobileNavIcon.classList.toggle('active')
  navWindow.classList.toggle('active')
  document.body.classList.toggle('no-scroll')
}

/**/ 
let animItems = document.querySelectorAll('._animation');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect =el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll();
}

/**/
/*const showModalByTime = (selector, time) => {
  setTimeout(() => {
    document.querySelector(selector).style.display = 'block';
    document.body.style.overflow = "hidden";
  }, time);
}

showModalByTime('.modal__connect', 3000);*/

