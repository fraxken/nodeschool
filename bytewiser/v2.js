console.log(new Buffer(process.argv.slice(2).map((e) => +e)).toString("hex"));
