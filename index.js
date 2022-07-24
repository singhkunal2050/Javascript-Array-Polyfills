// Polyfills

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

Array.prototype.myReduce = function (cb, initialValue = 0) {
  for (let i = 0; i < this.length; i++) {
    initialValue = cb(initialValue, this[i], i, this);
  }
  return initialValue;
};

/////// Examples

let arr = [1, 2, 3, 4, 5];

// Map
let results = arr.map(function (item, index, array) {
  return item * 2;
});
console.log(results);

// Filter
let filterResults = arr.filter(function (item, index, array) {
  return item % 2 == 0;
});
console.log(filterResults);

// Reduce
const sum = arr.reduce(function (acc, item, index, array) {
  return acc + item;
}, 100);
console.log(sum);

// Reduce usecase 2
let dummy = [1, 2, 3, 4, 5, 1, 2, 19, 2, 3, 4, 4];
let reduceResults = dummy.reduce(function (acc, curr, i, arr) {
  if (acc.hasOwnProperty(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(reduceResults);

// Custom Polyfills

// MyMap
let results2 = arr.myMap(function (item, index, array) {
  return item * 2;
});

console.log(results2);

// MyFilter
let filterResults2 = arr.myFilter(function (item, index, array) {
  return item % 2 == 0;
});
console.log(filterResults2);

// MyReduce
const sum2 = arr.myReduce(function (acc, item, index, array) {
  return acc + item;
}, 100);
console.log(sum2);

// myReduce usecase 2
let reduceResults2 = dummy.reduce(function (acc, curr, i, arr) {
  if (acc.hasOwnProperty(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(reduceResults2);
