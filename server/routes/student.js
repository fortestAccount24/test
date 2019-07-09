const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage : storage});

router.get('/', studentController.getAll)
router.get('/findByName', studentController.findByName)
router.post('/',  upload.single('photo'),studentController.add)
router.delete('/:id', studentController.delete)

module.exports = router;