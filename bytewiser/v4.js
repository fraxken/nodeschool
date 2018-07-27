const { readFile } = require("fs").promises;

function *split(buf, code = "\n".charCodeAt(0)) {
    let index;
    let offset = 0;
    while ((index = buf.indexOf(code, offset)) !== -1) {
        yield buf.slice(offset, index);
        offset = index + 1;
    }
    yield buf.slice(offset);
}

readFile(process.argv[2]).then((data) => {
    [...split(data)].map((buf) => console.log(buf));
}).catch(console.error);
