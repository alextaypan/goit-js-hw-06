const inputRef = document.querySelector("#validation-input");
const dataRef = inputRef.getAttribute("data-length");

const onBlurInput = (classV, classI) => {
  inputRef.classList.add(classV);
  inputRef.classList.remove(classI);
};

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === Number(dataRef)) {
    onBlurInput("valid", "invalid");
    return;
  }
  onBlurInput("invalid", "valid");
});
