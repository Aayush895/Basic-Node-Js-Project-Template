const { UserRepository } = require('../repository')

const userObj = new UserRepository()

async function createUser(data) {
  try {
    const createdUser = await userObj.createData(data)
    return createdUser
  } catch (error) {
    throw error
  }
}

async function showUsers() {
  try {
    const users = await userObj.getAll()
    return users
  } catch (error) {
    throw error
  }
}

async function getUserById(id) {
  try {
    const user = await userObj.getbyId(id)
    return user
  } catch (error) {
    throw error
  }
}

async function update(id, data) {
  try {
    const updatedData = userObj.update(id, data)
    return updatedData
  } catch (error) {
    throw error
  }
}

async function deleteUser(id) {
  try {
    const deletedUser = userObj.destroy(id)
    return deletedUser
  } catch (error) {
    throw error
  }
}

module.exports = {
  createUser,
  showUsers,
  getUserById,
  update,
  deleteUser,
}
