


let elementoInputCadastroUser = document.getElementById("inptCadastroUser")
let elementoInputCadastroPassword = document.getElementById("inptCadastroPassword")
let elementoInputCadastroEmail = document.getElementById("inptCadastroEmail")


let elementoInputLoginUser = document.getElementById("inptLoginUser")
let elementoInputLoginPassword = document.getElementById("inptLoginPassword")


let elementoLabelLista = document.getElementById("lblLista")

let opcoesMenu

let vetorUsers = []
let vetorPasswords = []
let vetorEmail = []

let userPesquisa 
let userPosicao
let listaDados = ''
let loginEfetuado = false



function Cadastrar() {

vetorUsers.push(elementoInputCadastroUser.value)
vetorPasswords.push(elementoInputCadastroPassword.value)
vetorEmail.push(elementoInputCadastroEmail.value)


MostraDadosConsole()
LimpaCamposCadastro()
}

function Login() {




    
    for(i=0; i < vetorUsers.length; i++){


         if(elementoInputLoginUser.value == vetorUsers[i] && elementoInputLoginPassword == vetorPasswords[i]){




               loginEfetuado = true








         }


    }        
    


    if(loginEfetuado == true){



  alert("login efetuADO")




    }

     elementoInputLoginUser.value
     elementoInputLoginPassword.value




    alert("LOGIN")
    
}



function Adicionar() {


    alert("adicionar")
    
}

function Remover() {




if(elementoInputCadastroUser.value == '' && elementoInputCadastroPassword.value == ' '){





alert('')




}else{


     vetorUsers.splice(userPosicao, 1)
     vetorPasswords.splice(userPosicao, 1)
     vetorEmail.splice(userPosicao, 1)
    

     LimpaCamposCadastro()
     MostraDadosConsole()

}


    
alert("remover")
}

function Editar() {




    if(elementoInputCadastroUser.value != vetorUsers[userPosicao]){


    alert('Não é possivel alterar o username.')


    }else{


        vetorPasswords[userPosicao] = elementoInputCadastroPassword.value
        vetorEmail[userPosicao] = elementoInputCadastroEmail.value

        MostraDadosConsole()
        LimpaCamposCadastro()


    }
    elementoInputCadastroPassword.value
    elementoInputCadastroEmail.value 

    vetorPasswords.push(elementoInputCadastroPassword.value)
    vetorPasswords.push(elementoInputCadastroEmail.value)
    
alert("editar")

}

function Pesquisar() {





    userPesquisa  = elementoInputCadastroUser.value
    userPosicao = vetorUsers.indexOf(userPesquisa)



     if(userPosicao != -1){



        elementoInputCadastroPassword.value = vetorPasswords[userPosicao]
        elementoInputCadastroEmail.value = vetorEmail[userPosicao]
        alert(`USER EXISTE NA POSIÇÃO ${vetorUsers.indexOf(userPesquisa)}`)

    }else{
        alert(`USUARIO NÃO EXISTE`)
        }





}

function Listar() {

listaDados = ' '


    for(i=0; i < vetorUsers.length; i++){


        listaDados += (`${vetorUsers[i]} - ${vetorPasswords[i]} - ${vetorEmail[i]}`) + '<br>'
        

        elementoLabelLista.innerHTML = listaDados

    }        
    

    
    
}


function LimpaCamposCadastro(){






    elementoInputCadastroUser.value = ' '
    elementoInputCadastroPassword.value = ' '
    elementoInputCadastroEmail.value = ' '





}



function MostraDadosConsole(){





    console.table(vetorUsers)
    console.table(vetorPasswords)
    console.table(vetorEmail)
    










}
















