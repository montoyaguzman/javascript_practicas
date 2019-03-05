function findMissingLetter(array)
{
  let currentLetter = 0
  let nextLetter = 0
  let missingLetter = 0
  let work = true
  
    missingLetter = array.map(function(letter, position) {
      
      if (position == 0 && work === true){
        // console.log("inicio")
        currentLetter = letter.charCodeAt(0) + 1  
        nextLetter = array[1].charCodeAt(0)
      }
      
      else if (position > 0 && position < array.length-1 && work === true) {
        // console.log("mitad")
        currentLetter = letter.charCodeAt(0)+1
        nextLetter = array[position+1].charCodeAt(0)
      }
      
      else if (position === array.length-1  && work === true) {
        // console.log("ultimo")
        currentLetter = letter.charCodeAt(0)
        nextLetter = array[array.length-1].charCodeAt(0)
      }
      
      
      console.log("currentLetter", currentLetter)
      console.log("nextLetter", nextLetter)
      
      if (currentLetter !== nextLetter) {
        console.log("termino en ====>", position)
        work = false
        // console.log("no termine...", position)
      }
     
      
    })
    
    
  let lett = String.fromCharCode(currentLetter).toString()
  console.log("====> ", lett)
  return lett
  
}