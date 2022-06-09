let newCssBg = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let rand = document.getElementById("random");

body.style.background =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

newCssBg.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  newCssBg.textContent = body.style.background + ";";
}

rand.addEventListener("click", generateRandomcolors);

function generateRandomcolors() {
  let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  newCssBg.textContent = body.style.background + ";";
  color1.value = randomColor1;
  color2.value = randomColor2;
}
