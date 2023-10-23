let clicado = false; // Inicialização da variável

function mudaImagem() {
    if (!clicado) {
        document.getElementById("myImage").src = "img/1.png";
    }
}

function retornarImagemOriginal() {
    if (!clicado) {
        document.getElementById("myImage").src = "img/0.png";
    }
}

function janelaQuebrada() {
    if (clicado) {
        document.getElementById("myImage").src = "img/0.png";
        clicado = false;
    } else {
        document.getElementById("myImage").src = "img/2.png";
        clicado = true;
    }
}
