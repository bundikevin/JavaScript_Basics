class Animals{
    
    constructor(name){
        this.name = name;
    }
    
    eats(){
        
        console.log(this.name + ' eats food');
    }
}

// let animal = new Animals('Dog');
// animal.eats();

class Alligator extends Animals{
    
    eats(){
        super.eats();
        console.log(this.name + ' eats fish');
    }
    
}

let murphy =new Alligator('Murphy');
murphy.eats();