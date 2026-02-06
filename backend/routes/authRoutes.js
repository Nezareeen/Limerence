const express = require('express');
const router = express.Router();
const { registerStudent, registerCompany, loginUser } = require('../controllers/authController');

router.post('/register/student', registerStudent);
router.post('/register/company', registerCompany);
router.post('/login', loginUser);

module.exports = router;
