import http from "http";
import { PrismaClient } from "@prisma/client";
import { resolve } from "path";
import { rejects } from "assert";

const port = "1337";
const prisma = new PrismaClient();

// util to parse data into json
const dataParser = async (req) => {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/users") {
    const { username } = await dataParser(req);

    await prisma.userModel.create({
      data: {
        username: username,
      },
    });

    const users = await prisma.userModel.findMany({
      select: { username: true },
    });

    console.log(users)
  }
});

server.listen(port, () => {
  console.log("listening at", port);
});
