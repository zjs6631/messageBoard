var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('form');

});

router.post('/new', function(req, res, next){
    let message = req.body.message;
    let name = req.body.name;
    let added = new Date();
  
    messages.push({text: message, user: name, added: added});
    res.redirect('/')
  })

module.exports = router;