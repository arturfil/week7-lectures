const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser } = require('../controllers/userController');

router.get("/", getAllUsers)
router.get("/user/:id", getUserById);
router.post("/user", createUser);

module.exports = router;