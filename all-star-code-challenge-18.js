//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.
//
// Example (Inputs --> Output)
//
// "Hello", 'o' => 1
// "Hello", 'l' => 2
// "", 'z'      => 0

function strCount(str, letter){
   let newArray=str.split('')
    let count =0
    for(let i=0;i<newArray.length;i++){
        if(newArray[i].includes(letter)){
            count++
        }
    }
    return count
}
console.log(strCount('hello','l'))