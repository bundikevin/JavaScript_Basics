class Employee{
    
    
    setEmpDetails(name, id, phoneNumber){
        
        this.name = name;
        this.id = id;
        this.phoneNumber = phoneNumber;
        
    }
    
    getEmpName(){
        return this.name;
    }
    
     getEmpId(){
        return this.id;
    }
     
      getEmpPhoneNumber(){
        return this.phoneNumber;
    }
    
  
    
    
    
}

  
    let emp1 = new Employee();
    
    emp1.setEmpDetails('John', '3027289', '0719570513');
    console.log(emp1.getEmpName());