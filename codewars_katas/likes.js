/*
describe('example tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
*/

function likes(names) {
  let users = names.length
  let others = names.length - 2
  let response = ""
  
  switch (users) {
    case 0:
      response = 'no one likes this'
    break;
    case 1:
      response = `${names[0]} likes this`
    break;
    case 2:
      response = `${names[0]} and ${names[1]} like this`
    break;
    case 3:
      response = `${names[0]}, ${names[1]} and ${names[2]} like this`
    break;
    case 4:
      response = `${names[0]}, ${names[1]} and ${others} others like this`
    break;
    default:
      response = `${names[0]}, ${names[1]} and ${others} others like this`
    break;
  }
  
  return response
  
}