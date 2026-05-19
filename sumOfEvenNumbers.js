function sumofEvenNumbers(arr){
    let sum=0;
    for(let i=0; i<arr.length-1;i++){
if(arr[i]%2 ===0){
    sum+=arr[i]
}
    }
    return sum;
}
const arr=[1,2,3,4,5,6,7,8,9]
console.log(sumofEvenNumbers(arr))