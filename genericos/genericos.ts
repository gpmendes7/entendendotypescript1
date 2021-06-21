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

function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number}>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 }
])
type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 }
])