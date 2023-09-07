const http = require("http");

// req is incoming http request
// res is outgoing http response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(
    `<h1>oops!</h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Go back home</a>`
  );
});

server.listen(5000, () => {
  console.log("server is running on 5000");
});
