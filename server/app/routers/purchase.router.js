
let express = require('express');
let router = express.Router();


 let controller = require('../controllers/purchase.controller.js');
router.get('/getOrders/:id', controller.getOrders);
router.get('/getOrder/:id', controller.getOrder);

// router.get('/getOrders', controller.purchase);

 module.exports = router;
