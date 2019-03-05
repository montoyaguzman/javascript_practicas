// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

function alphabetPosition(text) {
  
  let stringWithNumbers = ""
  let textUpperCase = text.toUpperCase()
  let isLetter = false
  let letter = ""
  let codeLetter = 0
  
  for (let i = 0; i < textUpperCase.length; i++) {    
    isLetter = /[A-Z]/i.test(textUpperCase.charAt(i))
    if (isLetter) {
      codeLetter = textUpperCase.charCodeAt(i) - 64
      console.log('codeLetter : ', codeLetter)
      stringWithNumbers+=codeLetter + " "
    } 
  }
  
    return stringWithNumbers.replace(/\s*$/,"")
    
}