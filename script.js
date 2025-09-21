onload = () => {
  document.body.classList.remove("container");
};

const pauseBtn = document.querySelector('.pause-btn');
const scrollMenu = document.querySelector('.scroll-menu');
const closeBtn = document.querySelector('.close-btn');

pauseBtn.addEventListener('click', () => {
  scrollMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  scrollMenu.classList.remove('active');
});
