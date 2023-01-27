
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

/*
 givesSumofNumberAfterOneSecond(7,8,function cb(sum){
  square(sum,function sq(s){     
    cube(s,function cq(c){
    console.log("The final output",c)
       });
  }) })
*/



// Promise chaining --->
// Promises are objects --->

function givesSumofNumberAfterOneSecondPromise(a,b){
// here we are creating a promise object from inbuilt Promise constructor using new keyword
  // pr is promise objects
  // new keyword is used to instantiate or create an object from constructor
  // Promise() is a constructor inbuilt in js

  // res-->successfull result from promise
  // rej --->Error result from promise
  const pr=new Promise(function(res,rej){
    
  // setTimeout is used here just for producing the asynchronous behaviour
      setTimeout(function()
{
    let sum=a+b;
   // cb(sum);
  res(sum);
    
  },1000)
    
    
  } )


  return pr;

}


// when promise is created it is in the pending state --
// after that it can either be resolved or rejected
// to see the resolved value of promise you have to use .then
// to see the rejected value of promise you have to use .catch

// Call back way 
givesSumofNumberAfterOneSecond(7,8,function cb(sum){
   console.log(sum);
 })

// Promise way 
givesSumofNumberAfterOneSecondPromise(4,5).then(function(data){
  console.log(data);
})

//--->

// Promise way 
// so to get the resolved value add .then to the promise
// and get the value inside the callback passed in .then
givesSumofNumberAfterOneSecondPromise(4,5).then(function(data){

    console.log(data);
    
  }).catch(function(err){
    console.log(err);
  })