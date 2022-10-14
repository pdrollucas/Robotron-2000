
const controle = document.querySelectorAll ("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const corAtual = document.querySelector('[data-cor-robo]');
const botoesCor = document.querySelectorAll('[data-opcao-cor]');

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

function manipulaDados (operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-"){
     peca.value = parseInt (peca.value) - 1
    } 
    else {
     peca.value = parseInt (peca.value) + 1
    }
}

function atualizaEstatisticas (peca, operacao){
    if(operacao === "+"){
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt (elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })} else {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt (elemento.textContent) - pecas[peca] [elemento.dataset.estatistica]
    })}
}

function alteraCorRobo(cor) {
    corAtual.src = `img/robotron-${cor}.png`
}

function alteraEstiloBotao(botao) {
    document.querySelector('[data-cor-ativa]').removeAttribute('data-cor-ativa');
    botao.setAttribute('data-cor-ativa', '');
}

botoesCor.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        corEscolhida = e.target.dataset.opcaoCor;
        alteraCorRobo(corEscolhida);
        alteraEstiloBotao(botao);
    });
});
