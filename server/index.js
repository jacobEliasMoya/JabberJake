import http from "http";
import { PrismaClient } from "@prisma/client";
import { create } from "domain";

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

const createUser = async (username) => {
  try {
    await prisma.userModel.create({
      data: {
        username: username,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/users") {
    const { username } = await dataParser(req);
    createUser(username);
  }
});

server.listen(port, () => {
  console.log("listening at", port);
});
