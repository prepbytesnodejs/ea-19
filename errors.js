// Errors in js 

// Reference Error --> 

/// Is related to the use of variable ,access of variable 
/*
{
  console.log(c);
  let c=9;
}

console.log(c);
*/
/// you can create a custom reference error ,you can use the constructor

const ref=new ReferenceError("Ref error");
console.log(ref);



// Syntax Error --->
/*
let c=9;
let c=9;  // Cant redeclare a let variable in the same scope twice
*/

const syn=new SyntaxError("Ref error");
console.log(syn);
// Where you should use it 


/// So the code execution actually stops if you throw error in js

function checkEven(num){

  if(num%2==0){
    console.log("Its even")
  }else{
    throw new Error("Its not even")
  }

  
}

function doing(){
  console.log(9);
}

checkEven(3)
doing()