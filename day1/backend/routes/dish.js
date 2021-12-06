const express = require("express");
const {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish,
} = require("../controllers/dishController");
const { validateJwt, isAdmin } = require("../helpers/processJwt");

const router = express.Router();
const { check } = require('express-validator');
const { validateFields } = require("../helpers/validateFields");

// GET /api/dishes
router.get("/", validateJwt, isAdmin, getAllDishes);
// GET api/dishes/dish/:id
router.get("/dish/:id", validateJwt ,getDishById);
// POST /api/dishes/dish
router.post("/dish", [
  validateJwt,
  check("name", "name field is required").not().isEmpty(),
  check("ingredients", "ingredients field is required").not().isEmpty(),
  check("calories", "calories field is required").not().isEmpty(),
  check("price", "price field is required").not().isEmpty(),
  check("allergens", "allergens field is required").not().isEmpty(),
  validateFields
] ,createDish);
// PUT /api/dishes/dish/:id
router.put("/dish/:id", validateJwt, isAdmin, updateDish);
// DELETE /api/dishes/dish/:id
router.delete("/dish/:id", validateJwt, isAdmin, deleteDish);

module.exports = router;
