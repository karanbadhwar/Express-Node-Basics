const path = require("path");

//File Path seperator
console.log(path.sep);

//Join() property
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//Basename () property
const base = path.basename(filePath);
console.log(base);

//Resolve() property - it provides the absolute path of the file
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
