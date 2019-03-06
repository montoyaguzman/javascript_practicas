let person = {
    name: 'Jackie',
    age: 18,
    sex: 'M',
    height: 1.78
};
let student = {
    name: 'Daniel',
    sex: 'H',
    weight: 78
};

let newStudent = Object.assign({}, person, student)

console.log('person : ', person)
console.log('student : ', student)
console.log('newStudent : ', newStudent)