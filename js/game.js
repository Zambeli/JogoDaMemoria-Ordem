const grid = document.querySelector('.grid')
const frontElement = document.querySelector('.front')

const personagens = [
    'agatha',
    'arthur',
    'dante',
    'elizabeth',
    'joui',
    'kaiser',
    'mia',
    'rubens',
    'thiago',
    'verissimo'
]

const personagensDuplicados = [...personagens,...personagens]

const criarElemento = (tag,classe) => {
    const elemento = document.createElement(tag)
    elemento.className = classe
    return elemento
}

const criarCartas = (personagem) => {
    const card = criarElemento('div','card')
    const front = criarElemento('div','face front')
    const back = criarElemento('div','face back')

    front.style.backgroundImage = `url('./assets/${personagem}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card)

    card.setAttribute('data-character', personagem)

    return card
}

personagensDuplicados.forEach((personagem) => {
    criarCartas(personagem)
})