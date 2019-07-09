const student = require('../models/student')
const presence = require('../models/presence')
const validation = require('../validation/validateStudent');
const multer = require('multer');
const upload = multer({dest:'uploads/'});

module.exports = {
    getAll: function (req, res) {

        student.find().then((s)=>{
            if(s){
                res.status(200).send(s)
            }
            else{
                res.status(400).send("no students found")
            }
        }).catch(err => res.status(400).send(err))
    },
    add: function (req, res) {
        const file = req.file
        console.log(file)
        const { errors, isValid } = validation(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
          }
        let pr = new student({
            name: req.body.name,
            email : req.body.email,
            enrollmentNumber : req.body.enrollmentNumber,
            photo : req.file.path
        }, { _id: false });
        pr.save().then((doc) => {
            let pre = new presence({
                student : doc
            })
            pre.save().catch(err=> res.status(400).send(err))
            res.send(doc);
        }).catch((e) => {
            res.status(400).send(e);
        });
    },
    delete: function (req, res) {
        const id = req.params.id
        student.findOne({_id: id}).then((s)=>{
            if(s){
                const deletedStudent = s
                presence.findOne({'student' :s }).then((pres)=>{
                        pres.remove().catch(err=>res.status(400).send(err))
                })
                s.remove();
                res.status(200).send(deletedStudent)
            }
            else{
                res.status(400).send("student not found")
            }
        }).catch(err=> res.status(400).send(err))
    },
    findByName: function (req, res) {
        const name = req.body.name
        student.find({name: { "$regex": name, "$options": "i" }}).then((s)=>{
            if(s){
                res.status(200).send(s)
            }
            else{
                res.status(400).send("no students found")
            }
        }).catch(err=> res.status(400).send(err))
    },
}
