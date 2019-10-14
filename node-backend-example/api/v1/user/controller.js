/*
Controller file to contain core functionality of the http service.

Other functionalities that operate for different models would
likely have the same routing - controller schema as the one defined in the 'api/v1/user' folder.

The functions here are exported so that they can be used in the index.js routing file.
*/

const rp = require('request-promise');

// Get all users controller logic to get data from jsonplaceholder
exports.getAllUsers = async  (req, res) => {
    try {
        let response = await rp('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        return res.send(response);

    } catch (err) {
        console.log(err);
        return res.json({
            'success': 'failed',
            'message': err.message
        });
    }
};

exports.getUser = async  (req, res) => {
    try {
        console.log(req.params.id);
        let id = req.params.id;
        let response = await rp('https://jsonplaceholder.typicode.com/users/' + id);
        console.log(response);
        return res.send(response);

    } catch (err) {
        console.log(err);
        return res.json({
            'success': 'failed',
            'message': err.message
        });
    }
};