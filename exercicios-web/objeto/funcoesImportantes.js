const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a : 1 }
const o1 = {b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Dessa maneira também modifica o dest, o primeiro parametro é o objeto destino IMPORTANTE! SE QUISER CRIAR UM NOVO SEM MODIFICAR O ANTIGO É SO FAZER ASSIM   const obj = Object.assign({}, o1, o2) ---- REPRESENTANDO que agora o objeto destino é {} um novo objeto vazio e por isso não modifca os alvos

Object.freeze(obj)
obj.c = 1234
console.log(obj)