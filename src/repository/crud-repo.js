class CrudRepository {
  constructor(model) {
    this.model = model
  }

  async createData(data) {
    try {
      const response = await this.model.create(data)
      return response
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll()
      return response
    } catch (error) {
      throw error
    }
  }

  async getbyId(data) {
    try {
      const response = await this.model.findByPk(data)
      return response;
    } catch (error) {
      throw error
    }
  }

  async update(colId, data) {
    try {
      const updateData = await this.model.update(data, {
        where: {
          id: colId
        }
      })
      return updateData
    }
    
    catch (error) {
      throw error
    }
  }

  async destroy(data) {
    try {
      const destroyedData = await this.model.destroy({where: {
        id: data
      }})

      return destroyedData
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudRepository