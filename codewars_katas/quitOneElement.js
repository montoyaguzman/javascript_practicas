/*

Test.assertEquals(
  JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
  JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
);

*/

var moveZeros = function (arr) {
  
  let positionsToDelete = []
  let zeros = 0
  let cont = 0
  
  arr.map((element, index)=>{
    if(element === 0) {
      positionsToDelete.push(index)
      zeros++
    }
  })
  
  positionsToDelete.map((positionSearch, index) => {
    if (cont === 0) {
      arr.splice(positionSearch, 1)
    } 
    if (cont >= 1) {
      arr.splice(positionSearch-cont, 1)
    }
    cont++
  })

  while(zeros > 0) {
    arr.push(0)
    zeros--
  }
  
  return arr
  
}

// Best solution
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}