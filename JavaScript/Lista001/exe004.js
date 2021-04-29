// 04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const imprimiDivisao = (num1, num2) => { return `${num1} dividido por ${num2} é = ${Math.trunc(num1/num2)} com o resto =  ${num1%num2}`}

console.log(imprimiDivisao(1234, 10))
console.log(imprimiDivisao(9,2))
console.log(imprimiDivisao(40,8))
console.log(imprimiDivisao(43, 5))