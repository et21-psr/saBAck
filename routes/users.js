var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  var usuario = [{
  nombre:"juan",
  edad:"50",
  altura: "1.76"
  },
  {
  nombre:"nazareno",
  edad:"36",
  altura: "2.56"
  }
]

  res.status(200).jsonp(usuario);
});


module.exports = router;
