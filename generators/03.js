function* flat(arr) {
    for (const sub of arr) {
        if (Array.isArray(sub)) {
            yield* flat(sub);
        }
        else {
            yield sub;
        }
    }
}

const A = [1, [2, [3, 4], 5], 6];
for (const f of flat(A)) {
    console.log(f);
}
