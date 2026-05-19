// let LoggedIn = 1;
// let LoggedIn = "";
// let LoggedIn = "bhanu";
// let boolean = Boolean(LoggedIn)
// console.log(boolean)

// let num = "33abc"
// let num = "false"
// console.log(typeof num )
// let number = Number(num)
// console.log(number)

// let sumNumber=33;
// let sumString=String (sumNumber)
// console.log(sumString)
// console.log(typeof sumString)

// let a =false;
// let b= "5";
// let c = 3;
// let sum =a+b+c;
// console.log(sum)


// operation + - * / % **

// let str = "bhnau"
// let str1 = "pratap"
// let str2= str+str1
// console.log(str2)

// console.log("1"+ 2)
// console.log(1 + "2")
// console.log("1" + 2 +2)
// console.log(1 +  2 +"2")

// console.log("2">1)
// console.log("2"<1)
// console.log("2"==2)
// console.log("2"===2)

// console.log(null > 0)  // false
// console.log(null >= 0)// true
// console.log(null == 0) // false

// console.log(undefined == 0) // false
// console.log(undefined > 0) //   false
// console.log(undefined < 0) // false



// const fruits = ["apple", "banana", "apple"];

// const unique = [];

// for (let i = 0; i < fruits.length; i++) {
//   let found = false;

//   for (let j = 0; j < unique.length; j++) {
//     if (fruits[i] === unique[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     unique[unique.length] = fruits[i];
//   }
// }

// console.log(unique);


// const find=arr.filter((item)=>typeof item === "number")
// const str=arr.filter((item)=>typeof item === "string")
// console.log(find)
// console.log(str)
// let arr =[23,45,67,"e",65,"g",44,"f",7,98];
// let num = [];
// let str = [];

// for(let i=0; i<arr.length; i++){
//   if(typeof arr[i ]=== "number")
//   {
//     num.push(arr[i])
//   }
//   if (typeof arr[i] === "string"){
//     str.push(arr[i])
//   }
// }
// console.log(num)
// console.log(str)

// const abc = {
//   name:"bhanu",
//   age:23,
//   address:"noida",
// };
// const xyz ={
//   ...abc,name:"pratap"
// }
//  const {name,...pqr}=abc;
//  console.log(pqr);


 // for(let i=1; i<=ab; i++){
//  console.log(i)
// }

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

 // const obj1={};
// const obj2={
//     name:"bhanu"
// }
// const obj3={
//     name:"pratap"
// }
// obj1[obj2]={
//     name:"kurmi"
// }
// obj1[obj3]={
//     name:"gangwar"
// }
// console.log(obj1[obj2])