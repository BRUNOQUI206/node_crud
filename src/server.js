const variables = require('./config/variables.config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use('/api',routes);

server.listen(variables.var.PORT, () => {
    console.log(`Server running on: http://localhost:${variables.var.PORT}`);
});