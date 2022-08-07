import { Homepage } from "./src/homepage/homepage";

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(new Homepage().build());
});

app.listen(3000);

app.listen(port, () => {
  console.log(`App is running at port: ${port}`);
});
