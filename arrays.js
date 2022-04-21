

let numbers = [ 1,2,3,4,5,6,7,8,9,10 ]


console.log(numbers);
console.log(numbers[7]);


let fruits = ['Apple', 'Banana', 'Oranges', 'Pineapple']

fruits[0] = 'Lemon'
fruits.push('Passion')

console.log(fruits)
console.log(fruits[1])
console.log(fruits.length)

let cars = new Array('Ford', 'Toyota', 'Honda', 'Mazda')

console.log(cars)
console.log(cars[2])

let x;
for(x in fruits){
    console.log(fruits[x])
}

for(x of fruits){
    console.log(x)
}