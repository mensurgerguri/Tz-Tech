let express = require('express');
let router = express.Router();


let controller = require('../controllers/cart.controller');

router.get('/getItems', controller.getItems);
router.get('/cancelItem', controller.cancelItem);

module.exports = router;