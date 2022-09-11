const form = document.querySelector("form");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

const foneCelular = document.querySelector("#numeroCelular");
const email= document.querySelector("#email");

foneCelular.addEventListener("change", () => {

    if((foneCelular.value).length!=11){
        confirm(`Telefone celular informado incorretamente (${(foneCelular.value).length} dígito(s)), favor verificar`)
        foneCelular.focus()
    }
});

email.addEventListener("change", () => {

    if(!validateEmail(email.value)){
        confirm(`Email informado incorretamente, favor verificar!!! Favor digitar no padrão nome@dominio.com ou .com.br`)
        email.focus()
    }

    
});

function validateEmail(email) {
    // const re = /\S+@\S+\.\S+/;
    const re = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    return re.test(email);
  }

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements["nome"];
    const celular = evento.target.elements["numeroCelular"];
    const whatsapp = evento.target.elements["whatsapp"];
    const email = evento.target.elements["email"];
    const mensagem = evento.target.elements["mensagem"];

    const itemAtual = {
        nome: nome.value.toUpperCase(),
        celular: celular.value,
        whatsapp: whatsapp.value,
        email: email.value.toLowerCase(),
        mensagem: mensagem.value.toLowerCase(),
    };
    itens.push(itemAtual);
    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    celular.value = "";
    whatsapp.checked = false;
    email.value = "";
    mensagem.value = "";
});
