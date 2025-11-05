// Destructuring Assignment Example
const person = { name: 'Alice', age: 30, city: 'New York' };

const { name, age } = person;

console.log('Name:', person.name);
console.log('Age:', age);
// Array Destructuring Example
const person1 = { name1: 'Alice', info: { age1: 30, occupation1: 'Engineer' } };

const { name1, info: { age1, occupation1 } } = person1;

console.log('Name:', name1);
console.log('Age:', age1);
console.log('Occupation:', occupation1);
// Nested Array Destructuring Example
function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You're ${age} years old.`);
}

greetUser({ name: 'Bob', age: 25 });