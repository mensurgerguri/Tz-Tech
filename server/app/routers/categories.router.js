let express = require('express');
let router = express.Router();


let controller = require('../controllers/categories.controller.js');


router.get('/getCategories', controller.getCategories);

router.get('/getSubCategories/:id', controller.getSubCategories);

router.get('/getSubCategoryFields/:id', controller.getSubCategoryFields);

router.get('/getCategoryFields/:id', controller.getCategoryFields);

router.post('/saveNewCategory', controller.saveNewCategory);
 
module.exports = router;