let counterValue = 0;

let oldcounter = counterValue;
const counterDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
console.log(counterDecrement);
const counterIncrement = document.querySelector(
  'button[data-action="increment"]'
);
console.log(counterIncrement);

counterDecrement.addEventListener("clik", () => {
  counterValue -= 1;
  console.log(counterValue);
});
counterIncrement.addEventListener("clik", () => {
  counterValue += 1;
  console.log(counterValue);
});

if (counterValue !== oldcounter) {
  oldcounter = counterValue;
}
console.log(counterValue);
