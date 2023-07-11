// scroll to top
let scrollToTop = document.querySelector(".scroll-to-top");
let btn = document.querySelector(".up");

window.addEventListener("scroll", () => {
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

// scroller progress
let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});