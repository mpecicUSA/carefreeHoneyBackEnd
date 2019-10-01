const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'caferio';

const knex = require("../db/knex.js");



module.exports = {

    login: (req, res) => {
        knex('users')
        .where('email', req.body.email)
        .first()
        .then((user)=>{
          if(user){
            hasher.check(user, req.body).then((isMatch)=>{
              if(isMatch){
                const token = jwt.sign(user, secret);
                delete user.password;
                res.json({message: "Successfully signed in", token, user})
              }else{
                res.status(400).send({message: 'Invalid Email / Password'});
              }
            })
          }else{
            res.status(400).send({message: 'Invalid Email / Password'});
          }
        }).catch((err)=>{
          res.status(400).send({message: 'Invalid Email / Password'});
        })
    },

    register: (req, res) => {
        hasher.hash(req.body).then((user)=>{
          console.log("register req  recieved");
            knex('users').insert({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              address: user.address,
              admin: false
            }, 'id').then((results)=>{
              res.json({message: "Successfully registered, please log in", id:results[0]});
            }).catch((err)=>{
              res.status(400).send({message: err});
            })
          })
    },

    verify: (req, res)=>{
        res.json(req.decoded);
      }
}
