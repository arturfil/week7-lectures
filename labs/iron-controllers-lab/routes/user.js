const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, signUp, loginUser } = require('../controllers/userController');
const { validateJwt } = require('../helpers/processJwt');

router.get("/", validateJwt, getAllUsers)
router.get("/user/:id", getUserById);
router.post("/signup", signUp);
router.post("/login", loginUser);

module.exports = router;