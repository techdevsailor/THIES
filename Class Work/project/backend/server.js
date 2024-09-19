const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express()
const port = 3000

dotenv.config()
connectDB();

app.use("/api/users");

app.get('/', (req, res) => {
  res.send('Hello!!! teri mehrbani ha sudhar jaaa')
})

app.listen(port, () => {
  console.log(`Ye project ${port} port py chal rha ha`)
})