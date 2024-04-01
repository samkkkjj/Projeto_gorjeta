let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector("#conta")
containput. addEventListener("input", receberValorConta)

function receberValorConta(evento) 
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

const  botoesGorjeta = document.querySelectorAll(".gorjeta input[type= 'number']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)

}) 

function receberPorcentagem(evento) {

    botoesGorjeta. forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativo")
        }

    })


    if(evento.target.value !== "") {
        porcentagem =parseFloat(evento.target.value)/100
    } else {
        porcentagem= 0
    }

    porcentagem = parseFloat(evento.target.value) / 100
    
}

const orjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input",receberPorcentagem )

function calcular() {
        if(conta!== 0 && porcentagem !== 0 && pessoas !==0) {
            const strongGorjetaTotal = document.queryselector("gorjeta-total > strong")
            strongGorjetaTotal.innerHTML = `R$ $ {(conta * porcentagem / pessoas).toFixed(2)}`
            const strongTotal = document.querySelector(".total > strong")
            strongTotal.innerHTML = (conta = (conta * porcentagem)) /pessoas
        }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    containput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove(botao-ativo)
    })

    gorjetaInput.value = ""

    pessoasinput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$0.00"

    conta = 0
    porcentagem= 0
    pessoas = 0

}