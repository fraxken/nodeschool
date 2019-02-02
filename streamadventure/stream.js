// Require Node.js Dependencies
const { Transform } = require("stream");

/**
 * @class Stream
 */
class Stream extends Transform {
    // eslint-disable-next-line
    _read() {
        // do nothing
    }

    /**
     * @method _write
     * @param {!Buffer} chunk buffer chunk!
     * @param {*} enc encoding
     * @param {*} next next
     * @return {void}
     */
    _write(chunk, enc, next) {
        this.push(chunk);
        next();
    }
}

module.exports = Stream;
