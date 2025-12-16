function comecar(){

let minutos = 1;
let segundos = 0;

const elementoRelogio = document.querySelector('#relogio p');

const timer = setInterval(function() {

    if (minutos === 0 && segundos === 0) {
        clearInterval(timer);
        alert("Hora do intervalo!");
        return;
    }

    if (segundos === 0) {
        segundos = 59;
        minutos--;
    } else {
        segundos--; 
    }

    const minFormatado = String(minutos).padStart(2, '0');
    const segFormatado = String(segundos).padStart(2, '0');

    elementoRelogio.innerText = `${minFormatado}:${segFormatado}`;

}, 1000); // 1000 milissegundos = 1 segundo
}