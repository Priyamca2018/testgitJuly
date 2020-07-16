//sumArray()
//write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in an array
//sumArray([1,2,3]); Is 6

function sumArray(arr){
    let sum = 0,result;
    const ar = arr.length-1;
    for(let i=0;i<=ar;i++){
        sum=sum+arr[i];
    }
    return sum;
}
sumArray([1,2,3]);