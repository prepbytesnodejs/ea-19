//There are three different meaning of prototype in js 
// Prototype -->Its a concept or you can say the subset of object oriented programming in which all the objects that you create in js are directly or indirectly inherit features from the pre defined (God object) object given by the language [Object]

// 2- Prototypes are the mechanism by which JavaScript objects inherit features from one another [[Prototype]]

// 3- prototype ---->which is a property --> this property exists in constructor function
/*
// constructor function
function Human(name){
  this.name=name;

}

Human.prototype.eat=function(){
  console.log("Humans eat food");
}
Human.prototype.name="Meta human";

const h1=new Human("Dinesh");
h1.eat=function(){
  console.log("Eat Food");
}
console.log(h1);
h1.eat();

const h2=new Human("Anurag");
console.log(h2);
h2.eat();

const h3=new Human();
console.log(h3.name);
*/
// Just a syntactical sugar
class Vehicle {

    constructor(name){
      this.name=name;
      
    }
  
    drive(){
      console.log("Shoooooo-=-------");
    }
    getWheels(){
        console.log("The wheels");
    }
    
  }
  //Putting the method inside the class or adding them with prototype property are both same
  Vehicle.prototype.getWheel2s=function () {
    console.log("The wheels");
    
  }
  
  
  const maruti=new Vehicle("Maruti");
  const maruti2=new Vehicle("Suzuki");
  maruti.drive();
  maruti2.drive();
  maruti.getWheels();


  // prototype chaining

const grandFather={

    age:78,
    getAssets:function(){
    console.log("Getting assets");
    }
    
  }
  
  const father=Object.create(grandFather);
  //father.name="Praveen"
  
  const son=Object.create(father);
  
  console.log(son.name);  //output here?
  
  // Prototype Chaining-->
  // Js will look for any property in the current object first ,if it is able to find it out it will get the property value ,otherwise it goes up in the prototype chain ,all the way to Object