let newCssBg = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let rand = document.getElementById("random");
let iconButtons = document.getElementsByClassName("btn-icons");
let iconDirection;

for (let iconButton of iconButtons) {
  iconButton.addEventListener("click", changeGradientDirection);
}

function changeGradientDirection(event) {
  let buttonOrIconElement = event.target;
  if (buttonOrIconElement.tagName === "BUTTON") {
    buttonOrIconElement = buttonOrIconElement.children[0];
  }
  const iconClassThatContainsDirectionInformation =
    buttonOrIconElement.classList[1];

  if (iconClassThatContainsDirectionInformation === "fa-square-caret-down") {
    iconDirection = "to bottom";
  } else if (
    iconClassThatContainsDirectionInformation === "fa-square-caret-up"
  ) {
    iconDirection = "to top";
  } else if (
    iconClassThatContainsDirectionInformation === "fa-square-caret-left"
  ) {
    iconDirection = "to left";
  } else if (
    iconClassThatContainsDirectionInformation === "fa-square-caret-right"
  ) {
    iconDirection = "to right";
  } else {
    console.log("default");
  }

  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

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
