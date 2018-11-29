function* upper(items) {
    for (const item of items) {
        yield typeof item === "string" ? item.toUpperCase() : null;
    }
}

const bad_items = ['a', 'B', 1, 'c'];

for (const item of upper(bad_items)) {
    console.log(item);
}
