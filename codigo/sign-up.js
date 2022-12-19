let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let labelrepeat = document.querySelector('#labelrepeat');
let pswrepeat = document.querySelector("#psw-repeat");
let validRepeat = false;

email.addEventListener("keyup", ()=>{
    if( email  <= 2){
        labelEmail.setAttribute ("Style, color red");
        labelEmail.innerHTML = '<strong> Insira no minino 3 caracteres</strong>'
        validEmail=false
    }
    else{
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = '<strong> Email </strong>'
        validEmail=true
    }
})

psw.addEventListener("keyup", ()=>{
    if( psw <= 4){
        labelsenha.setAttribute ("Style, color red");
        labelsenha.innerHTML = '<strong> Insira no minino 5 caracteres</strong>'
        validSenha=false
    }
    else{
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = ' <strong> Senha </strong>'
        validSenha=true
    }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href ='cadastro2.html'
    }, 1)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}



