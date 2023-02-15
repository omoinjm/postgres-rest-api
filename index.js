const express = require("express");
const clientRoutes = require("./src/clients/routes");

// Init app and port
const app = express();
const port = process.env.NODE_APP_PORT;

app.use(express.json());

app.use("/api/v1/clients", clientRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
