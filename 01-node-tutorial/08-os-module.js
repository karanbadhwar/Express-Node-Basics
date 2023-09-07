// OS Module

const os = require("os");

//info about current user

const user = os.userInfo();

// Method returns the system Uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  platform: os.platform(),
};

console.log(currentOS);
