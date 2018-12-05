function suma(x, y) {
  console.log('suma : ', x + y)
}

let nums = [5 , 7]
suma.apply(null, nums)

function sumaSpread(x, y) {
  console.log('suma2 : ', x + y)
}

let nums2 = [8 , 3]
sumaSpread(...nums2)