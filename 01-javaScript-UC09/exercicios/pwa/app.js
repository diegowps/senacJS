// script.js
function convertToFeet() {
    const meters = document.getElementById('meters').value;
    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');
    const funMessage = document.getElementById('fun-message');

    if (meters === '') {
        result.innerText = 'Por favor, insira um valor.';
        resultContainer.style.display = 'block';
        funMessage.innerText = '';
        return;
    }

    const feet = (meters / 0.3048).toFixed(2);
    result.innerText = `${meters} metros é igual a ${feet} pés.`;
    resultContainer.style.display = 'block';

    const messages = [
        'Você sabia que 1 metro é igual a 3.28084 pés? 🤓',
        'Conversão concluída com sucesso! 🚀',
        'Agora você está mais perto do sistema imperial! 🌍',
        'Medindo o mundo, um metro de cada vez! 👣'
    ];
    funMessage.innerText = messages[Math.floor(Math.random() * messages.length)];
}

function convertToMeters() {
    const feet = document.getElementById('feet').value;
    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');
    const funMessage = document.getElementById('fun-message');

    if (feet === '') {
        result.innerText = 'Por favor, insira um valor.';
        resultContainer.style.display = 'block';
        funMessage.innerText = '';
        return;
    }

    const meters = (feet * 0.3048).toFixed(2);
    result.innerText = `${feet} pés é igual a ${meters} metros.`;
    resultContainer.style.display = 'block';

    const messages = [
        'Você sabia que 1 pé é igual a 0.3048 metros? 🤓',
        'Conversão concluída com sucesso! 🚀',
        'Agora você está mais perto do sistema métrico! 🌍',
        'Medindo o mundo, um pé de cada vez! 👣'
    ];
    funMessage.innerText = messages[Math.floor(Math.random() * messages.length)];
}
