/*
Routing definition for the /user routes.
*/

const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Routing assignment to relevant functions defined in the controller.js file.
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);

module.exports = router;
