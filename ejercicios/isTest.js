// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);

function iqTest(numbers){
  console.log('numbers : ', numbers)
  let evens = 0
  let odds = 0
  let posEven = 0
  let posOdds = 0  
  let newArray = [] 
  let elemento = ""
  
  for(let i=0; i<numbers.length; i++) {
    elemento = numbers.charAt(i)
    if (elemento !== ' ') {
      if (numbers.charAt(i+1) !== ' ') {
        elemento +=  numbers.charAt(i+1)
        i+=2
      }
    } else {
      continue
    }
    newArray.push(parseInt(elemento))
  }
  
  console.log('newArray : ', newArray)
  
  newArray.map((number, position) => {
    
    if(number % 2 === 0) {
      evens++
      posEven = position + 1
    } else {
      odds++
      posOdds = position + 1
    }
    
  })
  
  if (evens === 1) { 
    console.log('par: ', posEven)
    return posEven
  }
  if (odds === 1) {
    console.log('none: ', posOdds)
    return posOdds
  }
  
}