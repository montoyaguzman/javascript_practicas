let x = 0
let y = 0

function cicloWhile(x) {
  console.log("While")
  while(x<=5) {
    console.log(x)
    x++
  }
}

function cicloDoWhile(y) {
  console.log("While")
  do {
    console.log(y)
    y++
  } while (y<=5)
}

cicloWhile(x)
cicloDoWhile(y)
