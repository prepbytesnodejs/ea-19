// Variable creation 
//let c=9;
//var f=8;
//const h=99;


//var c=9;
/**
var c  ---<declaration  // happens internall
c=undefined --->initailzation // happens internally
c=9 --->// assignment phase
*/

// In case of var -->declaration and initialization happens at same time 

//single step ---> var c ; c=undefined
// c=7 ; -->second step


//let c=99;

// let c --->declartion happens separately 

// c=undefined ; c=99 --->initilaization and assignment happens at same time together

//const c=99;

// const c --->declartion happens separately 

// c=undefined ; c=99 --->initilaization and assignment happens at same time


// hoisting --->is a default behaviour of javascript 
// every variable ,function ,class undergo hoisting 
// the declaration of the variable or function or class 
// is moved to the top of the scope 





/*
console.log(k);

var k=9;

console.log(k);

/**
Breakdonw of the above code internally
var k  //declaration is moved at top and initialization happend as same time and gets value --->  //undefined

console.log(k);

k=9;

console.log(k);
*/
console.log(k);

let k=9;

consol.log(k);

/**
Breakdonw of the above code internally

let k; //declaration is moved at top  no initialization


console.log(k);  // no initial value you cant access them here k is in temporal dead zone 

k=undefined ;k=9 // initialization +assignment

**/
/*
console.log(k);

const k2=9;

consol.log(k);

/**
Breakdonw of the above code internally

const k2; //declaration is moved at top  no initialization

console.log(k2);  // no initial value you cant access them here  // k2 is in temporal dead zone 

k2=undefined ;k2=9 // initialization +assignment

**/

//console.log(k1);

//let k1=9;



//Examples related to hoisting 



//functions hoisting

foo()  // you can call foo befor the function definition because of hoisting
function foo(){
  console.log("hello")
}


// class hoisting 

//new A("John")  // gives initialization error 

// 
class A{
  constructor(name){
    this.name=name
  }
}

//

//c();
console.log(c);//undefined
// function expressions
// the variable holding the function gets hoisted 
// but the function donot gets hoisted
let c=function(){
  console.log("hi");
}


// Interview question 

function foo(){


    if(c){
      console.log(c);  //output //undefined
    }
  
    var c=9;
    
  }
  
  foo();



  // Example of hoisting only applies to functional scopes

  function foo(){
    console.log(c);
  
  if(true){
    console.log(c);
    var c=9;
  }
    
  }
  foo()