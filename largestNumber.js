const arr =[1,2,3,4,5,6,7,8,9]
let arr1=arr[0];
for(let i=1; i< arr.length; i++){
    if(arr[i]>arr1){
        arr1=arr[i]
    }
}
console.log(arr1)