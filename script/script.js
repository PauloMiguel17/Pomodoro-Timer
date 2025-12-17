let tempoFoco = 25; 

// Lógica para abrir/fechar a engrenagem
document.getElementById('botao_config').addEventListener('click', function() {
    const painel = document.getElementById('painel_config');
    if (painel.style.display === 'block') {
        painel.style.display = 'none';
    } else {
        painel.style.display = 'block';
    }
});

// Lógica para salvar a configuração
document.getElementById('btn_salvar').addEventListener('click', function() {
    const inputValor = document.getElementById('input_foco').value;
    tempoFoco = parseInt(inputValor); // Atualiza a variável global
    
    // Atualiza o visual do relógio imediatamente
    document.querySelector('#relogio p').innerText = `${tempoFoco}:00`;
    
    // Fecha o painel
    document.getElementById('painel_config').style.display = 'none';
});



function comecar(){

let minutos = tempoFoco;
let segundos = 0;

const elementoRelogio = document.querySelector('#relogio p');

if(window.timerInterval) clearInterval(window.timerInterval)

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

function pause(){
    
}