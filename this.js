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





const obj7 = {
    name: 'jhon',
    func: function() {
      // the value of this inside here would be the object that you have
      const obj2 = {
        surname: 'something',
        func2: () => { 
          console.log(this); 
        
        },
  
        func1:function(){
            console.log(this); 
        }
       
      }   
       obj2.func1() 
       obj2.func2() 
  }
  }
    
  obj7.func()
  
  

  // 2 - in case of arrow functions the value of this is relative to the value of this inside  enclosing function 

  // it may be the window object if the enclosing function has the value of this as window object 
  // or the other wise the object to which the enclosing function is bound to