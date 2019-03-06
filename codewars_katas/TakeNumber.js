/*
Test.describe("Example Tests", function() {
  Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
  Test.assertSimilar(sumDigPow(10, 100),  [89])
  Test.assertSimilar(sumDigPow(90, 100), [])
  Test.assertSimilar(sumDigPow(90, 150), [135])
  Test.assertSimilar(sumDigPow(50, 150), [89, 135])
  Test.assertSimilar(sumDigPow(10, 150), [89, 135])
});
*/

function sumDigPow(a, b) {
  
  let arr = []
  let number
  let sumNumbers = 0
  
  for(let i = a; i <= b; i++) {
    number = i.toString()
    if (number.length === 1) {
      arr.push(i)
    } else {
      for(let j=0; j<number.length; j++) {
        sumNumbers += Math.pow(parseInt(number.charAt(j)), j+1) 
      }
      if(sumNumbers === i) { 
        arr.push(i)
      }
      sumNumbers = 0
    }
  }
  return arr
}
