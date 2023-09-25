function jogar(escolhaDoJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escoComp =  opcoes[Math.floor(Math.random() * 3)];
    let result = '';
    if (escoComp == escolhaDoJogador)
    {
        result = "Empate!!!";
    } 
    else{
        switch(escolhaDoJogador){
        case('pedra'):
            result = escoComp === 'tesoura' ? "Você venceu!!!!" : "Você perdeu :("
            break;

        case('papel'):
            result = escoComp === 'papel' ? "Você venceu!!!!" : "Você perdeu :("
            break;

        case('tesoura'):
            result = escoComp === 'pedra' ? "Você venceu!!!!" : "Você perdeu :("
            break;
        }
    }
    document.getElementById('result').innerText = `Computador escolheu ${escoComp}. ${result}`;

}