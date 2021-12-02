const express = require("express");
const {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish,
} = require("../controllers/dishController");
const { validateJwt } = require("../helpers/processJwt");

const router = express.Router();

// GET /api/dishes
router.get("/", validateJwt, getAllDishes);
// GET api/dishes/dish/:id
router.get("/dish/:id", getDishById);
// POST /api/dishes/dish
router.post("/dish", createDish);
// PUT /api/dishes/dish/:id
router.put("/dish/:id", updateDish);
// DELETE /api/dishes/dish/:id
router.delete("/dish/:id", deleteDish);

module.exports = router;
