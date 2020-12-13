// ! 1
// const xy = require("./people.js");

// console.log(xy.people);
// console.log(xy.ages);

// !2
const { people, ages } = require("./people");

console.log(people, ages);

const os = require("os");
console.log(os.platform(), os.homedir());
