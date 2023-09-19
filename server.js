const express = require ("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;


app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});