const getEmail = document.getElementById('email');
const getSenha = document.getElementById('senha');
const getButtom = document.querySelector('.botao');

getButtom.addEventListener('click', function(){
  if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456'){
    alert('Olá, Tryber!');
  }
  if (getEmail.value !== 'tryber@teste.com' && getSenha.value !== '123456'){
    alert('Login ou senha inválidos.');
  }
})