const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'caferio';

const knex = require("../db/knex.js");

module.exports = {
// Pull all users
    getAll: function(req, res) {
    knex("users")
        .then((results)=>{
            res.json(results)
        })
    },
    // Add a single user
    addUser: (req,res) => {
      console.log("server req recieved? ")
      hasher.hash(req.body).then((user)=>{
          knex('users').insert({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            address: user.address
          }, 'id').then((results)=>{
            res.json({message: "Successfully registered, please log in", id:results[0]});
          }).catch((err)=>{
            res.status(400).send({message: err});
          })
        })
    },
    //delete user
    deleteUser: (req, res) => {
        knex('users').del().where('id', req.decoded.id)
        .then((results) => {
            res.send(200)
        })
    }
}
