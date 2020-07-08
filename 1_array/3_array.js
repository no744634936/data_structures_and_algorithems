// merge sorted arrays
// mergeSortedArrays([0,3,4,31],[4,6,30])
// [ 0,  3,  4, 4,6, 30, 31 ]




mergeSortedArrays=(arr1,arr2)=>{
   let arr3=arr1.concat(arr2)
   return arr3.sort((a,b)=>a-b)
}


mergeSortedArrays2=(arr1,arr2)=>{
   return  arr1.concat(arr2).sort((a,b)=>{return a-b})
}


console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));

console.log(mergeSortedArrays2([0,3,4,31],[4,6,30]));


