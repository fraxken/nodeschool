/* eslint-disable */
const { Transform } = require("stream");

const splitStream = function() {
    let tmp = null;
    const code = "\n".charCodeAt(0);

    return Transform({
        transform(buf, enc, next) {
            let index;
            let offset = 0;

            const chunk = tmp === null ? buf : Buffer.concat([tmp, buf]);
            while ((index = chunk.indexOf(code, offset)) !== -1) {
                this.push(chunk.slice(offset, index + 1));
                offset = index + 1;
            }

            tmp = chunk.slice(offset);
            next();
        }
    });
}

const caseStream = function() {
    let isOdd = true;
    const toUpperCase = char => char < 97 || char > 122 ? char : char - 32;
    const toLowerCase = char => char < 65 || char > 90 ? char : char + 32;

    return Transform({
        transform(chunk, enc, next) {
            for (let i = 0; i < chunk.length; i++) {
                chunk[i] = isOdd ? toLowerCase(chunk[i]) : toUpperCase(chunk[i]);
            }
            isOdd = !isOdd;
            this.push(chunk);

            next();
        }
    });
}

process.stdin.pipe(splitStream()).pipe(caseStream()).pipe(process.stdout);
