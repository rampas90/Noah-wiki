// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.
// All the arguments except the last will be arrays, the last argument is n.
// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value

function nthSmallest() {
var Concated = [];
var Arr = Array.prototype.slice.call(arguments, 0, arguments.length-1);

for (var i = 0; i < Arr.length; i++) {
  Concated = Concated.concat(Arr[i]);
}

Concated.sort();
console.log(Concated[arguments.length-1]);
return Concated[arguments.length-1];
}

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
