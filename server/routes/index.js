var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/hello', function (req , res){
  res.send('hello from the other side')
})

module.exports = router;
