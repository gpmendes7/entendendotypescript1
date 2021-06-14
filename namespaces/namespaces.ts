namespace Areas {
  const PI = 314

  export function circuferencia(raio: number): number {
    return PI * Math.pow(raio, 2)
  }

  export function retangulo(base: number, altura: number): number {
    return base * altura
  }
}

const PI = 2.99

console.log(Areas.circuferencia(10))
console.log(Areas.retangulo(10, 20))
console.log(PI)