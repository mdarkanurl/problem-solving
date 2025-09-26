/**
 * Given an array of numbers
 * return how many triangles we can make out this array item
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b); // sort ascending
    let count = 0;
    const n = nums.length;

    for (let i = n - 1; i >= 2; i--) { // fix the largest side nums[i]
        let left = 0;
        let right = i - 1;

        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                // all elements between left and right form valid triangles
                count += (right - left);
                right--;
            } else {
                left++;
            }
        }
    }

    return count;
};

console.log(triangleNumber([2,2,3,4])); // Expected 3
console.log(triangleNumber([4,2,3,4])); // Expected 4