const input = document.querySelector('#nome');
const button = document.querySelector('#button');
const form = document.querySelector('.inicio__input')

const validateInput =  ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

const validateForm = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = './jogo.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', validateForm)