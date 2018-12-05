const util = require('util')
const sleep = util.promisify(setTimeout)

module.exports = {
  async taskOne() {
    try {
      await sleep(4000)
      return 'One value'
    } catch (err) {
      console.log('error in taskOne: ', err)
    }
    
  },
  async taskTwo() {
    try {
      await sleep(2000)
      return 'Two value'
    } catch (err) {
      console.log('error in taskTwo: ', err)
    }
  }
}