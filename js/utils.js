const { get, has, cloneDeep, isEqual } = _;

const obj = {
  name: 'John',
  age: 18,
  address: 'Washington, D.C',
  sex: null,
  parent: {
    father: 'Jack'
  },
  friend: {
    boy: 'hell'
  }
};

console.log(get(obj, 'parent.father.age', 50));
console.log(get(obj, 'sex', 'male'));

console.log(has(obj, 'parent.father.age'));
console.log(has(obj, 'sex'));

const obj1 = cloneDeep(obj);

obj1.parent.father = 'Joe'
console.log(obj, obj1);

const isEqualObj = isEqual(obj1, obj);

console.log(isEqualObj)
