// Given a circular array nums,
// find the maximum absolute difference between adjacent elements.

// Some example

[
    {
        Example: 1,
        Input: nums = [1,2,4],
        Output: 3,
        Explanation: 3
        // Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.
    },
    {
        Example: 2,
        Input: nums = [8, 1, 6, 2],
        Output: 7,
        Explanation: 7
    }
]


var maxAdjacentDistance = function(nums) {
    let maxNum = [];
    let subNum;
    for(let i = 0; i < nums.length; i++) {
        if(i === (nums.length - 1)) {
            subNum = Math.abs(nums[nums.length - 1] - nums[0]);
            maxNum.push(subNum);
        } else {
            subNum = Math.abs(nums[i] - nums[i + 1]);
            maxNum.push(subNum);
        }
        
    }

    const maxItem = Math.max(...maxNum);
    return maxItem;
};