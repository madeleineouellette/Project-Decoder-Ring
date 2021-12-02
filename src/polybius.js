// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let result = "";
    let lowerCaseInput = input.toLowerCase();
    const numbers = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k", 
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 
    35: "x", 45: "y", 55: "z"}
    
    if (encode === true){
      for (let i = 0; i < lowerCaseInput.length; i++){
        let letter = lowerCaseInput[i];
        if (letter === " "){
          result += letter
        }
        if (letter === "i" || letter === "j"){
           result += 42
        }
      for (value in numbers){
        const number = numbers[value]
        if (letter === number){
          result += value
           }
          }
        }
      }
      if (encode === false) {
           let stringWithoutSpaces = lowerCaseInput.trim().split(" ").join("").length
          if (stringWithoutSpaces % 2 !=0){
            return false
          }
      for (let j = 0; j < lowerCaseInput.length; j++){
       if (lowerCaseInput[j] === " "){
       result += " "
    } else {
      let numberPair = lowerCaseInput[j] + lowerCaseInput[j+1]
      j++
      result += numbers[numberPair]     
         } 
        }
     }
    return result
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
