// var
// const
// let

// var name = 'Thiem';

// console.log('name', name);
// getName();
// console.log('name', name);

//  function getName() {
//   name = 'Minh';
//   // var name = "Minh"
//   console.log('name in func', name);
// }

// const greeting = function(params) {
//   console.log("hi i'm anonymous func");
// };

// // arrow func
// const getNameArrow = (person = 'Thiem') => {
//   console.log(' arrow this is: ', this);
// };

// function getName(person) {
//   console.log('this is: ', this);
// }

// // bind this in function
// a = {
//   getNameArrow: (person = 'Thiem') => {
//     console.log(' arrow this is: ', this);
//   },
//    getName: function(praram) {
//     console.log('this is: ', this, );
//   }
// };

// a.getNameArrow();
// a.getName();

// (function (person) {
//   console.log('name: ', person);
// })('name')

const passParamsFunc = (params, callback) => {
  console.log(params, callback);
  console.log('name is: ', params.name);
  console.log('age is: ', params.age);
  console.log('address is: ', params.address);
  callback();
};

const doWhileDone = () => console.log('done!!!!')

passParamsFunc({ name: 'John', age: 18, address: 'washington' }, doWhileDone);
