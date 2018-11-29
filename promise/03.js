function onReject(error) {
    console.log(error.message);
}

new Promise((resolve, reject) => {
    setTimeout(reject, 300, new Error("REJET !"));
}).then(null, onReject);
