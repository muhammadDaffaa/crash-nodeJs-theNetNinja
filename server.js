const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set Header Content-Type
  res.setHeader("Content-Type", "text/html");
  // Set the content
  // res.write("Hello World");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;

    default:
      path += "404.html";
      break;
  }

  // Send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });

  // // Ending the response
  // res.end();
});

server.listen(3000, "localhost", () => console.log("Port 3000 is actived"));
