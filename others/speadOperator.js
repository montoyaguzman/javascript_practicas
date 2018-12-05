/*
Spread Operator
Funciona como un iterador de un arreglo.
Exapnde los elementos de un arreglo en elementos separados
y los agrega a un arreglo nuevo.

CASOS DE USO
1. Cuando se tiene una lista de elementos que no sea un array y
se requiera tratarlo como uno:  
    const arrayElements = [...elementos]
2. Para recibir un conjunto de parametos como un array:
    function nombres(lider, ...nombres) {
      ...
    }
    nombres('Victor'. 'Daniel', 'Jose')
3. Sacar elementos de un array
    let arr = ['Pedro', 'Valentina']
    console.log(...arr)
*/