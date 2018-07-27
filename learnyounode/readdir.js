const { readdir } = require("fs").promises;
const { extname } = require("path");

// Retrieve argv
const [dir, ext] = process.argv.slice(2);

async function main() {
    const files = await readdir(dir);
    for (const fileName of files.filter((file) => extname(file) === `.${ext}`)) {
        console.log(fileName);
    }
}
main().catch(console.error);
