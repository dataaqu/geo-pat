//elements

const menu = document.querySelector(".menu");
const test = document.querySelector(".second");
const btns = document.querySelectorAll(".btns");
const main = document.querySelector(".main");

const backdrop = document.querySelector(".backdrop");
const serviceCard = document.querySelectorAll(".service__card");
const xbtn = document.querySelector(".bx-x");
const contact = document.querySelector(".contact");

const tabs = document.querySelectorAll(".services__tab");
const tabsContainer = document.querySelectorAll(".services__tab-container");
const tabsContent = document.querySelectorAll(".services__content");

const faqItems = document.querySelectorAll(".faq__accordion-item");

const contentGeo = document.querySelector(".content-geo");
const contentEng = document.querySelector(".content-eng");

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
  main.classList.add("index");
  // contact.classList.toggle("none");
  // contentGeo.classList.toggle("index");
  // contentEng.classList.toggle("index");
  document.querySelector("body").classList.toggle("buger__menu-height");
});

//services section  main

tabsContainer.forEach((t) =>
  t.addEventListener("click", function (e) {
    const clicked = e.target.closest(".services__tab");
    if (!clicked) return;

    tabs.forEach((t) => t.classList.remove("services__tab--active"));
    tabsContent.forEach((c) => c.classList.remove("services__content--active"));

    clicked.classList.add("services__tab--active");

    document
      .querySelector(`.services__content--${clicked.dataset.tab}`)
      .classList.add("services__content--active");

    document
      .querySelector(`.services__content--${clicked.dataset.tab}-eng`)
      .classList.add("services__content--active");
  })
);

//   tabsContainer.addEventListener("click", function (e) {
//     const clicked = e.target.closest(".services__tab");

//     if (!clicked) return;

//     tabs.forEach((t) => t.classList.remove("services__tab--active"));
//     tabsContent.forEach((c) => c.classList.remove("services__content--active"));

//     clicked.classList.add("services__tab--active");

//     document
//       .querySelector(`.services__content--${clicked.dataset.tab}`)
//       .classList.add("services__content--active");
//   });
// }

// our team functionality

const teamCard = document.querySelectorAll(".team__card");
const teamModal = document.querySelector(".modal");
const teamBackdrop = document.querySelector(".modal-backdrop");

teamCard.forEach((btn) =>
  btn.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor='red';
    teamModal.style.visibility = "visible";
    teamBackdrop.style.visibility = "visible";

    let text = this.querySelector(".decription").textContent;
    document.querySelector(".modal__description").textContent = text;
  })
);

xbtn.addEventListener("click", function () {
  teamModal.style.visibility = "hidden";
  teamBackdrop.style.visibility = "hidden";
  document.querySelector("body").style.backgroundColor='white';
});
