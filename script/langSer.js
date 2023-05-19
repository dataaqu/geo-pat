const langsDivs = document.querySelectorAll(".langs");
const geoContent = document.querySelector(".lang__geo");
const engContent = document.querySelector(".lang__eng");

const footerList = document.querySelector(".footer_list");
const footerListEng = document.querySelector(".footer_list-eng");

const burgerEng = document.querySelector(".burger-eng");
const burgerGeo = document.querySelector(".burger-geo");

const engAboutUs = document.querySelector(".left-eng");
const geoAboutUs = document.querySelector(".left");

const contactGeo = document.querySelector(".contact");
const contactEng = document.querySelector(".contact-eng");

const teamGeo = document.querySelector(".team");
const teamEng = document.querySelector(".team-eng");

const serviceGeo = document.querySelector('.main');
const serviceEng = document.querySelector('.main-eng');




function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  location.reload(); // Reload the page to reflect the language change
}

// Get the stored language preference from local storage
let selectedLanguage = localStorage.getItem("language");

// Update the page based on the stored language preference
if (selectedLanguage === "geo") {
  // Show the Georgian version
  engContent.style.display = "none";
  geoContent.style.display = "block";

  footerList.style.display = "flex";
  footerListEng.style.display = "none";

  burgerEng.style.display = "none";
  burgerGeo.style.display = "block";

  geoAboutUs.style.display = "block";
  engAboutUs.style.display = "none";

  contactGeo.style.display = "flex";
  contactEng.style.display = "none";

  teamGeo.style.display = "block";
  teamEng.style.display = "none";

  serviceGeo.style.display = 'flex';
  serviceEng.style.display = 'none';

} else {
  // Show the English version
  geoContent.style.display = "none";
  engContent.style.display = "block";

  footerList.style.display = "none";
  footerListEng.style.display = "flex";

  burgerEng.style.display = "flex";
  burgerGeo.style.display = "none";

  geoAboutUs.style.display = "none";
  engAboutUs.style.display = "block";

  contactGeo.style.display = "none";
  contactEng.style.display = "flex";

  teamGeo.style.display = "none";
  teamEng.style.display = "block";

  serviceGeo.style.display = 'none';
  serviceEng.style.display = 'flex';
}
