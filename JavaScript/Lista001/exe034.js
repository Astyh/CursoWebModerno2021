/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True 
ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam
contidos em ambas palavras. */

const comparaString = (str1, str2) => {
    return str1.toLowerCase().trim() === str2.toLowerCase().trim() ? true : false
}


console.log(comparaString('rafaEL', 'RAFAel'))
console.log(comparaString('   sabado  ', 'saBADO'))
console.log(comparaString('sexta', 'quinta'))
console.log(comparaString('café é muito bom', 'café é muito bom'))