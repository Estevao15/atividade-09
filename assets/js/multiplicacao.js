const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const resultado = document.querySelector('#total')
const acoes = document.querySelector('#acoes')

function multiplicacao () {
  resultado.textContent = parseInt(numero1.value) * parseInt(numero2.value)
}

const imgMultiplicacao = document.createElement('img')
imgMultiplicacao.alt = 'multiplicação'
imgMultiplicacao.src = 'assets/img/multiplicacao.png'
imgMultiplicacao.width = 32
imgMultiplicacao.height = 32
imgMultiplicacao.onclick = multiplicacao


acoes.append(imgMultiplicacao)