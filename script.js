const calBtn = document.querySelector("#calculate-btn");
const resetBtn = document.querySelector("#reset-btn");
const wage = document.querySelector("#wage");
const years = document.querySelector("#years");
const price = document.querySelector("#price");
const outputHrs = document.querySelector(".hours-output");
const outputWealth = document.querySelector(".wealth-output");
const barCost = document.querySelector("#bar-cost");
const barWealth = document.querySelector("#bar-wealth");

calBtn.addEventListener("click", function () {
  let w = parseFloat(wage.value);
  let y = parseFloat(years.value);
  let p = parseFloat(price.value);
  let hours = calculateHours(p, w);
  let wealth = calculateWealth(p, y);
  if (isNaN(hours) || isNaN(wealth)) return;
  else {
    outputHrs.textContent = hours.toFixed(1) + " hours";
    outputWealth.textContent = "₹ " + wealth.toFixed(2);
    updateGraph(p, wealth);
  }
});

resetBtn.addEventListener("click", function () {
  wage.value = "";
  years.value = "";
  price.value = "";
  console.clear();
  outputHrs.textContent = "0 hours";
  outputWealth.textContent = "₹0.00";
  barCost.style.height = "0%";
  barWealth.style.height = "0%";
});

function calculateHours(p, w) {
  let hours = p / w;
  console.log(hours);
  return hours;
}

function calculateWealth(p, y) {
  let r = 0.07;
  let value = p * Math.pow(1 + r, y);
  console.log(value);
  return value;
}

function updateGraph(p, wealth) {
  let maxValue = Math.max(p, wealth);

  let costHeight = (p / maxValue) * 100;
  let wealthHeight = (wealth / maxValue) * 100;

  barCost.style.height = costHeight + "%";
  barWealth.style.height = wealthHeight + "%";

  barWealth.style.backgroundColor = "#4f46e5";
  barCost.style.backgroundColor = "#ef4444";
}
