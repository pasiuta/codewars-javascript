//Create a function that receives an integer named N, and returns an array at the length of N,
// contains all the numbers from 1 to N in a randomized order.
// If we call this function multiple times we won't be able to identify a pattern.
function random(n){
    let newArray=[];
    for(let i=1;i<n;i++){
        newArray.push(Math.floor(Math.random()*n))
    }
    return newArray
}
console.log(random(8))