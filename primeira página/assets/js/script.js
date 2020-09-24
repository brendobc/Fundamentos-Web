let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    
    if (nome.value.length == 0) {
        txtNome.innerHTML = ""
        nomeOk = false
    } else if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {

    let txtEmail = document.querySelector("#txtEmail")
    
    if (email.value.length != 0) {
        if ((email.value.indexOf("@") == -1) || (email.value.indexOf(".") == -1)) {
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
        emailOk = false
        } else {
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }
    } else {
    txtEmail.innerHTML = ""
    emailOk = false 
    }
}

function validaAssunto() {

    let txtAssunto = document.querySelector("#txtAssunto")
    let qntCaracter = assunto.value.length

    if (qntCaracter > 100) {
        qntCaracter = qntCaracter - 100
        txtAssunto.innerHTML = "Limite excedido por " + qntCaracter + " caracteres"
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = ""
        assuntoOk = true
    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado!")
    } else {
        alert("Preencha os dados antes de enviar!")
    }
}

function mapaZoom() {

    mapa.style.width="650px"
    mapa.style.height="500px"
}

function mapaNormal () {
    
    mapa.style.width="400px"
    mapa.style.height="250px"
}