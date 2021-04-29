// 12)​ Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (num) => { 
    let result = num
    for(let i = num-1; i > 0; i--) {
        console.log(`${i} x ${result} = ${i * result}`)
        result *= i        
    }
    console.log(`O fatorial de ${num} = ${result}`)
    console.log('-----------------------')
}

fatorial(9)
fatorial(8)
fatorial(7)
fatorial(15)
fatorial(10)