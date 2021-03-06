/* eslint-disable */
const http = require("http");
const { Transform } = require("stream");

const toUpperCase = Transform({
    transform(chunk, enc, next) {
        for (let i = 0; i < chunk.length; i++) {
            const char = chunk[i];
            chunk[i] = char < 97 || char > 122 ? char : char - 32;
        }

        this.push(chunk);
        next();
    }
});

http.createServer((req, res) => {
    req.pipe(toUpperCase).pipe(res);
}).listen(process.argv[2]);
