let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let numberTwo = arr.filter( element => element === 2 )
console.log('numberTwo : ', numberTwo)

arr.map(element => console.log('element : ', element) )


arr.map(element => {
  if (element >= 5 && element <= 7) {
    console.log('valid number : ', element) 
  }
})


console.log('\n=================================')
let finalNumber = 0
finalNumber = arr.some((element, index) => {
  console.log('searching.... ', element)
  if (element === 4) {
    console.log('encontre tu numero!!')
    return element
  }
})

console.log('\n finalNumber : ', finalNumber)

console.log('\n=================================')
var BreakException = {};

try {
  [1, 2, 3].forEach(function(el) {
    console.log(el);
    if (el === 2) throw BreakException;
  });
} catch (e) {
  if (e !== BreakException) throw e;
}