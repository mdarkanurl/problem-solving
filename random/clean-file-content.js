// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       Mohammad
// After the program runs, the output should be
// hello world my name is Mohammad

import { readFile, writeFile } from "fs";

function cleanFile(fileName) {
    // Read the file
    readFile(fileName, 'utf8', (err, data) => {
        if(err) throw err;

        console.log('This is raw read data', data);

        const modifyData = data.replace(/\s+/g, ' ').trim();
        console.log(modifyData);

        writeFile(fileName, modifyData.toString(), 'utf8', (err) => {
            if(err) throw err;
            console.log("Writing part done!!");
        })
    });
}

cleanFile("me.txt")