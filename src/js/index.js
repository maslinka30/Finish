import '../scss/style.scss';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
Swiper.use(Pagination);


let swiper;
const swiperInit = function(){
  if(!swiper) {
    swiper = new Swiper('.swiper', {
  
    direction: "horizontal",
    slidesPerView: "auto",
    loop: true,
    effect: 'coverflow',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
}
};

const widthTablet = window.matchMedia('(max-width: 767px)');
const destroySwiper = function (event){
  if (!event.matches && swiper) {
    swiper.destroy();
    swiper = undefined;
  } else if (event.matches) {
    swiperInit();
  }
};
destroySwiper(widthTablet);
widthTablet.addEventListener('change',destroySwiper);


document.querySelector('.catalog__button').addEventListener('click', function() {
  const list = document.querySelector('.catalog__list');
  const icon = document.querySelector('.button__icon');
  
  list.classList.toggle('catalog__list--expanded');
  icon.classList.toggle('button__icon--rotated');
  
  const buttonText = document.querySelector('.button__text');
  buttonText.textContent = list.classList.contains('catalog__list--expanded') 
    ? 'Скрыть' 
    : 'Показать все';
});


function checkCatalogItems() {
  const list = document.querySelector('.catalog__list');
  const button = document.querySelector('.catalog__button');
  const items = document.querySelectorAll('.catalog__item');
  
  if (window.innerWidth >= 768 && window.innerWidth < 1120) {

    if (items.length <= 6) {
      list.classList.add('catalog__list--expanded');
      button.style.display = 'none';
    } else {
      button.style.display = 'flex';
    }
  } else if (window.innerWidth >= 1120) {
    
    if (items.length <= 8) {
      list.classList.add('catalog__list--expanded');
      button.style.display = 'none';
    } else {
      button.style.display = 'flex';
    }
  }
}
window.addEventListener('load', checkCatalogItems);
window.addEventListener('resize', checkCatalogItems);


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.catalogs__button').addEventListener('click', function() {
    const list = document.querySelector('.catalogs__list');
    const icon = document.querySelector('.buttons__icon');
    list.classList.toggle('catalogs__list--expanded');
    icon.classList.toggle('buttons__icon--rotated');
    const buttonText = document.querySelector('.buttons__text');
    buttonText.textContent = list.classList.contains('catalogs__list--expanded') 
      ? 'Скрыть' 
      : 'Показать все';
  });

  
  function checkCatalogItems() {
    const list = document.querySelector('.catalogs__list');
    const button = document.querySelector('.catalogs__button');
    const items = document.querySelectorAll('.catalogs__item');
    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      if (items.length <= 3) {
        list.classList.add('catalogs__list--expanded');
        button.style.display = 'none';
      } else {
        button.style.display = 'flex';
      }
    } else if (window.innerWidth >= 1120) {
      if (items.length <= 4) {
        list.classList.add('catalogs__list--expanded');
        button.style.display = 'none';
      } else {
        button.style.display = 'flex';
      }
    }
  }
  checkCatalogItems();
  window.addEventListener('resize', checkCatalogItems);
});

const burgerBtn = document.getElementById('burgerBtn');
const sidebarDialog = document.getElementById('sidebarDialog');
const closeBtn = document.getElementById('closeSidebar');
burgerBtn.addEventListener('click', () => {
  sidebarDialog.show();
});
closeBtn.addEventListener('click', () => {
  sidebarDialog.close();
});



const callbackModal = document.getElementById('callback__modal');
  const openCallbackBtn = document.getElementById('open__callback');
  const closeCallbackBtn = document.querySelector('.modal__close');
  openCallbackBtn.addEventListener('click', () => {
    callbackModal.classList.add('modal__overlay--active');
  });
  closeCallbackBtn.addEventListener('click', () => {
    callbackModal.classList.remove('modal__overlay--active');
  });
  callbackModal.addEventListener('click', (e) => {
    if (e.target === callbackModal) {
      callbackModal.classList.remove('modal__overlay--active');
    }
  });
  const callbackForm = document.getElementById('callback__form');
  callbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
    callbackModal.classList.remove('modal__overlay--active');
  });
  


