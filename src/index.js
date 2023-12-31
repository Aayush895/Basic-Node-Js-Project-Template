const express = require('express');
const apiRoutes = require('./routes')
const app = express();

const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.listen(PORT, ()=> {
  console.log(`Server is up and running on port: ${PORT}`);
})