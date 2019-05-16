const server = require("./api/server.js");
const port = process.env.PORT || 4000;
//Heroku will be looking for an environment with PORT

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
