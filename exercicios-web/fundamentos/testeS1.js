const removeVowel = (string) => {

    let arrayOutput = []

    string.split("").forEach(e => {

        if (e != "a" && e != "A" && e != "e" && e != "E" && 
            e != "i" && e != "I" && e != "o" && e != "O" && 
            e != "u" && e != "U") arrayOutput.push(e)

    })

    return arrayOutput.join("")
}

// Tests
console.log(removeVowel("Society"))