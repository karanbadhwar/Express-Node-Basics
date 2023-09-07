//FS- File system

//Sync - Blocking
// const { readFileSync } = require("fs");
// const { writeFileSync } = require("fs");
const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} and ${second}`,
  { flag: "a" }
);
