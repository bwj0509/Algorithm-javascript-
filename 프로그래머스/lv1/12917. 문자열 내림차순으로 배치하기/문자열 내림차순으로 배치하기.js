function solution(s) {
  let arr = [...s];
  arr.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });

  let sum = "";
  arr.forEach((s) => (sum += s));
  return sum;
}