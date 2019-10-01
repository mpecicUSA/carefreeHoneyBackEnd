//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const products = require("../controllers/products.js")
// const reviews = require("../controllers/reviews.js")
const purchases = require("../controllers/purchases.js")
const login_register = require('../controllers/login_register.js')
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'caferio'


module.exports = (app) => {

  //TOKEN NOT REQURED
  app.get("/users", users.getAll);
  app.get('/products', products.getAll);
//  app.get('/reviews', reviews.getAll);
app.post('/login', login_register.login);
app.post('/register', login_register.register);
app.post('/purchases', purchases.addPurchase);

// app.use(verifyToken);

//TOKEN REQUIRED
  app.get('/purchases/:id', purchases.getAll); 
  app.delete('/users/delete/:id', users.deleteUser);
  app.post('/products/add', products.addProduct);
  app.post('/products/edit/:id', products.editProduct);
  app.delete('/products/delete/:id', products.deleteProduct);
  //  app.post('/reviews/addReview', reviews.addReview);
  //  app.patch('/reviews/edit/:id', reviews.editReview);
  //  app.delete('/reviews/delete/:id', reviews.deleteReview);

}


function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.status(401).send({message: 'Token incorrect, You are not authorized to view that resource, Please log in to continue.' });
      } else {
        // if everything is good, save to request for use in other routes
        delete decoded.password;
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(401).send({
        message: 'No Token, You are not authorized to view that resource, Please log in to continue.'
    });

  }
}
