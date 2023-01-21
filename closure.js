function foo(){
    var g=9;
    let i=89;
      const y=5;
    
      return 8;  // As soon function returns all the variables above are removed from stack memory 
    
      
      
    }
    
    // This not happens in case of closure
    
    function foo2(){
    var g=9;
    let i=89;
      const y=5;
    
      return function(){
    
        console.log(g,i,y);
        
      }
    
      
      
    }
    let g=foo2();  // ideally the variables inside the functions should have been removed here 
    //console.log(g);
    //g();
    
    
    
    
    
    function sumOfProducts(a,b){
      let sum2=a+b
    
     return  function sum (){
    
       let product2 =sum2*a*b;
    
    
       return function product(){
         console.log(product2,sum2)
         
       }
       
     }
    
      
    }
    
    let d1=sumOfProducts(6,7);
    let d2=d1();
    
    d2();
    
    
    // closure is the combination function's lexical scope and its local scope ,the closure is formed when you return a function from another function

    // closure enables us  to access values even after execution context ends.




// setTimeout executes your logic only once
setTimeout(function(){
    console.log("I am excuted atleats after 1 second")
    
  },1000)
  
  //setInterval
  // Set Interval is a function which takes a callback function and the minimum  time after which the logic inside the callbcak function is executed repeatedly
  
  setInterval(function(){
      console.log("I am excuted repatedly atleats after 1 second")
  
  },1000)
  
  // Why you need them ?
  
  // they are the most easiest way to produce asynchronous behaviour in javascript

  console.log("Process 1")
console.log(new Date())

for(let i=0;i<10;i++){
  console.log(i)
}

console.log(new Date())

console.log("Process 2")

console.log(new Date())



////closures
let mohit="mohit";
function foo(){

var c=9;
  const d=8;
  let h=7;
  let obj={name:"John"};
  bar();

  console.log(obj);

// hidden return statement  if you dnt explicitly provide the return value;
}

function bar(){

  const c=9;
  console.log(c);
}

//foo();



function closureH(){
  console.log("tada")
    const d=8;
  let h=7;
  return function internalFunction(){
    console.log(d,h);
  }
  
  
}
//let h=closureH();

//h();

function jk(){
  let a=81;

  return function (){

   let b=76;

    return function innerClosure(){

      console.log(a,b,mohit);
      closureH()()  // this syntax is called as function currying
  
      
    }
    
  }

  


  
}

let p=jk();
let q=p();
q();


// you have to use currying syntax to sort the array and multiply all the elements by a given number


function  foo(arr,num){

  arr.sort(function (a,b){
    return a-b
  });
  return arr.map(ele=>ele*num);
    
  }
  
  //console.log(foo([2,7,1,88,1888],2));
  
  function foo(arr){
  
  // Just sorting   
  arr.sort(function (a,b){
    return a-b
  });
  
    return function Multiplyby2(num){
     
  // just multiplying by the num
    let mul= arr.map(ele=>ele*num);
  
  
      return function (divide){
  // filtering 
        return mul.filter(ele=>ele%divide==0);
      }
    }
  
    
  }
  // currying syntax
  console.log(foo([2,7,1,88,1888])(2)(4));
