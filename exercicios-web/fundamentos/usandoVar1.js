{
    {
        {
            { 
                var sera = 'Será???'  // Váriavel VAR dentro de um bloco que NÃO SEJA UMA FUNÇÃO ficará visivel pra todo mundo
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
}

teste()
// console.log(local) --ERRO--- VAR dentro de uma função não ficara visivel fora dela