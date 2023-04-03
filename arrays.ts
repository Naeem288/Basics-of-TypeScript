// Declaration of Array
let arr:number[]= [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
//pushing a number at the end
arr.push(11);
console.log(arr);
// Poping a number from the end
arr.pop();
console.log(arr);
// poping a number at start
arr.shift();
console.log(arr);
//pushing aa number at start
arr.unshift(11);
console.log(arr);
//geting some part of array , in this we need to mention the index of starting and ending
arr.slice(5,9);
console.log(arr);
// removing elements from specific location and inserting new elements
arr.splice(7,1,56);
console.log(arr);
arr.toString();
console.log(arr);
