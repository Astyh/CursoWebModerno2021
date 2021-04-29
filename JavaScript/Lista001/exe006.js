// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (inicial, taxa, tempo) => { return inicial  + ((inicial * taxa) * tempo) }
const jurosComposto = (inicial, taxa, tempo) => {
    let juros = 0   
    for(let i = 0; i < tempo; i++){
        juros =  inicial * taxa
        inicial += juros
    }
    return inicial
}

console.log(jurosSimples(1000, 0.1, 3))
console.log(jurosComposto(1000,0.1,3))