const callbacksModal = document.getElementById('callback__modals');
const openCallbacksBtn = document.getElementById('open__callbacks');
const closeCallbacksBtn = document.querySelector('.modals__close');
const callbacksForm = document.getElementById('callbacks__form');
const submitButton = document.querySelector('.submits__button');
if (openCallbacksBtn && callbacksModal) {
  openCallbacksBtn.addEventListener('click', () => {
    callbacksModal.classList.add('modals__overlay--active');
    document.body.style.overflow = 'hidden'; 
  });
}
if (closeCallbacksBtn) {
  closeCallbacksBtn.addEventListener('click', () => {
    callbacksModal.classList.remove('modals__overlay--active');
    document.body.style.overflow = ''; 
  });
}
if (callbacksModal) {
  callbacksModal.addEventListener('click', (e) => {
    if (e.target === callbacksModal) {
      callbacksModal.classList.remove('modals__overlay--active');
      document.body.style.overflow = '';
    }
  });
}
if (submitButton && callbacksModal) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    if (!name || !phone) {
      alert('Пожалуйста, заполните обязательные поля (Имя и Телефон)');
      return;
    }
    alert('Форма отправлена! Мы скоро с вами свяжемся.');
    callbacksModal.classList.remove('modals__overlay--active');
    document.body.style.overflow = '';
    if (callbacksForm) {
      callbacksForm.reset();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const readMoreButton = document.querySelector('.content__reed');
  const textElements = {
    mobile: document.querySelector('.content__text'),
    tablet: document.querySelector('.content__text.desktop'),
    desktop: document.querySelector('.content__texts.desktop')
  };
  let isExpanded = false;
  readMoreButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (!isExpanded) {
      Object.values(textElements).forEach(el => {
        if (el) {
          el.style.display = 'flex';
          el.style.height = 'auto';
          el.style.overflow = 'visible';
        }
      });
      
      updateButton(true);
    } else {
      if (window.matchMedia('(min-width: 1125px)').matches) {
        textElements.mobile.style.display = 'none';
        textElements.tablet.style.display = 'flex';
        textElements.desktop.style.display = 'flex';
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        textElements.mobile.style.display = 'flex';
        textElements.tablet.style.display = 'flex';
        textElements.tablet.style.height = '2.5em';
        textElements.tablet.style.overflow = 'hidden';
        textElements.desktop.style.display = 'none';
      } else {
        textElements.mobile.style.display = 'flex';
        textElements.tablet.style.display = 'none';
        textElements.desktop.style.display = 'none';
      }
      
      updateButton(false);
    }
    
    isExpanded = !isExpanded;
  });
  function updateButton(expanded) {
    const link = readMoreButton.querySelector('.content__item-press');
    if (expanded) {
      link.textContent = 'Свернуть';
      link.style.setProperty('--icon-url', 'url(/img/general/collapse.svg)');
    } else {
      link.textContent = 'Читать далее';
      link.style.setProperty('--icon-url', 'url(/img/general/expand.svg)');
    }
  }

  window.addEventListener('resize', function() {
    if (!isExpanded) {
      if (window.matchMedia('(min-width: 1125px)').matches) {
        textElements.mobile.style.display = 'none';
        textElements.tablet.style.display = 'flex';
        textElements.desktop.style.display = 'flex';
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        textElements.mobile.style.display = 'flex';
        textElements.tablet.style.display = 'flex';
        textElements.tablet.style.height = '2.5em';
        textElements.tablet.style.overflow = 'hidden';
        textElements.desktop.style.display = 'none';
      } else {
        textElements.mobile.style.display = 'flex';
        textElements.tablet.style.display = 'none';
        textElements.desktop.style.display = 'none';
      }
    }
  });
});