/** @type {Number} */
const sommeNumbers = process.argv
    .slice(2)
    .map((int) => Number(int))
    .reduce((prev, curr) => prev + curr, 0);
console.log(sommeNumbers);
