const { readFile } = require("fs").promises;
const EOLCode = "\n".charCodeAt(0);

readFile(process.argv[2]).then((buf) => {
    let index;
    let offset = 0;
    let count = 0;
    while ((index = buf.indexOf(EOLCode, offset)) !== -1) {
        count++;
        offset = index + 1;
    }
    console.log(count);
}).catch(console.error);
