
// chek de usuario
const btn = document.querySelector('#btn-login');
const btn2 = document.querySelector('#btn-login2');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const username2 = document.querySelector('#username2');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');


// area do usuario
btn.addEventListener('click', () => {
  if(username.value == '' || username.value == null || password.value == '' || password.value == null ){
    username.setCustomValidity('Você não preencheu todos os campos, por favor os preencha!');
    
  }else{
    window.location.href = "/html/home.html"
  }
  
})
//area de cadastro
btn2.addEventListener('click', () => {
  if(username2.value == '' || username2.value == null || password2.value == '' || password2.value == null ||email.value == ''||email.value == null){
    username2.setCustomValidity('Você não preencheu todos os campos, por favor os preencha!');
  }
})

email.addEventListener('change', () => {
  
})

username.addEventListener('change', () => {
  
})

password.addEventListener('change', () => {
  
})

username2.addEventListener('change', () => {
  
})

password2.addEventListener('change', () => {
})

//animação do cadastro
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});