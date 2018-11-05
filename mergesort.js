function split(arr){
let midPoint = Math.floor(arr.length / 2);
let arr1= arr.slice(0,midPoint);
let arr2= arr.slice(midPoint);
return [arr1,arr2];
}

function merge(arr){

}

function mergeSort(){

}

let testArr = [9,5,6,4,7,2,3];
let testOne = [1];
console.log(split(testOne));