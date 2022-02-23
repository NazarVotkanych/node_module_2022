const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');


router.get('/', userController.getAllUsers);

router.get('/:userId',userMiddleware.isUserValid, userController.getUserById);
router.post('/:userId',userController.deleteUserById);


module.exports = router;
