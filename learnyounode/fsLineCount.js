const { readFileSync } = require("fs");
const EOLCode = "\n".charCodeAt(0);

const buf = readFileSync(process.argv[2]);
{
    let index;
    let offset = 0;
    let count = 0;
    while ((index = buf.indexOf(EOLCode, offset)) !== -1) {
        count++;
        offset = index + 1;
    }
    console.log(count);
}
