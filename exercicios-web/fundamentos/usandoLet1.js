let numero = 1
let numero2 = 4
{
    let numero = 2
    console.log('Dentro =', numero)  // Let não é visivel fora do escopo do bloco também ele só existe lá, independente se é uma função ou não

    console.log('Pegando o de fora =', numero2) // Nesse caso ele procura a variavel numero dentro do escopo, mas como ele não á encontra ele procura a variavel do lado de fora do escopo... Ele sempre da preferencia pra variavel dentro do escopo mas se não acha ele busca ela fora do seu escopo
}
console.log('Fora =', numero)