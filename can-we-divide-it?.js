//your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
//
// A few cases:
//
//
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
//
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
function isDivideBy(number, a, b) {
    if(number%a===0 && number%b===0){
        return true
    }
    else  return false
}
console.log(isDivideBy(12,5,6))