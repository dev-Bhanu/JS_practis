// var a =[11,12,13,14,15];
// function print(b,...a){
//     console.log(a)

// }
// print(8,9,10,11,12)

// const arr=[1,2,3,4,5]
// const arr1= arr.map((item)=>{
//      return item=8;
// })
// console.log(arr1)

// const obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }
// console.log(Object.entries(obj))


const arr= [20,"q","bhanu","ansh","r",34]
let ch=[];
let str=[];
let num=[];
arr.forEach((item)=>{
    if(typeof item== "number"){ num.push(item)
    }else if (typeof item == "string" && item.length===1){ ch.push(item)
    }else if (typeof item == "string") { 
        ( str.push(item)) 
    }
})
console.log(num)
console.log(ch)
console.log(str)