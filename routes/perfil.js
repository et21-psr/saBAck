var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.perfil.findAll().then(perfil =>{

    res.status(200).jsonp(perfil);

  })
});


module.exports = router;
