let arr = [4, 5, 6, 7, 8, 9]

console.log('arr : ', arr)

// agregar al final
arr.push(10)
arr.push(11)
// eliminar al final
arr.pop()
// eliminar al inicio
arr.shift()

// eliminar al inicio
arr.unshift(-1)

console.log('arr : ', arr)

//eliminar (pos, numElementos)
arr.splice(2,1)
console.log('arr : ', arr)

//encontrar posicion de un elemento, devuelve -1 si no lo encuentra
let pos = arr.indexOf(7)
console.log('pos : ', pos)

// obtener valores de otro array en uno nuevo
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
var citrus = fruits.slice(1, 3)
var copyFruits = fruits.slice(0)

console.log('fruits : ', fruits)
console.log('citrus : ', citrus)
console.log('copyFruits : ', copyFruits)


let evens = [2, 4, 6]
let total = evens.reduce((previous, next, indice) => {
  console.log('next : ', next)
  return previous + next
}, 0)
console.log('total : ', total)