function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

    if (Number.isNaN(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>Valor invalido, fale um numero entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
        `
    }
    else if (numero > numSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
    }
    else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>
        `
    }

    //Codigo do botão jogar novamente
    document.body.addEventListener('click', e => {
        if (e.target.id == 'jogar-novamente'){
            window.location.reload()
        }
    })
}