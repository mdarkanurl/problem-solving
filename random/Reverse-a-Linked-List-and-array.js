// Given an array and reverse the array
[
    {
        Input: head = [1,2,3,4,5],
        Output: [5,4,3,2,1]
    }
];

(function (heads) {
    let Output = [];
    for (let i = heads.length - 1; i >= 0; i--) {
        Output.push(heads[i]);
    }
    console.log(Output);
})([1, 2, 3, 4, 5, 10]);

// TODO SOLVE THIS PROBLEM 👇
// Given the head of a singly linked list, reverse the linked list in place and return the new head.