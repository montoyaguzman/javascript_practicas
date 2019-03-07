let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let numberTwo = arr.filter( element => element === 2 )
console.log('numberTwo : ', numberTwo)

arr.map((element) => {
  console.log('element : ', element)
})