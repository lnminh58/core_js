//object

const JohnPerson = {
  name: 'John',
  age: 18,
  address: 'Washington, D.C',
  sex: null,
  parent: undefined,
  friend: {
    boy: 'hell'
  },
  'school.class': '10A',
  introduce: function(isFull) {
    return !!isFull
      ? `my name is ${this.name}, i'am ${this.age}. My address is ${this.address}`
      : `My name is ${this.name}`;
  },

  greeting: () => `arrow func, cann't see my name ${this.name}`
};

// const johnParent = JohnPerson.parent || { name: 'Jack'} // &&
// console.log(JohnPerson.introduce());
// console.log(JohnPerson.greeting());

// // reference object

// // const JackPerson = johnPerson
// const JackPerson = {
//   ...JohnPerson,
//   friend: {
//     girl: 'ana',
//   }
// };
// JackPerson.age = 19;
// JackPerson.friend.boy = 'holl'
// console.log(JackPerson, JohnPerson);

console.log(JohnPerson['name']);
console.log(JohnPerson);
console.log(Object.keys(JohnPerson));
Object.keys(JohnPerson).forEach(function(item, index) {
  console.log(item, index);
  console.log(JohnPerson[item]);
});


console.log(Object.values(JohnPerson))

const arrField = Object.keys(JohnPerson).map(item => ({
  [item]: JohnPerson[item]
}))

console.log(arrField)
