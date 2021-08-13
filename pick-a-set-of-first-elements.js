//Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
//
// If n == 0 return an empty sequence []
function first(arr, n=1) {
    var result = [];

    if (arr.length >= n) {
        for (var i = 0; i < n; i++) {
            result.push(arr[i]);
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            result.push(arr[i]);
        }

    }
    return result
}
console.log(first(['a','w','d','asd','q','s'],5))