// Functions understanding

// ************* Named Functions

function findSquare (a){
    console.log("Squre caalculated via named function  for " + a + " :");
    return a*a;
};

console.log(findSquare(5));

//***************** Ananymus functions */

var anomumusFunctions = function(a){
    console.log("Squre caalculated via Ananymus function  for " + a + " :");
    return a*a;
}

console.log(anomumusFunctions(6));

// ************* new Function way

var newFunction = new Function("a", "b","console.log('checkinghg log');return a*a;");

console.log("New Function object way :" + newFunction(7));

// Self - Invoking Functions

(function(a){
    console.log("I am self invoking function :");
    console.log("square is :" + a*a);
})(8);