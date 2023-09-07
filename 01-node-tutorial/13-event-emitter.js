// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods

customEmitter.on("response", (name, age) => {
  console.log(`Data received`, name, age);
});
customEmitter.on("response", () => {
  console.log(`Other logic here`);
});

customEmitter.emit("response", "karan", 28);
// keep track of the order
// additional arguments
// built-in modules utilize it
