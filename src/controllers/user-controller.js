const {StatusCodes} = require('http-status-codes');
const {UserService} = require('../services');

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await UserService.createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created a User',
      data: user,
      error: {},
    })
  } catch (error) {
    throw error
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.showUsers();
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully fetched all Users from DB',
      data: users,
      error: {},
    })
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id)
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully fetched User by Id DB',
      data: user,
      error: {},
    })
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  
}

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await UserService.deleteUser(req.params.id)
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully deleted User by Id from DB',
      data: deleteUser,
      error: {},
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
}