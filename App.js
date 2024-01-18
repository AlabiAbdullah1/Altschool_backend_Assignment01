const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Alabi Abdullahi Ayodeji");
  res.end();
});

server.listen(8900, () => {
  console.log("Server running on port 8900...");
});
