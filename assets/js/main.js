// Random Background
let landing = document.querySelector(".landing");
let bgArray = ["../../assets/image/slider-01.jpg", "../../assets/image/slider-02.jpg", "../../assets/image/slider-03.jpg"];

setInterval(() => {
  let random = bgArray[Math.floor(Math.random() * bgArray.length)];
  landing.style.backgroundImage = 'url("../../assets/image/' + random +'")';
}, 3000);

// scroll to top
let scrollToTop = document.querySelector(".scroll-to-top");
let btn = document.querySelector(".up");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    scrollToTop.style.display = "block";
    scrollToTop.style.opactiy = "1";
  } else {
    scrollToTop.style.opactiy = "0";
    scrollToTop.style.display = "none";
  }
});

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};