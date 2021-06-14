"use strict";
var Areas;
(function (Areas) {
    const PI = 314;
    function circuferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circuferencia = circuferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
const PI = 2.99;
console.log(Areas.circuferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);
