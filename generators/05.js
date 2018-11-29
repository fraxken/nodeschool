const fs = require("fs");

function run(generator) {
    const it = generator(done);

    function done(err, result) {
        console.log("done!");
        if (err) {
            return it.throw(err);
        }
        it.next(result);
    }
    done();
}

// eslint-disable-next-line
run(function* (done) {
    // rattrapez l’exception
    let firstFile;
    try {
        const dirFiles = yield fs.readdir("NoNoNoNo", done);
        firstFile = dirFiles[0];
    }
    catch (err) {
        firstFile = null;
    }

    console.log(firstFile);
});
