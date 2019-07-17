var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/*Muestra todos los usuarios */
router.get('/', function(req, res, next) {

  models.perfil.findAll().then(perfil =>{

    res.status(200).jsonp(perfil);

  })
});
/* Muestra un usuario especifico. */
router.get('/:id', function(req, res, next) {

let id = req.params.id;

models.perfil.findOne({
  where:{
    id_perfil: id
    }
  }).then(result => {
      res.status(200).jsonp(result);
  });
})

module.exports = router;
