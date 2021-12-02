const User = require("../models/User")

const getAllUsers = async (req, res) => {
    const users = await User.find();
    try {
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the users"})
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    try {
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the user"});
    }
}

const createUser = async (req, res) => {
    const userToCreate = await User.create(req.body);
    try {
        return res.status(201).json(userToCreate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create the user"});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}