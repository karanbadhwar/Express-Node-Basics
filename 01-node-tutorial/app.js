// console.log("Welcome to Node Tutorial");

// const lodash = require("lodash");

// const items = [1, [2, 3], [4]];

// const newItems = lodash.flattenDeep(items);

// console.log(newItems);

// console.log("Hello people");

const http = require("http");
const { readFileSync, createReadStream } = require("fs");

const server = http
  .createServer((req, res) => {
    // const text = readFileSync("./content/big.txt", "utf-8");
    // res.end(text);
    const fileStream = createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
