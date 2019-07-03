var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.categoria.findAll().then(cat =>{

    res.status(200).jsonp(cat);

  })
});


module.exports = router;
