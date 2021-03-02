//Ejercicio con http, sin express
const http = require("http");
const url = require("url");

const port = 8000;

const server = http.createServer((req, res) => {
  const requestUrl = url.parse(req.url);
  const path = requestUrl.pathname;

  const parts = path.split("/").slice(1);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const payload = {
    hello: parts[1],
  };
  res.write(JSON.stringify(payload));
  res.end();
});

server.listen(port, () => {
  console.log("#####################################");
  console.log(`###### LISTENING ON PORT ${port} #######`);
  console.log("#####################################");
});
