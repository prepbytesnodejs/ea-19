//Prototype based programming --
///Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.

//Object  // God Object is actually a prototype (english language one)  ---->A prototype is an early sample, model, or release of a product built to test a concept or process.[1] It is a term used in a variety of contexts, including semantics, design, electronics, and software programming.


// Different ways to create an object in javascript --->
// First way is using Object literal representation 

let obj={name:"Joe",age:20,city:"Delhi"}

// 2- Using constructor functions -->

// Functions in js are first class objects ,why we call them as first class objects because we can use them just like any other value or data type 
/*
function foo(a){  // foo is a higher order function

  // you can return a function
  return function(){
    
  }
  
}

function d(){  // function d is a higher order function

}

d(function(){


})

foo(2);
foo(function(){
  // you can pass a function as an argument thats why we call them first class citizen or first class objects
  
})
*/

// Higher order functions are function which take function as an argument or return a function 

// You can also use functions as a constructor function to create new objects
// Vehicle is a constructor function
function Vehicle(name,color){
  this.name=name;
  this.color=color;

  // You dnt return anything from a constructor functionn
  
}
// You use constructor function with new keyword to create object
const car = new Vehicle("toyota","blue");

console.log(car);


///3- Using classes to create objects

// class is a blue print  to create object 
class Animal{


  getName(){
    console.log("the  name is "+this.name);
  }
  
}

class  Human extends Animal {
    constructor(name){
      super();  // super will internally create a Animal object in the memory
    this.name=name;  //
  }
  
  
}


const h1=new Human("dinesh");  // this will take memory 
const h2=new Human("Manoj");  // this will take memory 

// when you call new Human it will invoke the constructor of your class

h1.getName();
h2.getName();



/// 4 th way to create object ,this way you can also build a parent child relationshop between objects 


//Using Object.create 
const grandFather={
    name:"Joe",
    property:"2 Acre land"
  }
  
  
  const father=Object.create(grandFather);
  father.name="John";
  
  const son=Object.create(father);
  
  son.name="Ron";
  
  console.log(son); // son will have access to all the properties of its parent and grandparent
  