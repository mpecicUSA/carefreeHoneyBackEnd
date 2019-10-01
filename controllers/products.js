
const knex = require("../db/knex.js");

module.exports = {
// Pull all products
getAll: function(req, res) {
    // res.send("is this working");
    knex("products")
        .then((results)=>{
            res.json(results)
        })
        .catch((err)=> {
            console.log("this is an error", err)
        })
},
    // Add a single product
    addProduct: (req,res) => {
        console.log('req recieved add product')
        knex('products')
            .insert(req.body)
            .then((products)=> {
                res.json(products)
        })
    },
    // Edit a product by id
    editProduct: (req, response) => {
        knex('products').update(req.body).where('id', req.params.id).then((response) => {
            console.log(200);
        })
    },
    // delete a product by id
    deleteProduct: (req, res) => {
        knex('products').del().where('id', req.params.id).then((results) =>{
            res.send(200)
        })
    }
}

