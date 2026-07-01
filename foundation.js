// function sum(...args) {
//     return args.reduce((total, current ) => total+current, 0)
// }
// function sum(...args){
//     let total=0;
//     for(let i= 0 ; i<args.length; i++){
//         total += args[i]
//     }
//     return total;
// }

// //For the purpose of user debugging.
//  const addsum = sum(100, 200, 300, 400);
// console.log(addsum) 

// let a =10;
// let b= 20;
// let c;
// c=a; 
// a=b;
// b=c;

// console.log(a)
// console.log(b)

// const arr=[1,2,3,4,5,6,7,8,9,10]
// let arr1=[];
// let j=0;
// for(let i=arr.length-1; i>=0 ; i--){
//     arr1[j]=arr[i]
//     j++
// }
// console.log(arr1)
function sum(...num) {
    let result = 0;
    for (let i = 0; i < num.length; i++){
        result+= num[i]
    }
    return result;
}

//For the purpose of user debugging.
 console.log(sum(100, 200, 300, 400));
