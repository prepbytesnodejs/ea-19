//callbacks are functions which are passed as an argument to other function 

//function definition 
/*
function foo(a,b){ //paramters
  let c=a+b;
  console.log(c);
}


// function call
//foo(2,3);  // arguments

//foo("s","k");
*/
/*
function cb(){
  // some logic 
  
}

*/

//let a=2;
//let b=3;


// definition of zoo
function zoo1(p){
  //
  p();
  
}

// calling zoo function 
// cb is a callback function 

zoo1(  function cb(){   // this function cb is a callback function

  console.log("I am a callback function ");
}    )



/// you have to print all the items of an array using a callback function 
// t arr=[1,2,3,4,54,5];
//



/// you have to print all the items of an array using a callback function 
// t arr=[1,2,3,4,54,5];
//

let ar1r=[1,2,3,4,4,5,9]
function display(p){

  for(let i=0;i<arr.length;i++){
    p(arr[i]);
  }


  
}

display(function cb(c){
  console.log(c);
  
})


/// you have to print all the items of an array using a callback function 
// t arr=[1,2,3,4,54,5];
//

let arr=[1,2,3,4,4,5,9]
/*
function display(p){

  for(let i=0;i<arr.length;i++){
    p(arr[i]);
  }


  
}

display(function cb(c){
  console.log(c);
  
})
*/
/*
let p=function cb(c){
  console.log(c);  //
  
}

p(99)


function display(p){
 p(99);

  
}

display(function cb(c){
  console.log(c);
  
})
*/




