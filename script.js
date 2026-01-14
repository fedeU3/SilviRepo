const messages = [
    "¿Tas segura?",
    "¿Tas muy muy segura?",
    "Bah",
    "Dale",
    "No seas malaaaaa",
    "Si seguis apretando no me corcheo en vivo",
    "Me corcheo en vivo",
    "Puto el que pone no",
    "¿Ah si?",
    "Si el siguiente boton que apretas no es el boton Si Tim Ohrstrom muere de manera violenta"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}