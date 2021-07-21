const getEmail = document.getElementById('email');
const getSenha = document.getElementById('senha');
const getButtom = document.querySelector('.botao');
const getChekbox = document.querySelector('#agreement');
const getButtomSubmit = document.querySelector('#submit-btn');

getButtom.addEventListener('click', function () {
  if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456'){
    alert('Olá, Tryber!');
  }
  if (getEmail.value !== 'tryber@teste.com' && getSenha.value !== '123456'){
    alert('Login ou senha inválidos.');
  }
});

getButtomSubmit.disabled = true;
getChekbox.addEventListener('click', function () {
  if (getChekbox.checked === true) {
    getButtomSubmit.disabled = false;
  } else if (getChekbox.checked === false) {
    getButtomSubmit.disabled = true;
  }
});
