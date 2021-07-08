// novo recurso do ES2015

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco: {
        logradouro : 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//const { conta: {ag, num} } = pessoa  --- ERRO só o ultimo dado pode ser criado sem  existir e não o filho daquele dado.... "Foi uma sequencia de tentativa de acessar coisas que não existem --- Se fosse só conta ele criaria mas como conta e seus dados ag e num não existem ele da erro por que o caminho não existe !!"
//console.log(ag, num)