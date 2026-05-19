// function palindrome(str){
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let start=0;
//     let end= str.length-1
//     while(start < end){
//         if(str[start] !== str[end]){
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }
// console.log(palindrome("121"))

function palindrome(str){
    let rev="";
    for(let i= str.length-1; i>=0;i--){
        rev += str[i];
    }
    return rev  === str
}
console.log(palindrome("121"))