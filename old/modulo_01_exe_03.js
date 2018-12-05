const array = [1, 2, 3, 4, 5 ];

const newArray = array.map(items => items + 10);
console.log(newArray);
//===================================================
const users = {name: 'Henrique', age: 23};

const showUsers = () => ({Age: users.age});
console.log(showUsers());
//===================================================

const newUser = (name, age) => ({name, age});
  
console.log(newUser('Henrique', 26));
//====================================================

