function maiorNumero() {
    var numeros = [
        parseInt(document.getElementsByName('numero1')[0].value),
        parseInt(document.getElementsByName('numero2')[0].value),
        parseInt(document.getElementsByName('numero3')[0].value)];

    var maior = Math.max(...numeros);
    
    document.getElementById('result').innerText = `O maior número é: ${maior}`;
}

function ordemCrescente() {
    var numeros = [
        parseInt(document.getElementsByName('numero1')[0].value),
        parseInt(document.getElementsByName('numero2')[0].value),
        parseInt(document.getElementsByName('numero3')[0].value)];

    numeros.sort(function(a, b) {
        return a - b;
    });
    document.getElementById('result0').innerText = `Os numeros de forma decrescente ficam assim: ${numeros}`;
}

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    maiorNumero();
    ordemCrescente();
});
