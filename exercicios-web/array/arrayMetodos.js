const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] 
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa removido de novo
console.log(pilotos)

// SLICE AGORA
const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array, a partir do indice 2 --- ele não modifica o array igual o sort()
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // começa da pos 1 e vai ate a quarta, mas n inclui a quarta
console.log(algunsPilotos2)

