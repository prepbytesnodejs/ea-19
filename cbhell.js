// callback hell
// pyrtamid of doom 
// three functions --->
let sum=0; //sync
var s1=0; //sync
function givesSumofNumberAfterOneSecond(a,b,cb){

  // setTimeout is used here just for producing the asynchronous behaviour
  setTimeout(function()
{
    let sum=a+b;
    cb(sum);
    
  },1000)
}
function square(num,sq){
  setTimeout(function(){
    let s=num*num;
    sq(s);
  },3000)

  
}
function cube(num,cu){
  setTimeout(function(){
     let c=num*num*num;
      cu(c);
  },2000)
}

// cube()
// Write a function that calculates cube of the number and gives you result after 2 seconds


// I have two numbers 7 ,8  you have to print the cube of  square of their sum -->  // 225  // cube of 225 --->
/*
givesSumofNumberAfterOneSecond(3,4,function cb(sum){
  console.log(sum);
})

square(3,function sq(s){
  console.log(s)
})
*/
// callback hell  it is when you have nested callbacks

// callback hell is a pattern which forms in our code while using dependent or nested callbacks
 givesSumofNumberAfterOneSecond(7,8,function cb(sum){

   // the sum value will be availabel  inside here only 
  
   square(sum,function sq(s){     
    

     cube(s,function cq(c){
    console.log("The final output",c)
       
     });
//
})

 })
//console.log(s1); //sync

