const path = require("path");
const fs = require("fs");

console.log(path.join(__filename, "..", "testDirectory"));

let nodeModules =
  "node_modules" +
  path.join(__filename, "..", "testDirectory") +
  "node_modules";
console.log(nodeModules);

console.log(/node_modules$/gi.test(nodeModules));

// console.log(String(fs.statSync("./path")));

let arr = [1, 2, 3, 34];

let arr2 = [2, 3, 4, [7, 3, 4]];

console.log("without", arr.concat(arr2));

console.log("with ...", arr.concat(...arr2));
