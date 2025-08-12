import http from "http";
const port = "1337";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/users") {
    console.log("bingo");
  }
});

server.listen(port, () => {
  console.log("listening at", port);
});
