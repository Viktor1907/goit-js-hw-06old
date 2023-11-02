const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, () => {
  const inpetValue = nameInput.value.trim();

  nameOutput.textContent = inpetValue || `Anonymous`;
});
