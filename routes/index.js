var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET sign up form
router.get("/signup", function(req, res, next) {
  res.render("signup_form", {
    title: "Sign-up form"
  })
});

module.exports = router;
