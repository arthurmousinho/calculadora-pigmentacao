let selectCores = document.querySelector('#select-cores')
let selecMlTinta = document.querySelector('#select-quantidade')
let modalOverlay = document.querySelector('.modal-overlay')

function gerarOptions() {
    for (const cor of Data) {
        const option = document.createElement('option')
        option.textContent = cor.nome
        selectCores.appendChild(option)
    }
}

gerarOptions()


function gerarResposta(tampinha, mlTinta) {
    let mlCorante = tampinha * 4.1666
    let resposta = (mlTinta * mlCorante) / 3600
    return resposta
}    

function addHtml(cor, resposta) {
    const container = document.querySelector('.modal .reposta-container')
    const div = document.createElement('div')
    div.innerHTML = `
        <p class="cor">${cor}</p>
        <p clas="ml">${resposta}ml</p>
    `
    container.appendChild(div)
}

function toggleModal() {
    const modalOverlay = document.querySelector('.modal-overlay')
    modalOverlay.classList.toggle('active')
}

function resetarContainer() {
    let container = document.querySelector('.modal .reposta-container')
    container.innerHTML = ''
}


function calcular() {

    resetarContainer()
    toggleModal()

    const mlTinta = selecMlTinta.value
    Number(mlTinta)

    const index = selectCores.selectedIndex
    const corEscolhida = Data[index]

    for (let corante of corEscolhida.corantes) {
        let resposta = gerarResposta(corante[1], mlTinta)
        addHtml(corante[0], resposta.toFixed(4))    
    }
}