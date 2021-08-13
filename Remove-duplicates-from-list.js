//Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.
function distinct(a) {
    let newArray=[];
    for(let i=0;i<a.length;i++){
        if(!newArray.includes(a[i])){
            newArray.push(a[i])
        }
    }
    return newArray
}
console.log(distinct([1,2,1]))