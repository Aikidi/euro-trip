'use strict';
const navToggle = document.querySelector('.main-nav__toggle');
const navMain = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 3,
});

class Tabs {
  constructor(){
    this.tabList = document.querySelectorAll('.tabs__tab-item');
    this.contentList = document.querySelectorAll('.tabs__content-item');
    let nav = document.querySelector('.tabs');

    nav.addEventListener('click', e => this.show(e));

    this.setIndex();
  }

  show(e){
    let t = e.target;
    if (!t.classList.contains('tabs__tab-item')) return;
    this.removePrev();

    let index = t.getAttribute('data-index');
    let content = document.querySelector('.tabs__content-item[data-index="'+index+'"]');

    t.classList.add('tabs__tab-item--active');
    content.classList.add('tabs__content-item--active');
  }

  setIndex(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].setAttribute('data-index', i);
      this.contentList[i].setAttribute('data-index', i);
    }
  }

  removePrev(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].classList.remove('tabs__tab-item--active');
      this.contentList[i].classList.remove('tabs__content-item--active');
    }
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new Tabs();
})

const modalBuy = document.querySelector('.modal--buy');
const modalSuccess = document.querySelector('.modal--success');
const modalBuyPhone = modalBuy.querySelector('.modal__form-field--phone');
const feedbackForm = document.querySelector('.feedback__form');
const modalForm = document.querySelector('.modal__form');
const modalCloseButton = document.querySelector('.modal__close-button');
const tourButtons = document.querySelectorAll('.tour__button');
const pricesButtons = document.querySelectorAll('.prices__button');

const closeModalBuy = () => {
  modalBuy.classList.remove('modal--open');
  modalBuy.classList.add('modal--closed');
}

const isPhoneValid = () => {
  modalBuyPhone.setCustomValidity('');
  let phoneNumber = modalBuyPhone.value ;
  let phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  var isphone = phoneRegExp.test(phoneNumber);
  if (!isphone&&(modalBuyPhone.value.length>1)){
    modalBuyPhone.setCustomValidity('Not valid');
  };
  modalBuyPhone.reportValidity();
}

const openModalBuy = () => {
  document.addEventListener('click', onOutOfModalBuy);
  modalBuy.classList.remove('modal--closed');
  modalBuy.classList.add('modal--open');
}

const closeModalSuccess = () => {
  modalSuccess.classList.remove('modal--open');
  modalSuccess.classList.add('modal--closed');
}

const openModalSuccess = () => {
  document.addEventListener('click', onOutOfModalSuccess);
  modalSuccess.classList.remove('modal--closed');
  modalSuccess.classList.add('modal--open');
}

modalBuy.querySelector('.modal__close-button').addEventListener('click', () => {
  closeModalBuy();
})

modalSuccess.querySelector('.modal__close-button').addEventListener('click', () => {
  closeModalSuccess();
})

feedbackForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  openModalSuccess();
})

modalForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  openModalSuccess();
  closeModalBuy();
})

for (let pricesButton of pricesButtons) {
  pricesButton.addEventListener('click', () => {
    openModalBuy();
  })
}

for (let tourButton of tourButtons) {
  tourButton.addEventListener('click', function(evt) {
    openModalBuy();
  })
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
  console.log("Esc")
};

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    closeModalBuy();
    closeModalSuccess();
  }
};

document.addEventListener('keydown', onModalEscKeydown);

const onOutOfModalBuy = (evt) => {
if (
    (!evt.target.classList.contains('modal'))
    && (!modalBuy.contains(evt.target))
    && (!evt.target.classList.contains('page-button'))
    ) {
    closeModalBuy();
  };
}

const onOutOfModalSuccess = (evt) => {
if (
    (!evt.target.classList.contains('modal'))
    && (!modalSuccess.contains(evt.target))
    && (!evt.target.classList.contains('page-button'))
    ) {
      closeModalSuccess();
  };
}

const feedbackButton = document.querySelector('.feedback__button');
feedbackButton.addEventListener('click', function() {
  feedbackForm.classList.add('valid-check');
})

const feedbackFieldPhone = document.querySelector('.feedback__field--phone');
const feedbackFieldEmail = document.querySelector('.feedback__field--email');
const modalFormFieldPhone = document.querySelector('.modal__form-field--phone');
const modalFormFieldEmail = document.querySelector('.modal__form-field--email');

const showInvalid = (evt) => {
  evt.target.parentElement.classList.add('invalid');
}

feedbackFieldPhone.addEventListener('blur', function(evt) {
  feedbackFieldPhone.parentElement.classList.remove('invalid');
})
feedbackFieldPhone.addEventListener('invalid', function(evt) {
  showInvalid(evt);
})

feedbackFieldEmail.addEventListener('blur', function(evt) {
  feedbackFieldEmail.parentElement.classList.remove('invalid');
})
feedbackFieldEmail.addEventListener('invalid', function(evt) {
  showInvalid(evt);
})

modalFormFieldPhone.addEventListener('blur', function(evt) {
  modalFormFieldPhone.parentElement.classList.remove('invalid');
})
modalFormFieldPhone.addEventListener('invalid', function(evt) {
  showInvalid(evt);
})

modalFormFieldEmail.addEventListener('blur', function(evt) {
  modalFormFieldEmail.parentElement.classList.remove('invalid');
})
modalFormFieldEmail.addEventListener('invalid', function(evt) {
  showInvalid(evt);
})

const modalFormButton = document.querySelector('.modal__form-button');
modalFormButton.addEventListener('click', function() {
  modalForm.classList.add('valid-check');
})
