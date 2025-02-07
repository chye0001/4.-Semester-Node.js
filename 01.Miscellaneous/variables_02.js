"use strict";

//line 1 cathes this error on line 4.
totalGlobalVariables = "Never EVER!!! do this"
var globaleVariable = "Also Never EVER, do this"






//globale scope


function myFunction() {
    //function scope
}



{
    //block scope
}



{
    var myValue = false;
    {
        var myValue = true;
    }
    console.log("this is value is true, since var bleeds into every scope:", myValue)
}



{
    let myValue = false;
    {
        let myValue = true;
    }
    console.log("this is value is false, since let is only scoped inside the block it was initilized:", myValue)
}




// this is a classical interview question:
// what is the error?
// what is the result?
// how to fix this?

for (var i = 0; i <= 5; i++) {
    setInterval(
        console.log(i), 1000
    )
}

for (let i = 0; i <= 5; i++) {
    setInterval(
        console.log(i), 1000
    )
}