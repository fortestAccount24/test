const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../schemas/userSchema')


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'key';
module.exports = passport =>{
    passport.use(
        new JwtStrategy(opts , (payload,done)=>{
            User.findById(payload.id).then((user)=>{
                if(user){
                    return done(null,user);
                }
                else{
                    return done(null,false)
                }
            });
        })
    )
}