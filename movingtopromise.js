// Error first call back 


// function definition
function checkNumber(num ,cb){

    // Using setTimeout to produce the asynchrnous behaviour
    setTimeout(function(){
      if(num%2==0){
  
  
        cb(null,"Its a even number")
      }else{
        cb(new Error("Not even"),null)
      }
      
    },1000)
    
  }
  // An error first callback is a function in which the first argument is an error -->
  checkNumber(3 ,function(error,result){
    console.log(error,result);
    
  } )
  
  checkNumber(30 ,function(error,result){
    console.log(error,result);
    
  } )
  
  
  // The task is given an array you have to filter the given number in an array and handle it asynchrnously using error first callback
  

  // The task is given an array you have to filter the given number in an array and handle it asynchrnously using error first callback


function AsyncFilter(num,arr,cb){

    setTimeout(function(){
      let flag=false;
  
      for(let i=0;i<arr.length;i++){
        if(num==arr[i]){
          flag=true;
          
        }
        
        
      }
  
      if(flag){
        cb(null,"Number Found")
        
      }else{
              cb(new Error("Not found"),null)
  
        
      }
      
    },1000)
    
  }
  
  
  AsyncFilter(2,[1,7,8,2,6],function(error,result){
    console.log(error,result);
    
  })
  
  
  AsyncFilter(20,[1,7,8,2,6],function(error,result){
    console.log(error,result);
    
  })