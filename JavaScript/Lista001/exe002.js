/* 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
-- Equilátero: Os três lados são iguais.-- Isósceles:  Dois lados iguais.
-- Escaleno: Todos os lados são diferentes---.Crie uma função que recebe os comprimentos dos
três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados.
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

function oTrianguloE(lado1, lado2, lado3) {
      
    const equilatero = lado1 == lado2 ?  lado1 == lado3 ? true : false : false 
    const escaleno = lado1 != lado2 && lado1 != lado3 && lado2 != lado3 ? true : false
    const isoceles = equilatero == escaleno ? true : false   

    if(equilatero) {
        console.log('O triangulo é Equilátero tem todos seus lados iguais!')
    }
    if(escaleno){
        console.log('O triangulo é Escaleno tem todos os lados diferentes!')
    } 
    if(isoceles){
        console.log('O triangulo é Isósceles tem apenas dois lados iguais!')
    }   
}

oTrianguloE(10,1,1)