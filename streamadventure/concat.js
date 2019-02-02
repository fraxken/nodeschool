/* eslint-disable */
const { Transform } = require("stream");

function ConcatStream(cb) {
    const bufs = [];

    const tr = Transform({
        transform(chunk, enc, next) {
            bufs.push(chunk);
            next();
        }
    });
    tr.on("finish", () => cb(Buffer.concat(bufs)));

    return tr;
}

process.stdin.pipe(ConcatStream((buf) => {
    const u8 = new Uint8Array(buf).reverse();
    console.log(Buffer.from(u8).toString());
}));
