const alumnos = [
  { id: 1, nombre: 'José', apellido: 'Montoya' },
  { id: 2, nombre: 'Tania', apellido: 'Marroquin' },
  { id: 3, nombre: 'Carlos', apellido: 'Rodriguez' },
  { id: 4, nombre: 'Carlos', apellido: 'Vega' }
]

const numeros = [1, 2, 3, 4, 5, 6, 99]

function mapArray(array) {
  return array.map((alumno) => {
    if (alumno.id === 1) 
    console.log(alumno)
  })
}

//  MAL
/*function mapArray(array) {
  let alumno = array.map((alumno) => {
    if (alumno.id === 1) {
      return alumno
    }
    
  })
  console.log('map | alumno : ', alumno)
}*/

function findArray(array) {
  return console.log(array.find(alumno => alumno.id === 1))
}

function findArray(array) {
  let alumno = array.find(alumno => alumno.id === 1)
  console.log('find | alumno : ', alumno)
}

function filterArray(array) {
  return console.log(array.filter(alumno => alumno.nombre === 'Carlos'))
}

function filterArray2(array) {
  return console.log(array.filter(alumno => {
    return alumno.nombre === 'Carlos'
  })
  )
}

function indexOfArray(numeros) {
  let wasFound = numeros.indexOf(99)
  console.log(wasFound)
}

mapArray(alumnos)
findArray(alumnos)
filterArray(alumnos)
filterArray2(alumnos)
indexOfArray(numeros)