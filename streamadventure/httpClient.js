const got = require("got");

got.stream("http://localhost:8099").pipe(process.stdin).pipe(process.stdout);
