const container = document.querySelector('.container');
const peso = document.querySelector('#input1');
const altura = document.querySelector('#input2');
const form = document.querySelector('form');
const calcBtn = document.querySelector('button');
const result = document.querySelector('.result');

function associarIMC(imc) {
    let categoria;
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        categoria = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        categoria = 'Obesidade grau 2';
    } else {
        categoria = 'Obesidade grau 3';
    }

    return categoria;
}

function mostrarResultado() {
    const imc = peso.value/(altura.value**2);
    const categoria = associarIMC(imc);

    if (isNaN(Number(imc)) || (peso.value === '' || altura.value === '')) {
        result.classList.add('invalid');
        
        if (peso.value === '' && altura.value !== '' || isNaN(Number(peso.value)) && !isNaN(Number(altura.value))) {
            return 'Peso inválido';
        } else if (altura.value === '' && peso.value !== '' || isNaN(Number(altura.value)) && !isNaN(Number(peso.value))) {
            return 'Altura inválida';
        } 
            
        return 'Entrada inválida';         
    }

    result.classList.remove('invalid');
    return `Seu IMC é ${imc.toFixed(2)} (${categoria})`;    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    result.innerHTML = mostrarResultado();
    result.classList.add('show');

})
