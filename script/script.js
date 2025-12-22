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


let minutos;
let segundos;
let intervalo;

function comecar() {

    if (intervalo) return;

    if ((minutos === undefined && segundos === undefined) || (minutos === 0 && segundos === 0)) {
        minutos = tempoFoco; 
        segundos = 0;
        minutos--;
        segundos = 59;
        document.querySelector('#relogio p').innerText = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }

    // 3. Inicia o loop
    intervalo = setInterval(function() {
        
        // Se acabou
        if (minutos === 0 && segundos === 0) {
            clearInterval(intervalo);
            intervalo = null;

            const audio = document.getElementById('alarme');
            audio.play();

            setTimeout(function() {
                alert("Acabou o tempo!");
            }, 100);
            return;
        }

        // Decrementa
        if (segundos === 0) {
            segundos = 59;
            minutos--;
        } else {
            segundos--; 
        }

        // Atualiza tela
        const minFormatado = String(minutos).padStart(2, '0');
        const segFormatado = String(segundos).padStart(2, '0');
        document.querySelector('#relogio p').innerText = `${minFormatado}:${segFormatado}`;

    }, 1000); 
}

function pause(){
   clearInterval(intervalo);
    intervalo = null;
}

