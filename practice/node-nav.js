import http from "http";
import fs from "fs";

let server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (request.url == "/")
    fs.createReadStream("./templates/index.html").pipe(response);
  else if (request.url == "/about")
    fs.createReadStream("./templates/about.html").pipe(response);
  else
    fs.createReadStream("./templates/error.html").pipe(response);
});

const PORT = 4000;
const HOST = "localhost"; // 127.0.0.1

server.listen(PORT, HOST, () => {
  console.log(`Сервер запущен: http://${HOST}:${PORT}`);
});
