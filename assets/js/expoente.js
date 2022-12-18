const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const resultado = document.querySelector('#total')
const acoes = document.querySelector('#acoes')

function normal () {
  resultado.textContent = parseInt(numero1.value) ** parseInt(numero2.value)
}

function math_pow () {
  resultado.textContent = Math.pow(parseInt(numero1.value), parseInt(numero2.value))
}

const btnNormal = document.createElement('button')
btnNormal.setAttribute('class', 'btn')
btnNormal.textContent = 'Normal'
btnNormal.onclick = normal

const btnMathPow = document.createElement('button')
btnMathPow.setAttribute('class', 'btn')
btnMathPow.textContent = 'Math Pow'
btnMathPow.onclick = math_pow


acoes.append(btnNormal, btnMathPow)