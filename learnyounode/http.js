function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    await sleep(100);
}
try {
    main();
}
catch (err) {
    console.error(err);
}
