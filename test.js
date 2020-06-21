console.log("testing the reason");

var a=3;
var b=4;
console.log("addition of a and b :" + (a+b) );
console.log("multiplication of a and b :" + (a*b) );

var arrrayItem = [ 1,2,3,4];
console.log("Array items displayed :" + arrrayItem );

var arrayOfStrings = ["apple", "orange", "grape", "leamon"];
console.log("Array of strings displayed :" + arrayOfStrings );

var arrayCreatedCreatingObj = new Array("lion", "tiger", "goat");
console.log("Array of strings created by obj displayed :" + arrayCreatedCreatingObj );
arrayCreatedCreatingObj.push("dog");
console.log("Array of strings created by obj displayed :" + arrayCreatedCreatingObj );
arrayCreatedCreatingObj.splice(1,1);
console.log("Array of strings created by obj displayed :" + arrayCreatedCreatingObj );
arrayCreatedCreatingObj.pop();
console.log("Array of strings created by obj displayed :" + arrayCreatedCreatingObj );

console.log("Data type of arrayCreatedCreatingObj " +typeof arrayCreatedCreatingObj);
console.log("Data type of a " +typeof a);
console.log("Data type of arrayOfStrings " +typeof arrayOfStrings);