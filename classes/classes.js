"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data;
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.05;
console.log(prod1.resumo());
const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
// carro1.velocidadeAtual = 300
// console.log('atual -> ' + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(`${f40.acelerar()}`);
console.log(`${f40.acelerar()}`);
console.log(`${f40.acelerar()}`);
console.log(`${f40.frear()}`);
console.log(`${f40.frear()}`);
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
