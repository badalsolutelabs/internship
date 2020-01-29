var myAge = Number("0o46");
var myNextAge = Number("39");
var myCatsAge = Number("n/a");
console.log(myAge - "my son's age");

console.log(myCatsAge === myCatsAge);

console.log(isNaN(myAge));
console.log(isNaN(myCatsAge));
console.log(isNaN("my son's age"));

console.log(Number.isNaN(myCatsAge));
console.log(Number.isNaN("my son's age"));