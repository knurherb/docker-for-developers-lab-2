/*
http service application that implements the express.js framework.

This is the index file that acts as the entry point to the http service application
*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Configure express.js instance to use the cors and bodyparser express middleware
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

// Configure the application routes to include functionality and routing from the 'api/v1' folder.
const apiV1 = require('./api/v1/router');
app.use('/api/v1', apiV1);

// Application will listen on port 3000 for any incoming requests.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
