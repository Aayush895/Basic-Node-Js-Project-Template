const getReqController = (req, res) => {
  res.send('Hello World!')
}

const postReqController = (req, res) => {
  res.send('Post request controller')
}

module.exports = {
  getReqController,
  postReqController
}