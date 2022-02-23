const router = require('express').Router();

const loginController = require('../controller/login.controller');


router.get('/', loginController.getCreateUserForm);
router.post('/', loginController.createUser);

module.exports = router;
