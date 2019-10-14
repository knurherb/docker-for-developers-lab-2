/*
Main router file for the functionality defined in the 'api/v1' folder.

This main router will include any other routes defined in any subsequent model folder (such as the example user).
*/
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// -----------------------------------------------------------------------
// api router
// -----------------------------------------------------------------------
const UserController = require('./user/index');
router.use('/user', UserController);

// Export the router so it can be imported in the entry point index.js file
module.exports = router;
