function echo(objeto: any) {
  return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27 }))

function echoMelhorado<T>(objeto: T): T {
  return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome)

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)