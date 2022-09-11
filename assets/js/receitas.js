const frutas = document.querySelector("#brigadeiroFrutas");
const gourmet = document.querySelector("#brigadeiroGourmet");
const tradicional = document.querySelector("#brigadeiroTradicional");
const salgados = document.querySelector("#salgados");
const tituloPrincipal = document.querySelector(".especidades__titulo");
const tituloTemp = "Especialidades";

let tituloSecundario = tituloPrincipal.innerHTML;

frutas.addEventListener("click", function () {
    const receitas = document.querySelector(".receitas__doces--frutas");
    receitas.style.visibility = "visible";
    frutas.style.marginLeft = "0";
    gourmet.style.visibility = "hidden";
    tradicional.style.visibility = "hidden";
    salgados.style.visibility = "hidden";
    tituloPrincipal.innerHTML = tituloTemp;
});

frutas.addEventListener("dblclick", function () {
    const receitas = document.querySelector(".receitas__doces--frutas");
    receitas.style.visibility = "hidden";
    gourmet.style.visibility = "visible";
    tradicional.style.visibility = "visible";
    salgados.style.visibility = "visible";
    tituloPrincipal.innerHTML = tituloSecundario;
});

gourmet.addEventListener("click", function () {
    const receitas = document.querySelector(".receitas__doces--gourmet");
    receitas.style.visibility = "visible";
    frutas.style.visibility = "hidden";
    gourmet.style.visibility = "visible";
    tradicional.style.visibility = "hidden";
    gourmet.style.marginLeft = "-44.95%";
    salgados.style.visibility = "hidden";
    tituloPrincipal.innerHTML = tituloTemp;
});

gourmet.addEventListener("dblclick", function () {
    const receitas = document.querySelector(".receitas__doces--gourmet");
    receitas.style.visibility = "hidden";
    frutas.style.visibility = "visible";
    tradicional.style.visibility = "visible";
    gourmet.style.marginLeft = "0px";
    salgados.style.visibility = "visible";
    tituloPrincipal.innerHTML = tituloSecundario;
});

tradicional.addEventListener("click", function () {
    const receitas = document.querySelector(".receitas__doces--tradicional");
    receitas.style.visibility = "visible";
    tradicional.style.marginLeft = "-92.95%";
    frutas.style.visibility = "hidden";
    gourmet.style.visibility = "hidden";
    salgados.style.visibility = "hidden";
    tituloPrincipal.innerHTML = tituloTemp;
});

tradicional.addEventListener("dblclick", function () {
    const receitas = document.querySelector(".receitas__doces--tradicional");
    receitas.style.visibility = "hidden";
    frutas.style.visibility = "visible";
    tradicional.style.marginLeft = "0px";
    gourmet.style.visibility = "visible";
    salgados.style.visibility = "visible";
    tituloPrincipal.innerHTML = tituloSecundario;
});

salgados.addEventListener("click", function () {
    const receitas = document.querySelector(".salgados");
    receitas.style.visibility = "visible";
    salgados.style.marginLeft = "-140.185%";
    tradicional.style.visibility = "hidden";
    frutas.style.visibility = "hidden";
    gourmet.style.visibility = "hidden";
    tituloPrincipal.innerHTML = tituloTemp;
});

salgados.addEventListener("dblclick", function () {
    const receitas = document.querySelector(".salgados");
    receitas.style.visibility = "hidden";
    frutas.style.visibility = "visible";
    tradicional.style.visibility = "visible";
    salgados.style.marginLeft = "0px";
    gourmet.style.visibility = "visible";
    tituloPrincipal.innerHTML = tituloSecundario;
});

const descritivoReceitas = document.querySelectorAll(".receitas__doces--lista");

descritivoReceitas.forEach((elementos,idx) => {
    elementos.addEventListener("mouseover",function(e){
        // console.log(e.target)
        const descrReceitas = document.querySelectorAll('.receitas__descricao')
        console.log(descrReceitas[idx].style.visibility='visible')
        });
    elementos.addEventListener("mouseout",function(e){
        // console.log(e.target)
        const descrReceitas = document.querySelectorAll('.receitas__descricao')
        console.log(descrReceitas[idx].style.visibility='hidden')
        });
    })

    // })
    // elemento.addEventListener("click", function (e) {
    //     console.log(e.target.innerText);
    // });
