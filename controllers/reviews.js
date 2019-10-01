const knex = require("../db/knex.js");

module.exports = {
// Pull all reviews
    getAll: function(req, res) {
    // res.send("is this working");
    knex("reviews")
        .then((results)=>{
            res.json(results)
        })
    },
    // Add a single review
    addReview: (req,res) => {
        knex('reviews')
            .insert(req.body)
            .then((reviews)=> {
                res.json(reviews)
        })
    },
    editReview: (req, res) => {
        knex('reviews').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },
    deleteReview: (req, res) => {
        knex('reviews').del().where('id', req.params.id).then((results) =>{
            res.send(200)
        })
    }
}




    