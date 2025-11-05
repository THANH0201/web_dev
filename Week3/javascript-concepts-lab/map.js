// Example 1: Double each number in an array
const numbers = [2, 4, 6, 8, 10];

const doubledNumbers = numbers.map((num) => num * 2);

console.log('Original Numbers:', numbers);
console.log('Doubled Numbers:', doubledNumbers);

// Example 2: Convert Celsius to Kelvin
const temperaturesCelsius = [0, 15, 30, 45];

const temperaturesKelvin = temperaturesCelsius.map((celsius) => celsius + 273.15);

console.log('Celsius Temperatures:', temperaturesCelsius);
console.log('Kelvin Temperatures:', temperaturesKelvin);
// Example 3: Extract names from an array of user objects
const names = ['alice', 'bob', 'carol'];

const capitalizedNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));

console.log('Original Names:', names);
console.log('Capitalized Names:', capitalizedNames);