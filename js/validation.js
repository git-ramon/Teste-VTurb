const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const senha = document.getElementById('senha')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs(){
  const firstnameValue = firstname.value.trim()
  const lastnameValue = lastname.value.trim()
  const emailValue = email.value.trim()
  const senhaValue = senha.value.trim()

  const regexemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const regexsenha = /^[0-9]{1,}$/;

  if(firstnameValue == ''){
    errorValidation(firstname, 'Por favor, Preencha este campo!')
  }else{
    successValidation(firstname, 'Muito Bom!')
  }

  if(lastnameValue == ''){
    errorValidation(lastname, 'Por favor, Preencha este campo!')
  }else{
    successValidation(lastname, 'Muito Bom!')
  }

  if(emailValue == ''){
    errorValidation(email, 'Por favor, Preencha este campo!')
  }else if(regexemail.test(emailValue)){
    successValidation(email, 'Muito Bom!')
  }else{
    errorValidation(email, 'Por favor, Insira um Email Valido!') 
  }

  if(senhaValue == ''){
    errorValidation(senha, 'Por favor, Preencha este campo!')
  }else if(regexsenha.test(senhaValue)){
    successValidation(senha, 'Muito Bom!')
  }
  else{
    errorValidation(senha, 'Por favor, Digite apenas numeros!')
  }
}

function errorValidation(input, errormessage){
  const valid = input.parentElement;
  const small = valid.querySelector('small')

  small.innerText = errormessage

  valid.className = 'col-md-4 mb-3 valid error';
}

function successValidation(input, successmessage){
  const valid = input.parentElement;
  const smallsuccess = valid.querySelector('.smallsuccess')

  smallsuccess.innerText = successmessage

  valid.className = "col-md-4 mb-3 valid success"
}


/*function validar() {
  const firstname = formvalidation.firstname.value;
  const lastname = formvalidation.lastname.value;
  const email = formvalidation.email.value;
  const senha = formvalidation.senha.value;
  
    if (firstname == '' || lastname == '' || email.value == '') {
        console.log("Por favor, preencha todos os dados antes de continuar");
    }


  if (firstname == "") {
    console.log('Preencha o campo com seu nome');
    formvalidation.firstname.focus();
    return false;
  }

  if (email == "") {
    console.log('Preencha o campo com seu email');
    formvalidation.email.focus();
    return false;
  }

  if (senha == "") {
    console.log('Preencha o campo com sua senha');
    formvalidation.senha.focus();
    return false;
  }

  if (rep_senha == "") {
    console.log('Repita sua senha');
    formvalidation.lastname.focus();
    return false;
  }

  if (firstname.length < 5) {
    console.log('Digite seu nome compconsto');
    formvalidation.nome.focus();
    return false;
  }

  if (senha != lastname) {
    console.log('Senhas diferentes');
    formvalidation.senha.focus();
    return false;
  }
}*/