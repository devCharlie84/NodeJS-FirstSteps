//Servidor solamente de ejercicio de práctica
const http = require("http");

const server = http.createServer(onRequest);

function onRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200); //HTTP OK Status

  let name = "Carlos";
  let data = JSON.stringify(name);
  res.end(`Hola ${data}`);
}

server.listen(8000, function () {
  console.log("Listening on port 8000");
});
