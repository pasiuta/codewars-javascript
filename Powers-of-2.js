function powersOfTwo(n){
    let newArray=[]
    for (let i=0;i<=n;i++){
        newArray.push(Math.pow(2, i))
    }
    return [newArray.join(',')]
}
console.log(powersOfTwo(1))