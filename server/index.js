// basic node server, need to work more in the AM rather than so late - loosing progress


import http from "http";
import { PrismaClient } from "@prisma/client";

// setting port
const port = "1337";

// initializing prisma client
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

    const users = await prisma.userModel.findMany();

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
