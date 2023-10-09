let idades = [];
let opinioes = [];
let sexos = {
    homem: 0,
    mulher: 0
};

function collectData() {
    let idade = document.getElementById('idade').value;
    let opiniao = document.getElementById('opiniao').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;

    idades.push(parseInt(idade));
    opinioes.push(parseInt(opiniao));
    sexos[sexo]++;

    calculateResults();
}

function calculateResults() {
    let totalIdade = idades.reduce((acc, idade) => acc + idade, 0);
    let media = totalIdade / idades.length;
    document.getElementById('mediaIdade').textContent = media.toFixed(2);

    document.getElementById('maisVelha').textContent = Math.max(...idades);
    document.getElementById('maisNova').textContent = Math.min(...idades);

    let qtdPessimo = opinioes.filter(op => op === 1).length;
    document.getElementById('responderamPessimo').textContent = qtdPessimo;

    let qtdOtimoBom = opinioes.filter(op => op === 3 || op === 4).length;
    let percentualOtimoBom = (qtdOtimoBom / opinioes.length) * 100;
    document.getElementById('porcentagemOtimoBom').textContent = percentualOtimoBom.toFixed(2);

    document.getElementById('qtdHomens').textContent = sexos.homem;
    document.getElementById('qtdMulheres').textContent = sexos.mulher;
}
