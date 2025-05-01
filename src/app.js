import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


const suits = ["♦", "♥", "♠", "♣"]

window.onload = function () {
  generateCard();
  setInterval(generateCard, 10000);
}

window.generateCard = function () {
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
  const randomSuit = suits[Math.floor(Math.random() * suits.length)]


  let number = document.querySelector("#number")
  number.innerHTML = randomNumber
  if (randomSuit === "♥" || randomSuit === "♦") {
    number.style.color = "red"
  }
  let suitsElements = document.querySelectorAll(".suit")
  for (let i = 0; i < suitsElements.length; i++) {
    suitsElements[i].innerHTML = randomSuit

    if (randomSuit === "♥" || randomSuit === "♦") {
      suitsElements[i].style.color = "red"
    }
  }
};
window.applySize = function () {
  const width = document.getElementById("widthInput").value;
  const height = document.getElementById("heightInput").value;
  const card = document.getElementById("card");

  if (width) card.style.width = width;
  if (height) card.style.height = height;
};
