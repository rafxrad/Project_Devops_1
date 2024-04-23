const express = require("express");
const router = require("./routes.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = 3000;

const startServer = () => {
  return app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
  });
};

module.exports = {
  app,
  startServer,
};

if (require.main === module) {
  // Inicia o servidor se o arquivo foi executado diretamente
  startServer();
}
