const arr = [1,2,3,4,5,6,7];
const target = 7;
let pairs = [];
let index = 0;
for (let i = 0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i] + arr[j] === target){
      pairs[index] = [arr[i], arr[j]];
      index++
    }
  }
}
console.log(pairs)