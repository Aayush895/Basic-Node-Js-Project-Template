const CrudRepository = require("./crud-repo");
const {Users} = require('../models')

class UserRepository extends CrudRepository {
  constructor() {
    super(Users)
  }
}

module.exports = UserRepository