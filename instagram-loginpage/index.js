const body = document.querySelector('body');
const login = document.querySelector('.login-info');
const switchAcc = document.querySelector('.switch-acc-box')
const downloadApp = document.querySelector('.download-app')
const buttondark = document.querySelector('.button-darkmode')

function darkmode() { 
    if(buttondark.innerHTML == 'Ativar darkmode 🧛') {
        buttondark.innerHTML = 'Desativar darkmode 👻'
    } else {
        buttondark.innerHTML = 'Ativar darkmode 🧛'
    }   
    body.classList.toggle('dark-mode')
    login.classList.toggle('gray-mode')
    switchAcc.classList.toggle('gray-mode')
    downloadApp.classList.toggle('gray-text')
}