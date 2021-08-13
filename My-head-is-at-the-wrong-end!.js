//example
// ["tail", "body", "head"]), ["head", "body", "tail"]);
//["tails", "body", "heads"]), ["heads", "body", "tails"]);
//["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
function fixTheMeerkat(arr) {
    return arr.reverse()
}
console.log(fixTheMeerkat(["tail", "body", "head"]))