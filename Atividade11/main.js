var aluno1 = new Object();
aluno1.ra = "00001234";
aluno1.nome = "Simao pedro";
alert("ra= " + aluno1.ra + " nome= " + aluno1.nome);

// usando {}
var aluno2 = {};
aluno2.ra = "1234";
aluno2["nome"] = "Kelly";
alert("ra " + aluno2.ra + " nome= " + aluno2.nome);

// literal
var aluno3 = {
    ra: "1234567",
    nome: "Henrique"
};
alert("ra= " + aluno3.ra + " nome = " + aluno3.nome);

// usando função construtora
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function() {
        return "ra= " + this.ra + " nome= " + this.nome;
    }
}

var aluno4 = new Aluno("123", "Lucas");
alert(aluno4.MostraDados());

var aluno5 = {};
        var nome_propriedade = 'ra';
        aluno5[nome_propriedade] = "12345";
        aluno5['nome'] = "João";
        alert(aluno5.ra + " " + aluno5.nome);