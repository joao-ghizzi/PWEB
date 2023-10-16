function Retangulo(x, y) {
    this.x = x;
    this.y = y;

    this.calcArea = function() {
        return  this.x * this.y;
    }
}

var meuRetangulo = new Retangulo(10, 5);

console.log("Area do Retangulo = " + meuRetangulo.calcArea());

// parte 2
console.log("----------------------------------------------------------------");
console.log("Parte 2");
console.log("----------------------------------------------------------------");

class Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroDaConta = numeroDaConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(value) {
        this._nomeCorrentista = value;
    }

    get banco() {
        return this._banco;
    }

    set banco(value) {
        this._banco = value;
    }

    get numeroDaConta() {
        return this._numeroDaConta;
    }

    set numeroDaConta(value) {
        this._numeroDaConta = value;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroDaConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(value) {
        this._saldoEspecial = value;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroDaConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(value) {
        this._juros = value;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(value) {
        this._dataVencimento = value;
    }
}

let contaCorrente = new Corrente("João Antonio", "Banco Central", "123456", 1000, 500);
let contaPoupanca = new Poupanca("Martins Ghizzi", "Banco Central", "789101", 2000, 0.05, "2024-01-01");

console.log("Conta Corrente:");
console.log("Nome do Correntista:", contaCorrente.nomeCorrentista);
console.log("Banco:", contaCorrente.banco);
console.log("Número da Conta:", contaCorrente.numeroDaConta);
console.log("Saldo:", contaCorrente.saldo);
console.log("Saldo Especial:", contaCorrente.saldoEspecial);

console.log("\nConta Poupança:");
console.log("Nome do Correntista:", contaPoupanca.nomeCorrentista);
console.log("Banco:", contaPoupanca.banco);
console.log("Número da Conta:", contaPoupanca.numeroDaConta);
console.log("Saldo:", contaPoupanca.saldo);
console.log("Juros:", contaPoupanca.juros);
console.log("Data de Vencimento:", contaPoupanca.dataVencimento);