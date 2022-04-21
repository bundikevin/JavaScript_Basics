let fruits = ['Apple', 'Banana', 'Oranges', 'Pineapple']

console.log(fruits)

//remove last element
fruits.pop();
console.log(fruits)

//remove first element
fruits.shift();
console.log(fruits)

//enter new element at the end of the array
fruits.push('Mangoe')
console.log(fruits)

//enter new element at the beginning of the array
fruits.unshift('Guava')
console.log(fruits)

//delete 
delete fruits[2]
console.log(fruits)

//add fruit to a specific index
fruits[2] = 'Oranges'
console.log(fruits)

//remove elements in a range of indices
//fruits.splice(1,2);
//console.log(fruits)

//remove and add elements in a range of indices
//fruits.splice(1,2, 'Banana', 'Oranges');
//console.log(fruits)

let citrusFruits = fruits.slice(0,2)
console.log(fruits)
console.log(citrusFruits)

let evenNumbers = [2,4,6,8]

let oddNumbers = [1,3,5,7]

let numbers = evenNumbers.concat(oddNumbers)
console.log(numbers)