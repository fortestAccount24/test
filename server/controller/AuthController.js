const User = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
    resgiter : function(req,res){
        const user = new User(req.body)
        User.findOne({email :user.email }).then((u)=>{
            if(u){
               return res.status(400).json({message : 'user already exists'})
            }else{
                console.log('2')

                bcrypt.genSalt(10,(err,salt)=>{
                    console.log('1')
                    bcrypt.hash(user.password,salt,(err,hash)=>{
                        if(err){
                            
                            res.send(err)
                        }
                       user.password = hash
                        user.save().then((u)=>{
                    res.status(200).send(u)
                }).catch(err => res.send(err))
            })
        })
            }
        }).catch(err => res.send(err))

    },


    login : function(req,res){
        const email = req.body.email
        const password = req.body.password
        User.findOne({email : email}).then((u)=>{
            if(u){
                bcrypt.compare(password , u.password).then((match)=>{
                    if(match){
                        // this user can login
                        const payload = { id : u.id, name : u.name }
                        jwt.sign(
                            payload,
                            'key',
                            {expiresIn : 3600},
                            (err,token)=>{
                                res.json({token :token})
                            }
                        )
                    }else{
                        res.status(400).send('wrong password')
                    }
                })

            }else{
                res.status(400).send('user not found')
            }
        })
        
    }

}