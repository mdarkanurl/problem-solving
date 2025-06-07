// Question is 👇
// Given an array and a target, return indices of two distinct numbers that add up to the target.
// Each input has exactly one solution.

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
        
    }
};