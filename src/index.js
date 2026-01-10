import { HOST, PORT } from "./constants.js";
import http from "http";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "index.html");
const page = fs.readFileSync(filePath, "utf8");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(page);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
