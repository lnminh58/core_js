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

const greeting = function(params) {
  console.log("hi i'm anonymous func");
};

// arrow func
const getNameArrow = (person = 'Thiem') => {
  console.log(' arrow this is: ', this);
};

function getName(person) {
  console.log('this is: ', this);
}

// bind this in function
a = {
  getNameArrow: (person = 'Thiem') => {
    console.log(' arrow this is: ', this);
  },
  getName: function(person) {
    console.log('this is: ', this);
  }
};

a.getNameArrow();
a.getName();

(function(person) {
  console.log('name: ', person);
})('name');

const passParamsFunc = (param, callback) => {
  console.log(param, callback);
  callback();
};
passParamsFunc({ name: 'aloalo', age: 15, add: 'NewYork' }, () => {
  console.log('done');
  console.log('Blo');
});
