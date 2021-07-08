const removeVowel = (string) => {
    return string.replace(/[aeiouà-ú]/gi,'');
    }

 console.log(removeVowel("Society"))

const removeVogal = (string) => {

    let newString = ''
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] == 'a' || string[i] == 'A' || string[i] == 'e' || string[i] == 'E'){
            
        } else if(string[i] == 'i' || string[i] == 'I' || string[i] == 'o' || string[i] == 'O') { 
            
        } else if (string[i] == 'u' || string[i] == 'U'){
            
        }else {
            newString += string[i]
        }
    }
    return newString
}

console.log(removeVogal('Society'))