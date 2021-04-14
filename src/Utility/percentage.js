function percentage(n) {
    var res = n;
    if (res <= 0 || res > 100) {
        res = Math.floor(Math.random() * 100) + 1;
    }
    res = Math.floor(res);
    return res;
}
export default percentage;