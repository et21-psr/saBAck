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
/*delete */
router.delete('/:id', function(req, res, next) {

let id = req.params.id;

models.perfil.destroy({
  where:{
    id_perfil: id
    }
  }).then(result => {
      res.status(200).jsonp(result);
  });
})

/*post */
router.post('/', function(req, res, next) {

let perfil = req.body;
  models.perfil.create(perfil).then(perfil =>{

  res.status(200).jsonp(perfil);

  })
})

module.exports = router;
