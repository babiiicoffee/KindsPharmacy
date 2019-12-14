const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
    fname : {
        type: String,
        required: true
    },
    lname : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    emai : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('Users', Users);