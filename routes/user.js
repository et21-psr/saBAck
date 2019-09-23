var express = require('express');
var router = express.Router();
var models =  require("./../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.usuario.findAll().then(users =>{

    res.status(200).jsonp(users);

  })
});

router.get('/:id', function(req, res, next) {

let id = req.params.id;
/*------------------ */
models.usuario.findOne({
  where:{
    id_user: id
    }
  }).then(result => {
      res.status(200).jsonp(result);
  });
})


router.delete('/:id', function(req, res, next) {

let id = req.params.id;

models.usuario.destroy({
  where:{
    id_user: id
    }
  }).then(result => {
      res.status(200).jsonp(result);
  });
})


router.post('/', function(req, res, next) {

let user = req.body;
  console.log (user)
  models.usuario.create(user).then(user =>{

  res.status(200).jsonp(user);

  })
})


router.post('/login', function(req, res, next) {

let user = req.body;
  console.log (user);
  models.usuario.findOne({
    where:{
      nombre_user: user.nombre_user,
      contraseña: user.contraseña,
      }
    }).then(result => {
      if(result){
        res.status(200).jsonp("BIENVENIDO"+result.nombre_user);

      }
      else {
        res.status(200).jsonp("ERROR");
      }

    });

})

module.exports = router;
