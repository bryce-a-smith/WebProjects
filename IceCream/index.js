"use strict";

function init() {
  //Get HTML elements into variables
  //inputs
  //number of scoops
  const numberOfScoopsInput = document.getElementById("number-of-scoops-input");
  //cone or cup
  const coneRadio = document.getElementById("cone-radio");
  const cupRadio = document.getElementById("cup-radio");
  //toppings
  const sprinklesCheckbox = document.getElementById("sprinkles-checkbox");
  const whippedCreamCheckbox = document.getElementById("whipped-cream-checkbox");
  const hotFudgeCheckbox = document.getElementById("hot-fudge-checkbox");
  const cherryCheckbox = document.getElementById("cherry-checkbox");
  //button
  const submitOrderButton = document.getElementById("submit-order-button");

  //outputs
  const basePriceAmount = document.getElementById("base-price-amount");
  const taxAmount = document.getElementById("tax-amount");
  const totalDueAmount = document.getElementById("total-due-amount");

  //Write functions
  function calculatePriceScoops(numOfScoops) {}

  function calculatePriceToppings() {}

  function displayCosts() {
    const numberOfScoops = Number(numberOfScoopsInput.value);
    const price = 2.25;
    if (numberOfScoops >= 1 && numberOfScoops <= 4) {
      price += (numberOfScoops - 1) * 1.25;
    } else {
      alert("Please enter a number between 1 and 4");
      return;
    }
  }

  //Wire-up functions
  if (submitOrderButton) {
    submitOrderButton.onclick = displayCosts;
  }
}

window.onload = init;
