const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()   // Ela acha a const valor = 'Global', porque a função carrega consigo o local onde ela foi definida, então ela procura dentro do escopo lexico que ela foi definida 
}

exec()