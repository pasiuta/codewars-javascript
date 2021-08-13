
//([1,2,3,4,5,6],2) should be [2,4,6]
//([1,2,3,4,5,6],3) should be [3,6]
function divisibleBy(numbers, divisor) {
   let newArray=[]
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%divisor===0){
            newArray.push(numbers[i])
        }
    }
    return newArray
}
console.log(divisibleBy([1,2,3,4,5,6],3));