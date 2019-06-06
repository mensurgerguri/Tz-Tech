let express = require('express');
let router = express.Router();


let controller = require('../controllers/items.controller');

router.get('/listItems', controller.listItems);
// router.get('/cancelItem', controller.cancelItem);

router.post('/addToCart', controller.addToCart);

module.exports = router;