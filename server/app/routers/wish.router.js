let express = require('express');
let router = express.Router();


let controller = require('../controllers/wishlist.controller.js');


router.post('/addwish', controller.addwish);
router.get('/getWishes/:id', controller.getWishes);
router.get('/deleteWish/:id', controller.deleteWish);

module.exports = router;
