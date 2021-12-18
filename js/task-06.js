const inputRef = document.querySelector("#validation-input");
const dataRef = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length == dataRef) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
