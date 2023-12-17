const express = require('express');
const router = express.Router();

const userController = require('../../../controllers/api/v1/users_api');

// router.get('/sign-up', userController.signUp);
router.post('/register', userController.signUp);
router.post('/login', userController.createSession);

module.exports = router;