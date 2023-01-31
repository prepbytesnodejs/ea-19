/// Adding data to the storage or browser
//

localStorage.setItem("name","John");  // the key and  data  or the value should be string

// Getting data from localStorage

const data=localStorage.getItem("name");
console.log(data);



/// Session storage data is cleared once you close the browser or close the tab

sessionStorage.setItem("name","John");  // the key and  data  or the value should be string

// Getting data from localStorage

const data2=sessionStorage.getItem("name");
console.log(data2);


/// ----->cookies ---->
// to set up the cookie
document.cookie="name=shubham,age=22,city=Mumbai";
'name=shubham,age=22,city=Mumbai'
// You cna pass expiry date in the cookie as well and post that it will automatically be removed
document.cookie="name=shubham,age=22,city=Mumbai;expries=20 February 2023";

// to get the cookie
const cookies=document.cookie;