const container = document.querySelector('.container');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const form = document.querySelector('form');
const calcBtn = document.querySelector('button');
const result = document.querySelector('.result');

function associarIMC(imc) {
    if (imc < 18.5) {
       return 'Abaixo do peso';
    } 
    
    if (imc <= 24.9) {
        return 'Peso normal';
    } 
    
    if (imc <= 29.9) {
        return 'Sobrepeso';
    }
    
    if (imc <= 34.9) {
        return 'Obesidade grau 1';
    }
    
    if (imc <= 39.9) {
        return 'Obesidade grau 2';
    } 

    return 'Obesidade grau 3';
}

function mostrarResultado() {
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = peso/(altura**2);
    const categoria = associarIMC(imc);

    result.classList.add('invalid');

    if (!peso && !altura) {
        return 'Entrada inválida'
    }    
    if (!peso) {
        return 'Peso inválido';
    } 
    if (!altura) {
        return 'Altura inválida';
    } 
                    
    result.classList.remove('invalid');
    return `Seu IMC é ${imc.toFixed(2)} (${categoria})`;    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    result.innerHTML = mostrarResultado();
    result.classList.add('show');

})
