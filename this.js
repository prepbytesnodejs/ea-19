//this key word
/*
function Human(name){
  this.name=name;
}

const h1=new Human("john");
*/

// the value of this keyword inside function is  geneally
//depends on where  the function is being called 
// and it 
//will have two values
//1- global object or window object
// 2- if the function is part of any object then the value of this will point to that  object 


var a=88;

function foo(){
  var a=7;
  

  function fg(){
    console.log(this.a);
  }

  fg();
}

foo();


let obj={
  name:"John",
  age:8,
  address:{
    gh:()=>{
      console.log(this)
    }
  },
  foo:()=>{
    console.log("Value of ",this);
  }
}


obj.foo();

// Rules for remembering this keyword
// 1- If we have es5 function then the value of this is window object or the object to which the function is attached

// 2 - in case of arrow function no matter what you do the value of this would be the window object 

