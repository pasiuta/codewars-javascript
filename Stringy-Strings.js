//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
//
// the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
// with size 4 should return : '1010'.
//
// with size 12 should return : '101010101010'.
function stringy(size) {
    let newString = '';
    for(let i=1;i<=size;i++)
        newString+=i%2
    return newString
}
console.log(stringy(4));