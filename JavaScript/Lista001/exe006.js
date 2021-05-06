/* 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
 de aplicação. Aprimeira função retornará o montante da aplicação financeira sob o regime de
 juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.*/

const jurosSimples = (inicial, taxa, tempo) => { return (inicial  + (inicial * taxa * tempo)).toFixed(2) }

const jurosComposto = (inicial, taxa, tempo) => { return (inicial * (1 + taxa)**tempo).toFixed(2) }


console.log(jurosSimples(1000, 0.1, 3))
console.log(jurosComposto(1000,0.1,3))