(function() {
  "use strict";
  console.log("fired");

  let button = document.querySelector("#button");
  let burgerCon = document.querySelector("#burger-con");

  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  }

  button.addEventListener("click", hamburgerMenu, false);
})();

const img = document.querySelector(".imgimg");
const popup = document.querySelector(".popup");

img.addEventListener("mouseover", () => {
  popup.style.visibility = "visible";
});

img.addEventListener("mouseout", () => {
  popup.style.visibility = "hidden";
});

let meetButt = document.querySelectorAll('.butt-1-contact-us a');
let lightBoxContactUs = document.querySelector('#lightbox-contact-us');

function loadmeetData() {
  lightBoxContactUs.querySelector('h3').textContent = meetButt[this.dataset.member].headline;
  lightBoxContactUs.querySelector('p').textContent = meetButt[this.dataset.member].bio;
}

meetButt.forEach(hero => hero.addEventListener('click', loadmeetData));

let JullieteButt = document.querySelectorAll('.butt-1-contact-us a');
let lightBox1ContactUs = document.querySelector('#lightbox1-contact-us');

function loadJullieteData() {
  lightBox1ContactUs.querySelector('h3').textContent = JullieteButt[this.dataset.member].headline;
  lightBox1ContactUs.querySelector('p').textContent = JullieteButt[this.dataset.member].bio;
}

JullieteButt.forEach(hero => hero.addEventListener('click', loadJullieteData));

let nutritionalFactsBtn = document.getElementById("toggle-nutritional-facts");
nutritionalFactsBtn.addEventListener("click", toggleNutritionalFacts);

let nutritionalFacts2Btn = document.getElementById("toggle-nutritional-facts2");
nutritionalFacts2Btn.addEventListener("click", toggleNutritionalFacts2);

function toggleNutritionalFacts() {
  var nutritionalFacts = document.getElementById("nutritional-facts");
  nutritionalFacts.style.display = nutritionalFacts.style.display === "none" ? "block" : "none";
}

function toggleNutritionalFacts2() {
  var nutritionalFacts2 = document.getElementById("nutritional-facts2");
  nutritionalFacts2.style.display = nutritionalFacts2.style.display === "none" ? "block" : "none";
}

let reviews = {
  Review_1: {
    name: "Review_1",
    headline: "WE LOVE THIS PLACE",
    bio: "DROUGHTS ARE JUST PERFECT OVER HERE:",
  },
  Review_2: {
    name: "Review_2",
    headline: "CAN YOU MAKE DR NUT AT HOME PLEASEEEEEEEEE",
    bio: "PLEASE MAKE YOUR BEER STORE MOVABLE THAT CAN GET IT WITHOUT GOING ANYWHERE :",
  },
  Review_3: {
    name: "Review_3",
    headline: "THIS IS WHAT IS CALLED CLASSIC",
    bio: "BEST CLASSIC BEERS EVER:",
  },
  Review_4: {
    name: "Review_4",
    headline: "GREEN BEER IS THE BEST",
    bio: "BEERS WHICH ARE OF MY KIND:",
  },
};

let reviewsBtn = document.querySelectorAll('.reviews a');
let lightBoxReview = document.querySelector('#lightbox-review');

function loadReviewData() {
  lightBoxReview.querySelector('.name').textContent = reviews[this.dataset.review].name;
  lightBoxReview.querySelector('h3').textContent = reviews[this.dataset.review].headline;
  lightBoxReview.querySelector('p').textContent = reviews[this.dataset.review].bio;
}

reviewsBtn.forEach(hero => hero.addEventListener('click', loadReviewData));
