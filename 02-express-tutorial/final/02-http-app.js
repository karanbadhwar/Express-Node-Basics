const { readFileSync } = require("fs");

//get all files

const navbar = readFileSync("./navbar-app/index.html");
const navbarStyles = readFileSync("./navbar-app/styles.css");
const navbarLogo = readFileSync("./navbar-app/logo.svg");
const navbarLogic = readFileSync("./navbar-app/browser-app.js");

//Programmatically get all files
// import { readdir } from "node:fs/promises";

// async function dirFiles() {
//   try {
//     const files = await readdir("./navbar-app/");
//     for (const file of files) console.log(file);
//   } catch (err) {
//     console.error(err);
//   }
// }

// dirFiles();

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  // console.log(url);

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(navbar);
    res.end();
  }
  //Path for styles.css
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(navbarStyles);
    res.end();
  }
  //Path for JavaScript logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(navbarLogic);
    res.end();
  }
  // path for logo.svg
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(navbarLogo);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);

//WriteHead for meta Data and to define the type of data we are sending back
//res.end() is used to send the data back to the client and to inform that the data has been sent
//res.write() is the data we are sending back and it is sent in streams
