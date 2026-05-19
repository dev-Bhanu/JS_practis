const arr= [1,2,3,4,5,6,7,8,9]
let odd=[];
let even= []
let index=0;
let index2= 0;
for(let i =0 ; i < arr.length ; i++){
 if(arr[i]%2 === 0){
   even[index]= arr[i]
   index++
 }else{
   odd[index2]= arr[i]
   index2++
 }
}
console.log(odd)
console.log(even)