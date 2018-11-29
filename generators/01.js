function* range(from, to) {
    for (let curr = from; curr <= to; curr++) {
        yield curr;
    }
}

for (const r of range(5, 10)) {
    console.log(r);
}
