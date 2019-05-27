let express = require('express');
let router = express.Router();


let controller = require('../controllers/categories.controller.js');


router.get('/getCategories', controller.getCategories);
 
module.exports = router;