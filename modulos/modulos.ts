// import { areaRetangulo } from './retangulo'
// import areaRetangulo from './retangulo'
import retangulo from './retangulo'
// import { areaCircunferecia } from './circunferencia'
import { areaCircunferecia as circ } from './circunferencia'

console.log('Módulo carregado...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))