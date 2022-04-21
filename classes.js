
 class Employee{
     
     //constructor
     constructor(fName, lName, email, phoneNumber){
         
         this.fName = fName;
         this.lName = lName;
         this.email = email;
         this,phoneNumber = phoneNumber;
         
     }
     
     //Function
     /*
     setDetails(fName, lName, email, phoneNumber){
         
         this.fName = fName;
         this.lName = lName;
         this.email = email;
         this,phoneNumber = phoneNumber;
         
     }
     */
     
 }
 
 let emp1 = new Employee('Bundi', 'Kevin', 'bundikevinmakori@gmail.com', '0719570513');
 //emp1.setDetails('Bundi', 'Kevin', 'bundikevinmakori@gmail.com', '0719570513');
 console.log(emp1.fName)
 console.log(emp1.lName)
 console.log(emp1.email)
 console.log(emp1.phoneNumber)