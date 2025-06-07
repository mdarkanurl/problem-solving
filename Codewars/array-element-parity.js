// Question is 👇
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value,
// except for one integer that is either only negative or only positive. Your task will be to find that integer.

function solve(arr){
    //..
    let set = new Set(arr);
    for(let num of arr) {
      if(!set.has(-num)) {
        return num;
      }
    }
};