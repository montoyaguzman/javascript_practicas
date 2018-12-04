const { taskOne, taskTwo } = require('./tasks')

async function main() {

  try {
    console.time('Measuring time...')
    const values = await Promise.all([taskOne(), taskTwo()])
    console.timeEnd('Measuring time...')
    console.log('Value one : ', values[0])
    console.log('Value two : ', values[1])
  } catch (e) {
    console.log(e)
  }
}

main()