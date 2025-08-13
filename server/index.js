import http from "http";
import { PrismaClient } from "@prisma/client";

const port = "1337";
const prisma = new PrismaClient();

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/users") {
    let raw = "";

    req.on("data", (c) => (raw += c));

    req.on("end", () => {
      try {
        const data = raw ? JSON.parse(raw) : {};
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ recieved: data }));
        return;

      } catch(err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Malformed JSON" }));
        return;

      }
    });
  }
});

server.listen(port, () => {
  console.log("listening at", port);
});
