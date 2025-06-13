// Write a function that receives an array of names.
// For each name, print "Hello, [name]!" after waiting for a number of seconds equal to the length of the name.
// The greetings should print one after the other, not all at once.
// Also print time deff amoung printing those name.

(async (names) => {
    for (let i = 0; i < names.length; i++) {
        await new Promise((res) => {
            let time = new Date();
            console.log('Time started for', names[i], time);
            setTimeout(() => {
                console.log(names[i]);
                res();
            }, names[i].length + '000');
        })
    }
})(['Arkan', 'Ali', 'Kafi', 'Ko']);