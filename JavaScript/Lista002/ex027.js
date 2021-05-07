/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"} */


// Modelo 1 : 
const inverter = (obj) => { return Object.fromEntries(Object.entries(obj).map(chaveValor => chaveValor.reverse())) }


// Modelo 2 :
const inverter2 = (obj) => {
    let novoObjeto = {}
    Object.entries(obj).forEach((valores) => novoObjeto[valores[1]] = valores[0])

    return novoObjeto
}


let obj1 = { a: 1, b: 2, c: 3 }

console.log('Modelo 1 em execução:')
console.log(inverter(obj1)) // retornará { 1: "a", 2: "b", 3: "c"}
console.log('\nModelo 2 em execução:')
console.log(inverter2(obj1)) // retornará { 1: "a", 2: "b", 3: "c"}
console.log('\nObjeto original não foi modificado:')
console.log(obj1)