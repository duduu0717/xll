function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return [];
  }
  return Array.prototype.filter.call(arr, function (item, index) {
    console.log(item, index);
    return arr.indexOf(item) === index;
  });
}
console.log(unique([1, 2, 3, 2, 5]));