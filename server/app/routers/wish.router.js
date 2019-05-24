let express = require('express');
let router = express.Router();


let controller = require('../controllers/wishlist.controller.js');


router.post('/addwish', controller.addwish);

module.exports = router;
