let conta = 0
let pessoas = 0

const containput = document.querySelector("#conta")
containput. addEventListener("input", receberValorConta)

functionreceberValorConta(evento) 
{
    conta = Number(evento.target.value)
}


const pessoasinput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {

    const paragrafoErro =  document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
    if(evento.target.value === "0") {

    paragrafoErro.style.display = "block"
    divErro>setAtribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro>setAtribute("id", "")
        pessoas = Number(evento.target.value)

    }
}