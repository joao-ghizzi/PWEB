function result(params) {
    let texto = document.getElementById('texto').value;
    let maiusculas = document.getElementById('maiusculas').checked;
    if (maiusculas) {
        texto = texto.toUpperCase();
    }

}