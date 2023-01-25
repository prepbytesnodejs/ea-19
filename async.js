console.log("First------",1);  // sync

//async
setTimeout(function(){
  console.log("hello");
},1000)

for(let i=0;i<5;i++){
  console.log("Sync code in for loop",i);
  //async
  setTimeout(function(){
  console.log("hello",i);
},1000)
}


console.log("Last sync code--",2);  //sync

// step1-identify the synchronous and asynchronous code
// step2- synchronous code is executed first and then asynchronous code executed