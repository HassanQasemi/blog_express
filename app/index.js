const express = require("express");
const app = express();

module.exports = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log(`app is running on port : ${port}`);
  });
};
