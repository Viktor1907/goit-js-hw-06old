const inputControl = document.querySelector("#font-size-control");
const spanTextElement = document.querySelector("#text");

xpanTextElement.style.fontSize = `${inputControl.value}px`;

inputControl.addEventListener("input", (event) => {
  spanTextElement.style.fontSize = `${event.currentTarget.value}px`;
});
