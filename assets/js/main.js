// Random Background
let landing = document.querySelector(".landing");
let bgArray = ["../../assets/image/slider-01.jpg", "../../assets/image/slider-02.jpg", "../../assets/image/slider-03.jpg"];

setInterval(() => {
  let random = bgArray[Math.floor(Math.random() * bgArray.length)];
  landing.style.backgroundImage = 'url("../../assets/image/' + random +'")';
}, 3000);