// call 
// apply 
// bind
// these are function protyotype methods


// bind method

function foo(){
    console.log(this)
  }

  foo();

  let obj={
    name:"Joe",
    age:8,
    city:"Lucknow"
  }

  let obj2={
    _id:99999
  }
  /*
  //bind method returns a new function 
  // which is binded to the object you want
  //or the object you passed as an argument
  let bindedToObj=foo.bind(obj);
  bindedToObj();

  let bindedToObj2=foo.bind(obj2);
  bindedToObj2();
  foo();
  */

// call method just directly calls the function
// with new value of this

//foo.call(obj)
//foo.call(obj2);

// apply also does the same job of calling the function with 
// new value of this

//foo.apply(obj);
//foo.apply(obj2);

// Call and apply diffference

function sum(p,q){
    console.log((this.a+this.b)*p*q)
}

let k={
    a:7,
    b:8
}

// One call makes it bind to one object 
//sum.call(k,4,5);
//sum.apply(k,[4,5])
// Apply takes arguments in form of an array ,but 
// call takes comma separated arguments
//sum.apply(k,[1,2,9]);  // only arrays are allowed
//sum.call(k)
