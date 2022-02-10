let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');
let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .navbar');
let header = document.querySelector('.header');

searchBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
};

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
};

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  navBar.classList.remove('active');

  if (window.scrollY > 650) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  let value = window.scrollY / 10;
  document.querySelector('.home .mountains').style.bottom = `${-value}%`;
  document.querySelector('.home .content').style.bottom = `${value}%`;
  document.querySelector('.home .moon').style.marginTop = `${-value}%`;
  document.querySelector('.home .cloud-1').style.left = `${-value}%`;
  document.querySelector('.home .cloud-2').style.right = `${-value}%`;
};
