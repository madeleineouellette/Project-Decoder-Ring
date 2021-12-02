// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result = ""
    let lowercaseInput = input.toLowerCase();
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz"
    if (!alphabet || alphabet.length != 26){
      return false
    }
    let dictionary = {}
    for (let j = 0; j < alphabet.length; j++){
      if (Object.keys(dictionary).includes(alphabet[j])){
        return false
      }
      else {
        dictionary[alphabet[j]] = 0
      }
    }
    if (encode === true){
    for (let i = 0; i < lowercaseInput.length; i++){
        const letter = lowercaseInput[i]
        if (letter === " "){
          result += letter
        }
        let realAlphabetIndex = realAlphabet.indexOf(letter)
        let subAlphabetLetter = alphabet.charAt(realAlphabetIndex)
        result += subAlphabetLetter
      }
    }
    else if (encode === false){
    for (let i = 0; i < lowercaseInput.length; i++){
        const letter = lowercaseInput[i]
        if (letter === " "){
          result += letter
        }
        let subAlphabetIndex = alphabet.indexOf(letter)
        let realAlphabetLetter = realAlphabet.charAt(subAlphabetIndex)
        result += realAlphabetLetter
      }
    }
    return result
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };