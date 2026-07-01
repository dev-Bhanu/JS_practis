const array=[3, 5, 7, 2, 8, 1, 4];
let largest=array[0];
let secondLargest= -Infinity;
for(let i =1; i <array.length; i++){
    if(array[i] > largest){
        secondLargest=largest;
        largest=array[i];
    }else if (array[i] > secondLargest && array[i] !== largest){
        secondLargest= array[i]
    }

}
console.log(secondLargest);

function findSecondLargest(arr){
    let largest=arr[0];
    let secondLargest= -Infinity;
    for(let i =1 ; i < arr.length;i++){
        if(arr[i]>largest){
        secondLargest= largest;
        largest= arr[i];
    }else if(arr[i]>secondLargest && arr[i] !== largest){
  secondLargest= arr[i];
    }
}
return secondLargest;
}
console.log(findSecondLargest([34, 53, 72, 22, 18, 91, 44]));