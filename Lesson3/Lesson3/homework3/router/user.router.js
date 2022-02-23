const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');


router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.isUserValid,
    userMiddleware.isUserExist,
    userController.getUserById
);
router.post('/:userId',
    userMiddleware.isUserValid,
    userController.deleteUserById);


module.exports = router;
