/* 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada
 ao expoente.*/

const baseElevadaNegativa = (base, expo) => {
    let result = base
    for(let i = 1; i < expo; i++ ){
        result *= base        
    } 
    return result
}

const baseElevada = (base, expo) => { 
    let result = expo <= 0 ? expo == 0 ? 1 : (1/baseElevadaNegativa(base,-expo)) : base
    for(let i = 1; i < expo; i++ ){
        result *= base        
    } 
    console.log(`${base} elevado a ${expo} = ${result}`)
}

baseElevada(3,5)
baseElevada(2,0)
baseElevada(8,-3)