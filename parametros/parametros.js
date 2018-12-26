const people = {
  nombre: 'Jose Montoya',
  edad: 25
}
const contador = 1


// Los objetos son datos que se pasan por referencia,
// por lo tanto su valor global si cambia
function cumpleaños(people) {
  // people.edad += 1
  // return people
  return {
    ...people
    edad: people.edad + 1
  }
}

// Cuando un valor primitivo es pasado como parametro y afectado dentro de la funcion
// su valor global no createImageBitmap.
function suma(contador) {
  contador += 1
  return contador
}

console.log(cumpleaños(people))
console.log(cumpleaños(people))
console.log(cumpleaños(people))

console.log(suma(contador))
console.log(suma(contador))
console.log(suma(contador))

