
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
  // pr is promise object
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

  //Promise chaining 
let c = 0;  //sync
function sumofNuimbers(a, b, cb) {

  setTimeout(function() {
    let sum = a + b;
    cb(sum);
  }, 1000)

}

function Square(a, cb) {

  setTimeout(function() {
    let sq = a * a;
    cb(sq);
  }, 1000)

}

sumofNuimbers(34, 56, function(result) {
  //console.log(result);
  //c=result;
  Square(result, function(sq) {
    //  console.log(sq);

  })

})

//console.log(c);  // this c will print 0 because this a sync behaviour

// to avoid callback hell behaviour we have to use promise chaining //



function sumofNuimbersPromise(a, b) {

  const pr = new Promise(function(res, rej) {
    setTimeout(function() {
      let sum = Number(a + b);
      if (isNaN(sum)) {
        rej("Please pass numbers")
      } else {
        res(sum);
      }
      // cb(sum);

    }, 1000)

  })

  return pr;

}




  return pr;

function SquareMrunali(a) {

  const pr = new Promise(function(res, rej) {
    setTimeout(function() {
      let sq = a * a;
      //cb(sq);
      res(sq);
    }, 1000)

  })

  return pr;


}
//console.log(  );

//(sumofNuimbersPromise(3,5)--->returns a promise
/// then function also return a promise
//sumofNuimbersPromise(3,5).then(function(data){})  -->returns a promise
// chain --->meaning ?

/**
sumofNuimbers(34,56,function(result){
  //console.log(result);
  //c=result;
  Square(result,function(sq){
  //  console.log(sq);
    
  })
  
})
**/

// Promise chaining --->
sumofNuimbersPromise(3, 5).then(function(data) {
  //console.log(data);
  return data
}).then(function(data) {

  return SquareMrunali(data)

}).then(function(Data) {
  console.log("Output", Data); // 
}).catch(err => {
  console.log(err);
})

// async await of promise chaining

async function foo() {

  try {
    // await actually gives you the resolved value of promise
    let sum = await sumofNuimbersPromise(3, 5);
    let finalData = await SquareMrunali(sum);
    console.log("From async await", finalData)

  } catch (err) {

  }

}
foo();

// Async programming
// First create async function ---to produce async behaviour you can use setTimeout

// Play around with them
// create callback hells

// then convert those callback functions to promises
// then convert that callbackhell into promise chaining 
// finally convert that promise chain to async await syntax

// You have to do following operations on array 

// 1-given an array ,multiply all the items with 2 ,double all individual items 

// 2- filter out all the elements from the array which are divisible by 2 or even
// 3- calculate the sum of the numbers --->