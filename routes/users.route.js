const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');

const router = Router();

router.get('/users', usersController.getAllUsers);
router.post('/registration', usersController.registrationUser);
router.post('/authorization', usersController.authorizationUser);
router.delete('/user/:userId', usersController.deleteUser)

module.exports = router;
