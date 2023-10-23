function result() {
    let texto = document.getElementById('texto').value;
    let maiusculas = document.getElementById('maiusculas').checked;
    if (maiusculas) {
        texto = texto.toUpperCase();
    }
    document.getElementById('result').textContent = texto;

    return false; // Isso impede que o formulário seja enviado, evitando o recarregamento da página
}






