/**
 * @func countWords
 * @param {String[]} inputWords random input
 * @returns {Object}
 */
function countWords(inputWords) {
    return inputWords.reduce((prev, curr) => {
        Reflect.set(prev, curr, Reflect.has(prev, curr) ? ++prev[curr] : 1);

        return prev;
    }, {});
}

module.exports = countWords;
