const variables = require("./config/variables.config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');
const routes = require("./routes");
const { createTable } = require("./config/table.config");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/news");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

server.use(upload.single("image"));
server.use("/api", routes);

createTable().then(() => {
  server.listen(variables.var.PORT, () => {
    console.log(`Server running on: http://localhost:${variables.var.PORT}`);
  });
}).catch(err => {
  console.error('Unable to create table:', err);
});
