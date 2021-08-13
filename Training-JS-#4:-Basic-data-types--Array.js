function getLength(arr){
    //return length of arr
    return arr.length
}
function getFirst(arr){
    //return the first element of arr
    return arr[0]
}
function getLast(arr){
    //return the last element of arr
    return arr.slice(-1).pop()
}
function pushElement(arr){
    arr.push(1);
    return arr
}
function popElement(arr){
    //pop an element from arr
   arr.pop(5);
   return arr
}
console.log(popElement([1,2,3]))