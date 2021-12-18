const fontRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

fontRef.addEventListener("input", (event) => {
  spanRef.style.fontSize = event.currentTarget.value + "px";
});
