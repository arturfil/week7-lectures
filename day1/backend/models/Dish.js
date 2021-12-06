const { model, Schema } = require("mongoose");

const DishSchema = Schema({
  name: {
    type: String,
  },
  ingredients: {
    type: [],
  },
  price: {
    type: Number,
  },
  allergens: {
    type: [],
  },
  calories: {
    type: Number,
  },
});

module.exports = model("Dish", DishSchema);
