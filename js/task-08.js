const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formObjeect = {};

  formData.forEach((value, key) => {
    formObjeect[key] = value;
  });
  if (!formObjeect.email || !formObjeect.password) {
    alert("Всі поля повинні бути заповненні");
  } else {
    console.log(formObjeect);
    loginForm.requestFullscreen();
  }
});
