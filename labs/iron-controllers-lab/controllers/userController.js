const bcrypt = require('bcrypt');
const User = require("../models/User");
const { generateJwt } = require('../helpers/processJwt');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get the users" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get the user" });
  }
};

const signUp = async (req, res) => {
  const { email } = req.body;
  const testEmail = await User.findOne({email});
  if (testEmail) {
    return res.status(500).json({message: "Coudln't create user"});
  }
  const user = new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({message: "Couldn't save the user"});
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if (!user) {
    return res.status(500).json({message: "Please check credentials"}) // user is not found
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(500).json({message: "Please check credentials"});
  }
  const token = await generateJwt(user._id);
  return res.status(200).json({token, user});
}

module.exports = {
  getAllUsers,
  getUserById,
  signUp,
  loginUser
};
