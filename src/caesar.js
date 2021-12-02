// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = ""
    let lowercaseInput = input.toLowerCase();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z'];
      if (shift === 0 || shift < -25 || shift > 25 || !input || !shift){
      return false 
    } else {
        if (encode === true){
    for (let i = 0; i < lowercaseInput.length; i++){
        let letter = lowercaseInput[i]
        if (!alphabet.includes(letter)){
          result += letter
        } else {
        let indexValue = alphabet.indexOf(letter);
        let newIndex = indexValue + shift;
        if (newIndex < 0){
          newIndex = newIndex + 26
        }
        if (newIndex > 26){
          newIndex = newIndex - 26
            }
        result += alphabet[newIndex];
          }
        }
      }
    }
    if (encode === false){
      for (let j = 0; j < lowercaseInput.length; j++){
        let letter = lowercaseInput[j]
        if (!alphabet.includes(letter)){
          result += letter
        } else {
        let indexValue = alphabet.indexOf(letter);
        let newIndex = indexValue - shift;
        if (newIndex < 0){
          newIndex = newIndex + 26
        }
        if (newIndex > 25){
          newIndex = newIndex - 26
        }
        result += alphabet[newIndex]
        }
      }
    }
    return result
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };