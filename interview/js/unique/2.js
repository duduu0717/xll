function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return [];
    }
    // indexOf
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        // res没有这个元素indexOf返回-1
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}