const arr=[1,2,3,4,5,6,7,8,9,10]
let arr1=[];
let j=0;
for(let i=arr.length-1; i>=0 ; i--){
    arr1[j]=arr[i]
    j++
}
console.log(arr1)
const reverse=arr.sort((a,b)=>b-a)
console.log(reverse)