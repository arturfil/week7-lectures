const Dish = require("../models/Dish");

const getAllDishes = async (req, res) => {
    const dishes = await Dish.find();
    try {
        return res.status(200).json(dishes);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get dishes"})
    }
}

const getDishById = async (req, res) => {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    try {
        return res.status(200).json(dish);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the dish"})
    }
}

const createDish = async (req, res) => {
    const dish = await Dish.create(req.body);
    try {
        return res.status(201).json(dish);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create the dish"});
    }
}

const updateDish = async (req, res) => {
    const { id } = req.params;
    const dish = await Dish.findByIdAndUpdate(id, req.body, {new:true});
    try {
        return res.status(202).json(dish);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update the dish"});
    }
}

const deleteDish = async (req, res) => {
    const { id }  = req.params;
    await Dish.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "Succesful deletion"});
    } catch (error) {
        return res.status(500).json({message: "Couldn't delete the dish"})
    }
}

module.exports = {
    createDish,
    getAllDishes,
    getDishById,
    updateDish,
    deleteDish
}