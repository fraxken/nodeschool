/**
 * @func doubleAll
 * @param {Number[]} numbers numbers array
 * @returns {Number[]}
 */
function doubleAll(numbers) {
    if (numbers instanceof Array === false) {
        throw new TypeError("numbers should be instanceof prototype Array");
    }

    return numbers.map((num) => num * 2);
}

module.exports = doubleAll;
