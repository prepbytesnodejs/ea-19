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