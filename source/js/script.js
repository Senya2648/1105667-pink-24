var navMain =  document.querySelector('.main-nav');
var menuToggle = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header');
var openIcon = document.querySelector('.page-header__toggle-icon-open');
var closeIcon = document.querySelector('.page-header__toggle-icon-close');

pageHeader.classList.remove('page-header--nojs');

menuToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
navMain.classList.remove('main-nav--closed');
pageHeader.classList.add('page-header--dark');
openIcon.classList.add('page-header__toggle-icon--closed');
closeIcon.classList.remove('page-header__toggle-icon--closed');
} else {
navMain.classList.add('main-nav--closed');
pageHeader.classList.remove('page-header--dark');
openIcon.classList.remove('page-header__toggle-icon--closed');
closeIcon.classList.add('page-header__toggle-icon--closed');
}
});
