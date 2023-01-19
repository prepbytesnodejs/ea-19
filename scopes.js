if (true){
    //  ???? block scope
}

function foo(){
  // functional scope
}
/*
for (;;){
  //  block scope
} 
*/


{
  // block scope
}

/// Scope is a zone /place or the area where the variable can be accessed and has full rights to be used 
/*

function DishasHouse(){

  //  Disha has all the rights here
  
}

function IshasHome(){
  
}
*/

//the variables defined with let and const  have a block scope


if(true){
  let value=9;
  const v=88;
  console.log(v);  // v is accessible inside only the if condition  here because of being block scope
}

//console.log(value);

// Block scope --->{} -->if you see this curly brackets then let and const are not accessible outside them at all


if (true){
  var h=923;
}
console.log(h)  // var has a functional scope  so it needs the function with curly brackets to get confined


function foo(){
  var f=9890;
}
console.log(f);  // it will throw an error  because f has a functional scope and it is confined inside function only

// Summarize here 

// If you see var in anything except function ,var would be accessible outside the curly brackets
// If you see let and const in anything ,even functions if else or while let and const cant be accesed outside the curly brackets



if (true){
    var h=8;
      //const i=99;
      //let u=7;
      
      if (true){
        const k=9;
      }
    
      //console.log(k);  
    }
    
    console.log(h);    // works
    
    //foo();
    
    

    {
        var c=9;
        let g=78;
      }
      
      console.log(c);   // works 
      console.log(g);  // error
      


      // Global scope
// Global object 
// relation between var and global scope

// these all variables can be termed as a global variable for the whole file
//var f=9; // 
//let o=4;
//const h=78;
///--

// If a variable is accessible inside all the child scopes of a function or of else ,if ,loops ,then you can call it a global scoped for that particular scope
//
function foo(){
    let i=9;  // i can be termed as a global variable for this function
  
    function f(){
      console.log(i);
      if(true){
        //
        console.log("IIIII",i)
      }
    }
    f();
  
    console.log(i);
  
  
    
  }
  
  //foo()
  
  
  





// variabl

/**
console.log(window);
VM109:1 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
var shubham_rocks="shubham is rocking";
undefined
console.log(window.shubham_rocks);
VM294:1 shubham is rocking
undefined
let  shubham_rocks="shubham is rocking";
VM389:1 Uncaught SyntaxError: Identifier 'shubham_rocks' has already been declared
let  shubham="shubham is rocking";
undefined
console.log(window.shubham);
VM461:1 undefined
undefined
const  shubh="shubham is rocking";
undefined
console.log(window.shubham_rocks);
VM563:1 shubham is rocking
undefined
console.log(window.shubh);
VM607:1 undefined
undefined
**/

// variables declared with var gets attached to window object 
///,but variables declared with let and const don't