function split(arr){
  let midPoint = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, midPoint);
  let arr2 = arr.slice(midPoint);
  return [arr1, arr2];
}

function merge(arr1, arr2){
  let i = 0;
  let j = 0;
  let resultArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    }
    else {
      resultArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++;
  }

  return resultArr;
}

function mergeSort(arr){
  if (arr.length === 1) return arr;

  let splitArrays = split(arr);
  let leftArr = splitArrays[0];
  let rightArr = splitArrays[1];

  let result = merge(mergeSort(leftArr), mergeSort(rightArr));
  return result;
}

let testArr = [9, 5, 6, 4, 7, 2, 3];
let testOne = [1];
console.log(split(testOne));
