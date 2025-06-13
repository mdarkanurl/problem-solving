// This function takes an array of numbers and, for each number,
// waits for a number of seconds equal to its value (multiplied by 1000 ms),
// then prints the number. Each wait happens one after another, so the total time is the sum of all the waits.

(async function (inputs) {
    for (let input of inputs) {
        await new Promise((res, rej) => {
            setTimeout(() => {
                console.log(input);
                res();
            }, (input + '000'));
        });
    }
})([2, 1, 5, 9]);