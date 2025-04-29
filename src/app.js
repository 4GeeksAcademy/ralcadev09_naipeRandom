import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["A", "2", "3", "4", "5","6","7","8","9","10","J", "Q", "K"]
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]

const suits = ["♦", "♥", "♠", "♣"]
const randomSuit = suits[Math.floor(Math.random() * suits.length)]

window.onload = function () {
    let number = document.querySelector("#number")
    number.innerHTML = randomNumber
if(randomSuit==="♥"||randomSuit==="♦"){
  number.style.color = "red"
}
    let suitsElements = document.querySelectorAll(".suit")
    for (let i = 0; i < suitsElements.length; i++) {
      suitsElements[i].innerHTML = randomSuit
      
      if(randomSuit==="♥"||randomSuit==="♦"){
        suitsElements[i].style.color = "red"
      }
    }



  };
