/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []  */


// Não gostei dessa primeira que fiz pois não retorna o cojunto de letras contido no meio das palavras ex: script, não retorna javascript
const buscarPalavrasSemelhantes2 = (palavra, array) => { return array.filter( e => e.substring(0, palavra.length) === palavra )}


// Então fiz essa que achei bem melhor pois retorna até o conjunto de letras contido no meio das palavras e não é case-sensitive 
const buscarPalavrasSemelhantes = (palavra, array) => { return array.filter( e => e.toLowerCase().indexOf(palavra.toLowerCase()) > - 1 )}



console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])) // retornará []
console.log(buscarPalavrasSemelhantes("Script", ["javascripT", "java", "c++"])) // retornará ["javascripT"]