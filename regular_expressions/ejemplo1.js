// compila al cargar el script
let regularExpression = /ab+c/
// compila en tiempo de ejecución
let dynamicRegularExpression = new RegExp('ab+c')

let paragraph = 'Esto es lenguaje javascript'
let exp = /javascript/
let response = paragraph.match(exp)
console.log('response : ', response)





