/* 05)​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece
 quando faz oseguinte comando no console: console.log(0.1 + 0.2); 
 O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto
 é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazerum exercício simples para 
 mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript paraque ela receba 
 um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

function formataNumero(a,b){

    // Modo 1
    console.log("R$ " + ((a+b).toFixed(2).replace('.',',')))     
    // Modo 2  
    console.log((a+b).toLocaleString('pt-BR', {style :'currency', currency: 'BRL'})) 

}

formataNumero(0.1, 0.2)
formataNumero(0, 0.30000000000000004)