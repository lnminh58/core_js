//object

// const JohnPerson = {
//   name: 'John',
//   age: 18,
//   address: 'Washington, D.C',
//   sex: null,
//   parent: undefined,
//   friend: {
//     boy: 'hell'
//   },
//   'school.class': '10A',
//   introduce: function(isFull) {
//     return !!isFull
//       ? `my name is ${this.name}, i'am ${this.age}. My address is ${this.address}`
//       : `My name is ${this.name}`;
//   },

//   greeting: () => `arrow func, cann't see my name ${this.name}`
// };

// // const johnParent = JohnPerson.parent || { name: 'Jack'} // &&
// // console.log(JohnPerson.introduce());
// // console.log(JohnPerson.greeting());

// // // reference object

// // // const JackPerson = johnPerson
// // const JackPerson = {
// //   ...JohnPerson,
// //   friend: {
// //     girl: 'ana',
// //   }
// // };
// // JackPerson.age = 19;
// // JackPerson.friend.boy = 'holl'
// // console.log(JackPerson, JohnPerson);

// console.log(JohnPerson['name']);
// console.log(JohnPerson);
// console.log(Object.keys(JohnPerson));
// Object.keys(JohnPerson).forEach(function(item, index) {
//   console.log(item, index);
//   console.log(JohnPerson[item]);
// });

// console.log(Object.values(JohnPerson))

// const arrField = Object.keys(JohnPerson).map(item => ({
//   [item]: JohnPerson[item]
// }))

// console.log(arrField)

// array

const persons = [
  { name: 'Minh', age: 26, sex: 'Male', isAdult: true },
  { name: 'Thiem', age: 26, sex: 'Male', isAdult: true },
  { name: 'Nhan', age: 15, sex: 'Female', isAdult: false },
  { name: 'Quyen', age: 12, sex: 'Male', isAdult: false }
];

// list all person has sex is 'Male'

const males = persons.filter(item => item.sex === 'Male');

console.log(males);

// find person has age = 15

const fivty = persons.find(item => item.age === 15);
console.log(fivty);

// create an array persons with name and age

// const nameAges = persons.map(item => ({ name : item.name, age: item.age }))
const nameAges = persons.map(item => {
  const { name: newName } = item;
  const { age } = item;

  return { newName, age };
});
console.log(nameAges);

// add more value to person

const newPersons = [...persons, { name: 'lisa', age: 19}]

console.log(newPersons)

// reduce: 

const totalAge = persons.reduce((accumlator, person) => accumlator + person.age, 0)
console.log(totalAge)
