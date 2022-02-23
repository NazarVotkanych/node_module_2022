const router = require('express').Router();

const signInController = require('../controller/signIn.controller');


router.get('/', signInController.getFormSignIn);
router.post('/', signInController.signIn);


module.exports = router;
