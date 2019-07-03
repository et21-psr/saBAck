var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.usuario.findAll().then(users =>{

    res.status(200).jsonp(users);

  })
});


module.exports = router;
