const app = require("./app");
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("#####################################");
  console.log(`###### LISTENING ON PORT ${port} #######`);
  console.log("#####################################");

  console.log(`http://localhost:${port}/`);
});
