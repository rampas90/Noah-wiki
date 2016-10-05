// Given two integers, which can be positive and negative,
// find the sum of all the numbers between including them too and return it.
// If both numbers are equal return a or b.
// Note! a and b are not ordered!
// Example:
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3t
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a, b) {
  var result = 0;

  if (a < b) {
    for (var i = a; i <= b; i++) {
      result += i;
    }
  } else if (a > b) {
    for (var i = a; i >= b; i--) {
      result += i;
    }
  } else {
    return a;
  }
  console.log(result);
  return result;
}

GetSum(1, 0);
GetSum(-1, 2);
