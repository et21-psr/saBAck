var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.posteo.findAll().then(posteos =>{

    res.status(200).jsonp(posteos);

  })
});


module.exports = router;
