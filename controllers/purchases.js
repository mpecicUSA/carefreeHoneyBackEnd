
const knex = require("../db/knex.js");

module.exports = {
// Pull all products
    getAll: function(req, res) {
    // res.send("is this working");
    knex("purchases")
        .then((results)=>{
            res.send(results)
        })
        .catch((err) => {
            res.send(err)
        })
    },
    addPurchase: function(req,res) {
        knex('purchases').insert({
            product_id: req.body.product_id,
            user_id: req.body.user_id,
            quantity: req.body.quantity
        }).then((res) => {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }
}