const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController')
const presenceController = require('../controller/presenceController')



router.get('/', presenceController.getAll)
router.put('/:id', presenceController.markPresent)


module.exports = router;