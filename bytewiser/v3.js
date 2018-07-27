function r(buf) {
    let index;
    while((index = buf.indexOf(0x2E)) !== -1) buf[index] = 0x21;
    console.log(buf);
}
process.stdin.on('data',r);