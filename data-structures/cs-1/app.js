console.log("It's working!");
const palindrome = (str) => {
  return str.split("").every((char, idx) => {
    return char === str[str.length - idx - 1];
  });
};

// const palindrome = (str) =>
//   str.split("").every((char, idx) => char === str[str.length - idx - 1]);
module.exports = palindrome;
