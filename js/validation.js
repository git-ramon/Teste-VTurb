const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const senha = document.getElementById('senha')

form.addEventListener('submit', (e) => {
  e.preventDefault() // Altera alguns comportamentos nativo do navegador

  checkInputs()
})

function checkInputs(){
  const firstnameValue = firstname.value.trim()
  const lastnameValue = lastname.value.trim()
  const emailValue = email.value.trim()
  const senhaValue = senha.value.trim()

  const regexemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // Expressao regular que verifica padrao de email valido
  const regexsenha = /^[0-9]{1,}$/; // Expressao regular que verifica uma senha com apenas numeros

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

/* funçao quando os campos e preenchido incorretamente ou vazio */
function errorValidation(input, errormessage){
  const valid = input.parentElement;
  const small = valid.querySelector('small')

  small.innerText = errormessage

  valid.className = 'col-md-4 mb-3 valid error';
}

/* funçao quando os campos e preenchido corretamente */
function successValidation(input, successmessage){
  const valid = input.parentElement;
  const smallsuccess = valid.querySelector('.smallsuccess')

  smallsuccess.innerText = successmessage

  valid.className = "col-md-4 mb-3 valid success"
}