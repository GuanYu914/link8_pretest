function findRangeNums(arr, lessThen) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lessThen) {
      res.push(arr[i]);
    }
  }
  return res;
}

function toObjectFormate(arr) {
  let countNum = arr[0];
  let counts = 0;
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    countNum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (countNum === arr[j]) {
        counts++;
      }
    }
    res[`${countNum}`] = counts;
    counts = 0;
  }
  return res;
}

function removeDuplicateNumber(arr) {
  let res = [...arr];
  let deleteNum = res[0];
  for (let i = 0; i < res.length; i++) {
    deleteNum = res[i];
    for (let j = i + 1; j < res.length; j++) {
      if (deleteNum === res[j]) {
        res.splice(j, 1);
      }
    }
  }
  return res;
}

function sort(arr) {
  let res = [...arr];
  let min_idx;
  for (let i = 0; i < res.length; i++) {
    min_idx = i;
    for (let j = i + 1; j < res.length; j++) {
      if (res[j] < res[min_idx]) {
        min_idx = j;
      }
    }
    let tmp = res[min_idx];
    res[min_idx] = res[i];
    res[i] = tmp;
  }
  return res;
}

const a = [3, 9, 11, 44, 9, 1];
const rangedNums = findRangeNums(a, 10);
const removedNums = removeDuplicateNumber(rangedNums);

console.log(sort(removedNums));
console.log(toObjectFormate(rangedNums));
