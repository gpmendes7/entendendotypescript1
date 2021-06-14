"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 314;
        function circuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circuferencia = circuferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
