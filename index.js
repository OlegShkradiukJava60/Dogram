let iLet = 10;
var iVar = 20;
var iVar = 30;

console.log('Ilet from global Window object', window.iVar);
console.log('Ilet from global Window object', window.iLet);

function funVar () {
    var x = 10;
    for(var x = 0; x < 5; x++){

    }
    console.log('var', x);
}
funVar()
function funLet () {
    var x = 10;
    for(var x = 0; x < 5; x++){

    }
    console.log('let', x);
}
funLet()
