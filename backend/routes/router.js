var express = require('express');
var registrationRoutes = express.Router();
var Users = require('../model/registrationSchema')

registrationRoutes.route('/register').post(function (request, response) {
    let user = new Users(request.body);
    console.log(user);
    user.save()
        .then(user => {
            response.sendStatus(200).send(user)
            console.log("Successfully Added to database")
        })
        .catch(error => {
            response.status(400).send("Failed to add user in database")
        })
})

module.exports = registrationRoutes;