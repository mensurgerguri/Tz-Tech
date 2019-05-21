let express = require('express');
let router = express.Router();


let controller = require('../controllers/user.controller.js');


router.post('/login', controller.login);

router.post('/register', controller.register);

router.get('/getEmails', controller.emails);

router.post('/resetPassword', controller.resetPassword);
 
module.exports = router;