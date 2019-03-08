var list = ['My', 'name', 'is', 'Ben']

/*
for (var i = 0; i < list.length; i++) {
  console.log(list[i])
  if (list[i] === 'name') {break}
}
*/

/*
for (let elem of list) {
  console.log(elem)
  if (elem === 'name') {break}
}
*/

/*
function breakForOfLoop(arrayToBreak) {
  for (let elem of arrayToBreak) {
    console.log(elem)
    if (elem === 'name') {return false}
  }
}
breakForOfLoop(list)
*/

/*
list.every(function(elem) {
  console.log(elem)
  if (elem === 'name') {return false}
  return true;
})
*/

/*
list.some(function(elem) {
  console.log(elem); //result: "My","name"
  if (elem === 'name') {return true}
  return false;
})
*/

var BreakException = {};
try {
  list.map((element, index) => {
    console.log(`arr[${index}] : `, element)
    if (element === 'name') {
      throw BreakException
    }
  })
} catch (e) {
  if (e !== BreakException) throw e;
}