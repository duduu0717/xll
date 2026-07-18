function unique(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error');
        return [];
    }
    //O(n^2)->O(n*logn)
    arr =arr.sort();
    let res =[arr[0]];
    for(let i=1;i<arr.length;i++){
        if(arr[i]!=arr[i-1]){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique([1,2,5,3,2]));