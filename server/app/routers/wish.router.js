let express = require('express');
let router = express.Router();


let controller = require('../controllers/wishlist.controller.js');


router.post('/addWish', controller.addwish);

module.exports = router;
