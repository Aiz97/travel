document.addEventListener("DOMContentLoaded", () => {

    console.log(
      "общая сумма 110баллов для Travel part 1 \n Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css + 12\n Интерактивность, реализуемая через css +20"
    );
  /*burger menu*/
  let header__burger = document.querySelector(".header__burger");
  let header__menu = document.querySelector(".header__menu");
  let lock = document.querySelector("body");
  let header__list = document.querySelector(".header__list");
  let header__link = document.querySelectorAll(".header__link");

  header__burger.onclick = function () {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    lock.classList.toggle("lock");
  };

  header__list.onclick = function () {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    lock.classList.remove("lock");
  };
  /* slider  */

  $(".destinations__slider").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    initialSlide: 1,
  });
});