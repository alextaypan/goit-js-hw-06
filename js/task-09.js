const bodyRef = document.body;
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

buttonRef.addEventListener("click", onClickBtn, getRandomHexColor);
function onClickBtn() {
  const changerColor = (bodyRef.style.backgroundColor = getRandomHexColor());
  spanRef.textContent = changerColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
