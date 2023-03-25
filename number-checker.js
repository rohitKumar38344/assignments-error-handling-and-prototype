// QUESTION: 9

const numberChecker = function (arr) {
  return function (val) {
    return arr.includes(val);
  };
};

const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);
console.log(checkNum(31));
