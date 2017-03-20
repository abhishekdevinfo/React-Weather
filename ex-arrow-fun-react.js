var names = ['abhi','jaat', 'chao'];

// names.forEach(function (name) {
//   console.log('foreach', name);
// });

// names.forEach((name) => {
//   console.log('arrow', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Abhishek'));

// var person = {
//   name: 'Abhishek',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }

// person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addStatement(10, 10));
console.log(addExpression(10, 100));
