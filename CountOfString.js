const arr = ["apple","apple","banana","banana","cat"];
//{apple:2,banana:2, cat:1}
let count = {}
for(let i = 0; i<arr.length; i++){
  let a = arr[i];
  if(count[a]){
    count[a]++;
  }else{
    count[a] = 1;
  }
}
console.log(count)

console.log(Object.keys(count))
console.log(Object.values(count))
console.log(Object.entries(count))

// const arr= ['a','b','c','a','b','d']
// const ab = arr.reduce((acc , curr)=>{
//     acc[curr]=(acc[curr] || 0)+1;
//     return acc;
// },{})
// console.log(ab)