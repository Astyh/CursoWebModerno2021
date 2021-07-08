console.log(soma(3, 4)) // funciona porque o interpretador do js carrega todas funções em primeiro lugar

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // não pode ser chamada antes igual a function declaration, pois o interpretador do js só carrega function declaration em primeiro lugar, não "váriaveis" que recebem funções

// named function expression
const mult = function mult(x, y) { 
    return x * y
}
console.log(mult(3, 4)) // não funciona antes tbm pelo mesmo motivo