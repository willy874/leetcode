/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 1000,
    M: 1000,
  };
  return s.split('').reduce((prev, current, index) => {
    const currentNum = symbolMap[current];
    const nextNum = symbolMap[s[index + 1]];
    if (currentNum < nextNum) {
      return prev - currentNum;
    }
    return prev + currentNum;
  }, 0);
};
