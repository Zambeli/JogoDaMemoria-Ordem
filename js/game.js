const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

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

let firstCard = ''
let secondCard = ''

const criarElemento = (tag,classe) => {
    const elemento = document.createElement(tag)
    elemento.className = classe
    return elemento
}

const gameOver = () => {
    const cartasDesabilitadas = document.querySelectorAll('.disabled-card')

    if (cartasDesabilitadas.length === 20) {
        clearInterval(this.loop)
        alert(`Parabens ${spanPlayer.innerHTML}! seu tempo foi: ${timer.innerHTML}`)
    }
}

const checkCard = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = ''
        secondCard = ''

        gameOver()

    } else {
        
        setTimeout (() => {

            firstCard.classList.remove('ativo')
            secondCard.classList.remove('ativo')

            firstCard = '';
            secondCard = '';

        }, 500)
    }


    }

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('ativo')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('ativo')
        firstCard = target.parentNode
    } else  if (secondCard === '') {
        target.parentNode.classList.add('ativo')
        secondCard = target.parentNode
    }

    checkCard()

}

const criarCartas = (personagem) => {
    const card = criarElemento('div','card')
    const front = criarElemento('div','face front')
    const back = criarElemento('div','face back')

    front.style.backgroundImage = `url('./assets/${personagem}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.setAttribute('data-character', personagem)
    card.addEventListener('click', revealCard)

    return card
}

const loadGame = () => {

    const personagensDuplicados = [...personagens,...personagens]
    const personagemSeparados = [...personagensDuplicados.sort(() => Math.random() - 0.5)]


    personagemSeparados.forEach((personagem) => {
        const card = criarCartas(personagem);
        grid.appendChild(card)
    })

}

const startTimer = () => {

    this.loop = setInterval(() => {

        const correntTime = +timer.innerHTML;
        timer.innerHTML = correntTime + 1

    },1000)

}

window.onload = () => {

    const playerName = localStorage.getItem('player')

    spanPlayer.innerHTML = playerName

    startTimer()
    loadGame()

}