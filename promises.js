// Promises -->

/**
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
**/
//creating a promise 
// new and Promise are keywords in built in javascript
function AsyncWithPromise(num,arr){
    const mypromise= new Promise(function(resolve,reject){
  
      setTimeout(function(){
      let flag=false;
  
      for(let i=0;i<arr.length;i++){
        if(num==arr[i]){
          flag=true;
          
        }
        
        
      }
  
      if(flag){
      //  cb(null,"Number Found")
        resolve("Number found");
        
      }else{
             // cb(new Error("Not found"),null)
  
        reject("Not found");
        
      }
      
    },1000)
    
  } );
  
  
  
    return mypromise
    
  }
  
  
  
  
  // getting result from promise
  
  AsyncWithPromise(2,[1,7,8,2,6]).then(function(data){
    console.log(data);
    
  }).catch(function(err){
    console.log(err);
  })
  
  
  
  AsyncWithPromise(20,[1,7,8,2,6]).then(function(data){
    console.log(data);
    
  }).catch(function(err){
    console.log("Error",err);
  })
  

  // Async await version

// Promises -->

/**
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
**/
//creating a promise 
// new and Promise are keywords in built in javascript
function AsyncWithPromise(num,arr){
    const mypromise= new Promise(function(resolve,reject){
  
      setTimeout(function(){
      let flag=false;
  
      for(let i=0;i<arr.length;i++){
        if(num==arr[i]){
          flag=true;
          
        }
        
        
      }
  
      if(flag){
      //  cb(null,"Number Found")
        resolve("Number found");
        
      }else{
             // cb(new Error("Not found"),null)
  
        reject("Not found");
        
      }
      
    },1000)
    
  } );
  
  
  
    return mypromise
    
  }
  
  
  
  
  // getting result from promise
  
  AsyncWithPromise(2,[1,7,8,2,6]).then(function(data){
    console.log(data);
    
  }).catch(function(err){
    console.log(err);
  })
  
  
  
  AsyncWithPromise(20,[1,7,8,2,6]).then(function(data){
    console.log(data);
    
  }).catch(function(err){
    console.log("Error",err);
  })
  
  // 
  async function  dataGet(){
    // the below code will only run inside async function
    try{
        const c=await AsyncWithPromise(2,[1,7,8,2,6]);
    console.log("Result",c);
    }catch(err){
      console.log(err);
    }
  
    
  }
   dataGet()