/// this keyword in js 


//If you have a function then the value of this keyword will always be global object or in browser it would be window object
// and if the function belongs to any object or is bound to any object then the value of this would be that object
// In constructor function the value of this will always be the object that is being created 
/*
function foo(){

  console.log(this);  // here the value of this would be window object 
}

// the above foo function can also be called by using window. syntax so thats why the value of this keyword would
// be window object
//window.foo();
foo();

let obj={
    name:"John",
    foo:function () {  // this function foo is bound to the obj ,thats why the value of this here is the obj
        console.log(this);  // here it would be the object to which this function is bound too
    }
}

obj.foo();

// if you want to change the value of this inside a function you have to change its binding 
// We have three methods to do so ,call ,bind and apply 

*/
function bar(arg,a,b,c,d){
    console.log("Hey there prototype People ........",arg,a,b,c,d);

  console.log("The value of this here",this);  // here the value of this would be window object 
}
//bar()

let k={
    name:"Johnny bhai",
    age:34,
    city:"Mumbai"
}

//bind method ,is a function prototype method it can only be called with functions

let bindedFunction=bar.bind(k); // this will bind the bar function to object k and it will return a new function 
// which has the same definition as bar but the value of this would be object k
//bindedFunction();

// call method it directly calls the method
//bar.call(k);

// apply method also directly calls the method with the different value of this keyword
//bar.apply(k);

// The only difference between call and apply is how they take arguments
//bar.call(k,5,5,5,5,5,5,5,5,5,5) ; // call takes comma separated argument
//bar.apply(k,[8,9])  // apply takes one single argument only that should be in the form of array