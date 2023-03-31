// #1
// How do you find the missing number in a given integer array of 1 to 100?
// example: Given array [5], the missing # are [1,2,3,4]
const a = [5],
  count = 5;

const missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);