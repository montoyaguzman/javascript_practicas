/*
let arr = [1, 2, 3, 4, 5]

for(let i = 0; i < arr.length; i++) {
  (i === arr.length - 1) ? console.log('num : ', arr[i]) :  console.log('pasando por el ultimo : ', arr[i])
}
*/

let arr = [ 8, 8, 8, 8, 8, 8, 7, 8 ]
console.log(findUniq(arr))

function findUniq(arr) {
  
  console.log('arr', arr)
  let aux = arr[0]
  let final = 0
  let flag = true
  
  arr.map((num, index) => {
  
    if(arr[0]!==arr[1] && arr[1]===arr[2] && flag){
      console.log('detecte diferencia..', index)
      final = index
      flag = false
    }
    
    if (index > 0 && num !== aux && flag) {
      console.log('detecte diferencia..')
      final = index
      flag = false
      console.log('final : ', final)
    }
    aux = num
  }) 
  return arr[final]
}
