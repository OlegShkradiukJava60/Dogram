// scope
//let has block scope
// variable leak: you define variable in block implying freeing of variable outside of 
function funVar() {
    for (var i = 0; i < 3; i++) {
        i++
    }
    console.log(i);
}
funVar();
function funLet() {
    for (var i = 0; i < 3; i++) {
        i++
    }
    console.log(i);
}
funLet();