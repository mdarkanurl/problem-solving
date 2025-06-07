// Question is 👇
// Check if the digits of a number are in non-decreasing order (each digit is less than or equal to the next).
// Return true if it is, otherwise false.

function tidyNumber(n){
  //your code here
  let nStr = n.toString();
  for(let i = 0; i < nStr.length; i++) {
    if(nStr[i] > nStr[i + 1]) {
      return false;
    }
  }
  return true;
}