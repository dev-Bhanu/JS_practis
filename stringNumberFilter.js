let arr =[23,45,67,"e",65,"g",44,"f",7,98];
// const find=arr.filter((item)=>typeof item === "number")
// const str=arr.filter((item)=>typeof item === "string")
// console.log(find)
// console.log(str)
let num = [];
let str = [];

for(let i=0; i<arr.length; i++){
  if(typeof arr[i ]=== "number")
  {
    num.push(arr[i])
  }
  if (typeof arr[i] === "string"){
    str.push(arr[i])
  }
}
console.log(num)
console.log(str)