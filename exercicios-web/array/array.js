console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()  // Ele altera o array organizando, não gera um novo
console.log(aprovados)

delete aprovados[1] // remove o conteudo mas deixa a posição  como Undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // primeiro numero representa a onde vai começar e segundo numero representa quantos elementos vão ser excluidos, depois elemento1 e 2 são adcionados 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // primeiro numero representa a onde vai começar e segundo numero representa quantos elementos vão ser excluidos no caso nenhum então depois do primeiro elemento vai ser adicionado elemento1 e elemento2
console.log(aprovados)
