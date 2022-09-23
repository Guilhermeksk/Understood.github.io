
// chek de usuario
const nameField = document.querySelector('input');

nameField.addEventListener('input', () => {
  nameField.setCustomValidity('');
  nameField.checkValidity();
    console.log(nameField.checkValidity());

});

nameField.addEventListener('invalid', () => {
  nameField.setCustomValidity('Please fill in your First Name.');
})


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
