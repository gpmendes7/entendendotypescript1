"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from './retangulo'
// import areaRetangulo from './retangulo'
const retangulo_1 = __importDefault(require("./retangulo"));
// import { areaCircunferecia } from './circunferencia'
const circunferencia_1 = require("./circunferencia");
console.log('Módulo carregado...');
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferecia(2));
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
