const cores = [
    {
        nome: 'Amarelo Limpo',
        corantes: [['Amarelo' , 12]]
    },
    {
        nome: 'Amarelo Suave',
        corantes: [['Amarelo' , 3], ['Laranja' , 1]]
    },
    {
        nome: 'Amarelo Sujo',
        corantes: [['Amarelo' , 10] , ['Ocre' , 10]]
    },

    {
        nome: 'Laranja Limpo',
        corantes: [['Laranja' , 12]]
    },
    {
        nome: 'Laranja Amarelado',
        corantes: [['Amarelo' , 4] , ['Laranja' , 6], ['Ocre' , 6]]
    },
    {
        nome: 'Laranja Claro',
        corantes: [['Castanho' , 1] , ['Laranja' , 6], ['Ocre' , 15]]
    },
    {
        nome: 'Laranja Avermelhado',
        corantes: [['Amarelo' , 4] , ['Ocre' , 10]]
    },

    
    {
        nome: 'Vermelho Limo',
        corantes: [['Vermelho' , 12]]
    },
    {
        nome: 'Vermelho Sujo',
        corantes: [['Vermelho' , 4], ['Castanho' , 10]]
    },


    {
        nome: 'Rosa Claro',
        corantes: [['Vermelho' , 1]]
    },
    {
        nome: 'Rosa Sujo',
        corantes: [['Vermelho' , 9] , ['Azul' ,2 ], ['Castanho' , 5]]
    },
    {
        nome: 'Rosa Intenso',
        corantes: [['Vermelho' , 14], ['Azul' , 1]]
    },
    {
        nome: 'Lilás',
        corantes: [['Vermelho' , 2], ['Azul' , 1]]
    },


    {
        nome: 'Azul Limpo',
        corantes: [['Azul', 12]]
    },
    {
        nome: 'Azul Claro',
        corantes: [['Azul', 1]]
    },
    {
        nome: 'Azul Médio',
        corantes: [['Azul', 4]]
    },
    {
        nome: 'Azul Avermelhado',
        corantes: [['Vermelho', 9] , ['Azul', 12]]
    },


    {
        nome: 'Verde Limpo',
        corantes: [['Verde' , 12]]
    },
    {
        nome: 'Verde Claro',
        corantes: [['Verde' , 5] , ['Castanho', 1]]
    },
    {
        nome: 'Verde Escuro',
        corantes: [['Verde' , 4] , ['Preto', 10]]
    },
    {
        nome: 'Verde Acinzentado',
        corantes: [['Vermelho' , 4] , ['Verde', 13], ['Preto' , 2]]
    },
    {
        nome: 'Verde Amarelado',
        corantes: [['Verde' , 4] , ['Ocre', 13], ['Castanho', 2]]
    },

    {
        nome: "Bege",
        corantes: [["Ocre" , 12]]
    },
    {
        nome: "Bege Claro",
        corantes: [["Ocre" , 1] , ["Castanho" , 1]]
    },
    {
        nome: "Bege Intenso",
        corantes: [["Castanho" , 2], ["Preto" , 1]]
    },

    {
        nome: "Marrom",
        corantes: [["Castanho" , 12]]
    },
    {
        nome: "Marrom Intenso",
        corantes: [["Vermelho" , 1] , ["Castanho" , 18], ["Preto" , 1]]
    },
    {
        nome: "Marrom Avermelhado",
        corantes: [["Vermelho" , 1] , ["Castanho" , 5], ["Preto" , 1]]
    },
    {
        nome: "Marrom Acinzentado",
        corantes: [["Azul" , 4] , ["Preto" , 13], ["Castanho" , 2]]
    },
    {
        nome: "Marrom Esverdeado",
        corantes: [["Verde" , 5] , ["Castanho" , 10]]
    },
    {
        nome: "Cinza Escuro",
        corantes: [["Preto" , 12]]
    },
    {
        nome: "Cinza Claro",
        corantes: [["Preto" , 2]]
    },
    {
        nome: "Cinza Médio",
        corantes: [["Preto" , 3], ["Ocre" , 1]]
    }
]


let selectCores = document.querySelector('#select-cores')
let selecMlTinta = document.querySelector('#select-quantidade')
let respostaContainer = document.querySelector('.resposta-container')

function init() {
    for (const cor of cores) {
        const option = document.createElement('option')
        option.textContent = cor.nome
        selectCores.appendChild(option)
    }
}

function calculate() {
    respostaContainer.innerHTML = ''

    let mlTinta = selecMlTinta.value
    Number(mlTinta)

    let index = selectCores.selectedIndex
    let cor = cores[index]

    for (let corante of cor.corantes) {
        let mlCorante = corante[1] * 4.1666
        let resposta = (mlTinta * mlCorante) / 3600
        let p = document.createElement('p')
        p.textContent = `${corante[0]} -----> ${resposta.toFixed(4)}ml`
        respostaContainer.appendChild(p)
    }
}

init()