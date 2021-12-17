const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");

decrementBtnRef.addEventListener("click", function () {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});

incrementBtnRef.addEventListener("click", function () {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});
