//Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
//     Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
//     Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
function preFizz(n) {
let newArray=[];
for (let i=1; i<=n;i++){
     newArray.push(i)

}
return (`[${newArray}], Array should be from 1 to ${n}`)
}
console.log(preFizz(1))