const { readFile } = require('fs');

function *split(buf, code = '\n'.charCodeAt(0)) {
    let index, offset = 0;
    while((index = buf.indexOf(code, offset)) !== -1) 
        yield buf.slice(offset, index);
        offset = index + 1;
    yield buf.slice(offset)
}

readFile(process.argv[2],(err, data) => {
    if(err) throw err;
    [...split(data)].map(v => console.log(v))
});