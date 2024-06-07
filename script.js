let slides = [
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
  {
    slideImage: "./assets/dufalak.png",
    slideLink:
      "https://www.rigla.ru/c/dufalak-lend-0424?utm_source=Natiscope&utm_medium=cpc&utm_content=main&utm_term=350903&utm_campaign=rigla_dph_2024&erid=2SDnjdPXvcH",
    slideAdvertaiser:
      'Рекламодатель ООО "Ригла" ИНН 772411288 ERID: 2SDnjdPXvcH',
    slideDescription: "Слабительное Дюфалак&copy; для взрослых и детей 0+",
  },
];

let sliderFrame = document.querySelector(".carousel-wrapper-inner");

function initSlides() {
  if (!slides || !slides.length) return;
  slides.forEach((slide, index) => {
    let slideDiv = `<div class="carousel-slide">
    <img src=${slide.slideImage} alt="img">
    <a class="carousel-link" target="_blank"
        href=${slide.slideLink}></a>
    <div class="pop-up">
        <div class="pop-up-inner">
            <div class="pop-up-text">
                ${slide.slideAdvertaiser}
            </div>
            <button class="close-button">&times;</button>
        </div>
    </div>
    <div class="slide-inner">
        <div class="slide-header">
            <div class="slide-header-title">Реклама</div>
            <div class="slide-header-button">
                <div class="button-dot"></div>
                <div class="button-dot"></div>
                <div class="button-dot"></div>
            </div>
        </div>
        <div class="slide-descripion">${slide.slideDescription}</div>
    </div>
</div>
    `;
    sliderFrame.innerHTML += slideDiv;
  });
}
initSlides();

function nextSlide() {
  document.querySelector(".carousel-wrapper-inner").style.animation = "none";
  setTimeout(() => {
    document.querySelector(".carousel-wrapper-inner").style.animation =
      "slide forwards 2s 1";
  }, 10);
}

function prevSlide() {
  document.querySelector(".carousel-wrapper-inner").style.animation = "none";
  setTimeout(() => {
    document.querySelector(".carousel-wrapper-inner").style.animation =
      "slideReverse 2s 1";
  }, 10);
}

let btns = document.querySelectorAll(".slide-header-button");
let closeBtns = document.querySelectorAll(".close-button");
let popups = document.querySelectorAll(".pop-up");

function togglePopup() {
  let index = Array.from(btns).indexOf(this);
  popups[index].classList.toggle("visible");
}
function closePopup() {
  let index = Array.from(closeBtns).indexOf(this);
  popups[index].classList.remove("visible");
}

btns.forEach((btn) => btn.addEventListener("click", togglePopup));
closeBtns.forEach((btn) => btn.addEventListener("click", closePopup));
// ......................

const hiddenBtn = document.querySelector(".carousel-control-prev");
const hiddenRightBtn = document.querySelector(".carousel-control-next");

function handleMouseOver() {
  document.querySelector(".carousel-control-prev").style.animation =
    "appear forwards 1s 1";
  document.querySelector(".carousel-control-next").style.animation =
    "leftAppear forwards 1s 1";
}
function handleMouseLeave() {
  document.querySelector(".carousel-control-prev").style.animation =
    "disappear forwards 1s 1";
  document.querySelector(".carousel-control-next").style.animation =
    "LeftDisappear forwards 1s 1";
}

document
  .querySelector(".carousel-wrapper")
  .addEventListener("mouseover", handleMouseOver);
document
  .querySelector(".carousel-wrapper")
  .addEventListener("mouseleave", handleMouseLeave);
