let arr = [4, 5, 6, 7, 8, 9]

console.log('arr : ', arr)

// agregar al final
arr.push(10)
arr.push(11)
// eliminar al final
arr.pop()
// eliminar al inicio
arr.shift()

console.log('arr : ', arr)

//eliminar (pos, numElementos)
arr.splice(2,1)
console.log('arr : ', arr)

// obtener valores de otro array en uno nuevo
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
var citrus = fruits.slice(1, 3)
var copyFruits = fruits.slice(0)

console.log('fruits : ', fruits)
console.log('citrus : ', citrus)
console.log('copyFruits : ', copyFruits)