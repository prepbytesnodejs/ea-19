let arr=Array.from({length: 40000}, () => Math.floor(Math.random() * 40));
let sum=0;
const t0 = performance.now();

for(let i=0;i<arr.length;i++){
  //sum=sum+arr[i];
  console.log(arr[i]);
}

const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);