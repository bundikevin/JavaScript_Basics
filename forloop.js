let i;

for(i = 1; i < 10; i++){
    
    console.log("The value of i is : " + i);
    
}

let fruits = ['Apple', 'Banana', 'Oranges', 'Pineapple']

let x;
for (x in fruits){
    console.log (fruits[x]);
}

for(x of fruits){
    console.log (x);
}