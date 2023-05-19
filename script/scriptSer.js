//elements

const menu = document.querySelector(".menu");
const test = document.querySelector(".second");
const btns = document.querySelectorAll(".btns");
const main = document.querySelector(".main");
const mainEng = document.querySelector(".main-eng");
const modal = document.querySelectorAll(".modal__box");

const backdrop = document.querySelectorAll(".backdrop");
const serviceCard = document.querySelectorAll(".service__card");
const xbtn = document.querySelectorAll(".bx-x");

const tabs = document.querySelectorAll(".services__tab");
const tabsContainer = document.querySelector(".services__tab-container");
const tabsContent = document.querySelectorAll(".services__content");

const faqItems = document.querySelectorAll(".faq__accordion-item");

//listeners

// change header background color while scrolling
function scrollHeader() {
  const header = document.querySelector(".header__content");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
//burger menu
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.classList.remove("no-animation");
  test.classList.toggle("burger");
  main.classList.toggle("index");
  mainEng.classList.toggle("index");
  document.querySelector("body").classList.toggle("buger__menu-height");
  modal.forEach((el) => (el.style.visibility = "hidden"));
  backdrop.forEach((el) => (el.style.visibility = "hidden"));
});

// faq functionality

faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".faq__accordion-header");

  faqHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const faqContent = item.querySelector(".faq__accordion-content");

  if (item.classList.contains("accordion-open")) {
    faqContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// services card functionaly

serviceCard.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let header = this.querySelector(".card__title").textContent;
    let text = this.querySelector(".card__decription").textContent;
    modal.forEach((el) => (el.style.visibility = "visible"));
    document
      .querySelectorAll(".modal__text")
      .forEach((el) => (el.textContent = header));
    document
      .querySelectorAll(".modal__desc")
      .forEach((el) => (el.textContent = text));

    backdrop.forEach((el) => (el.style.visibility = "visible"));
  })
);

xbtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.forEach((el) => (el.style.visibility = "hidden"));
    backdrop.forEach((el) => (el.style.visibility = "hidden"));
  })
);
