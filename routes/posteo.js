var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.posteo.findAll().then(posteos =>{

    res.status(200).jsonp(posteos);

  })
});

router.get('/:id', function(req, res, next) {

let id = req.params.id;

models.posteo.findOne({
  where:{
    id_posteo: id
    }
  }).then(result => {
      res.status(200).jsonp(result);
  });
})

module.exports = router;
