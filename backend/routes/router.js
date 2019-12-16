var express = require('express');
var registrationRoutes = express.Router();
var Users = require('../model/registrationSchema')

registrationRoutes.route('/register').post(function (request, response) {
    let user = new Users(request.body);
    console.log(user);
    user.save()
        .then(user => {
            response.send(user)
            console.log("Successfully Added to database")
            this.route('/login')
        })
        .catch(error => {
            response.send("Failed to add user in database")
            console.log(error)
        })
});

registrationRoutes.route('/login/:username').get(function (request, response) {
    Users.findOne(request.params.username).then(user => {
        console.log(user)
        response.sendStatus(200)
    }).catch(error => {
        console.log('error')
        response.sendStatus(404)
    })
})

module.exports = registrationRoutes;