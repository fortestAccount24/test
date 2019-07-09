var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../schemas/userSchema')
const AuthController = require('../controller/AuthController')
const passport = require('passport')

require('../config/passport')(passport) // as strategy in ./passport.js needs passport object


router.post('/register', AuthController.resgiter)
router.post('/login', AuthController.login)


router.get('/',passport.authenticate('jwt' , {session : false}),function(req,res){

  res.send(req.user)
})


router.get('/:id',function(req,res){
  console.log('heyyy')
  User.findOne({_id  : req.params.id }).then((u)=>{
    if( u)
    {res.send(u)}
    else
    res.send('none')
  }).catch((err)=>res.send(err))

})

router.post('/' , function(req,res){
    user = new User({
      name : req.body.name,
      familyName: req.body.familyName, 
      email:   req.body.email
    })
    user.save().then((u)=> res.send(u)).catch((err)=> res.status(400).send(err))
})
router.put('/:id' , function(req,res){
  User.findOneAndUpdate({_id : req.params.id}, {$set : {...req.body}}).then((u) =>res.send('edited'))
  .catch((err)=>res.send(err))
})
router.delete('/:id' , function(req,res){
  User.findOneAndRemove({_id : req.params.id}).then((u) =>res.send('delete'))
  .catch((err)=>res.send(err))
})

module.exports = router;
