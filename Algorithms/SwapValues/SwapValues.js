// I would like to be able to pass an array with two elements to my swapValues function to swap the values.
// However it appears that the values aren't changing.
// Can you figure out what's wrong here?

function swapValues() {
  var temp = arguments[0][0];
  arguments[0][0] = arguments[0][1];
  arguments[0][1] = temp;
}

var arr = [1, 2];
swapValues(arr);
console.log(arr[0], '', arr[1]);
