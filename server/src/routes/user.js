// src/routes/user.js
const express = require('express');
const { loginUser, updateUserName, getProjects, getUserById, checkAuth } = require('../controllers/user');
const { verifyUserAuthentication } = require('../middleware/authentication');

const router = express.Router();

router.post('/login', loginUser); // Ensure this route is defined
router.post('/', verifyUserAuthentication, updateUserName);
router.post('/checkAuth', verifyUserAuthentication, checkAuth);
router.get('/projects', verifyUserAuthentication, getProjects);
router.get('/:userId', verifyUserAuthentication, getUserById);

module.exports = router;
