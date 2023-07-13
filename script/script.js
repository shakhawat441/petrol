$(".bnr_pic").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-left left_arr"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right right_arr"></i>',
});
$(".slid_pic").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
});
let menu = document.querySelector(".menu");
window.addEventListener("scroll", function () {
  let count = window.scrollY;
  console.log(count);
  if (count > 122) {
    menu.classList.add("fixed");
  }
  else {
    menu.classList.remove("fixed")
  }

})
let btop = document.querySelector(".backtop");
window.addEventListener("scroll", () => {
  let count = window.scrollY;
  if (count > 250) {
    btop.classList.add("show")
  }
  else {
    btop.classList.remove("show")
  }
  btop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  });
})
