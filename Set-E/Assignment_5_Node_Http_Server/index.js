var http = require("http");

var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from Gauri\n");
});
server.listen(8001, () => {
  console.log("Server is running on port 8000");
});
