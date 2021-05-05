'use strict';

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

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


class Tabs{
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


const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-button');
const tourButton = document.querySelector('.tour__button');
const pricesButton = document.querySelector('.prices__button');


modalCloseButton.addEventListener('click', function() {
  modal.classList.remove('modal--open');
  modal.classList.add('modal--closed');
})

tourButton.addEventListener('click', function() {
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--open');
})

pricesButton.addEventListener('click', function() {
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--open');
})
