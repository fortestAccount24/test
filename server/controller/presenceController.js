const student = require('../models/student')
const presenceSheet = require('../models/presence')

module.exports = {
    getAll: function (req, res) {

        presenceSheet.find().populate('student').then((s)=>{
            if(s){
                res.status(200).send(s)
            }
            else{
                res.status(400).send("no sheet found")
            }
        }).catch(err=>res.status(400).send(err))
    },
    markPresent:  function (req, res) {
        let id = req.params.id

        presenceSheet.findOne({_id : id}).then((ps)=>{
            if(ps){
                ps.present = true ; 
                ps.save().catch(err=>res.status(400).send(err))
                res.status(200).send(ps)
            }
            else{
                res.status(400).send("no sheet found")
            }
        }).catch(err=>res.status(400).send(err))
    },
}