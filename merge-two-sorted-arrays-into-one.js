function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3.sort(function(a,b){
        return a-b;
    });
}
console.log(mergeArrays([-1,5,-6],[4,2,9]))