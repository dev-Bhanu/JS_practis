function missingNumber(nums){
    let sum =0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return (nums.length*(nums.length+1))/2 -sum;
    // return (nums.length*(nums.length+1))/2 - nums.reduce((a,b)=> a+b,0)
}
console.log(missingNumber([0,1,2,4,5,8]))


const arr=[2,3,7,8,3,2,0,1,9]
const set= new Set(arr);
let result=[]
for(let i =1;i<=arr.length;i++)
{
    if(!set.has(i)){
        result.push(i);
    }
} 
console.log(result)