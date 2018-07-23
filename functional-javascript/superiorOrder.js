/**
 * @func repeat
 * @param {Function} operation operation Callback
 * @param {!Number} num iteration number
 * @returns {any}
 */
function repeat(operation, num) {
    if (num <= 0) {
        return void 0;
    }
    operation();

    return repeat(operation, --num);
}

module.exports = repeat;
