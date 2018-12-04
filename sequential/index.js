const { taskOne, taskTwo } = require('./tasks')

async function main() {

  try {
    console.time('Measuring time...')
    const val1 = await taskOne()  
    const val2 = await taskTwo()
    console.timeEnd('Measuring time...')
    console.log('Value one : ', val1)
    console.log('Value two : ', val2)
  } catch (e) {
    console.log(e)
  }
}

main()