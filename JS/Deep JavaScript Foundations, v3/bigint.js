console.log(typeof doesntexist)
var v = null;
console.log(typeof v);

v = function(){}
console.log(typeof v);

v = [1, 2, 3]
console.log(typeof v);

var v = 42n;
console.log(typeof v);