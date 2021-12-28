// console.log("It's working!")

const reverse = (str) => {
  // basic
  // for(let i= 0 ; str.length >= ; i--  ) {
  // }

  // 1-  built in js
  //   return str.split("").reverse().join("");

  // 2- for of
  // OF: stirng, array
  // IN: Obj
  //   let reverse = "";
  //   for (let i of str) {
  //     reverse = i + reverse;
  //   }

  //   return reverse;
  return str.split("").reduce((reserved, char) => {
    return (reserved = char + reserved);
  }, "");
};

module.exports = reverse;
