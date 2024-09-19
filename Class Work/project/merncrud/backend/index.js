const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('../backend/Routes/userRoutes');

const app= express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/merncrud';

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users' , userRoutes);

app.get('/', (req, res) => {
  res.send('Output show ho rhi ha')
})
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected Shukr hai'))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server ${PORT} port py run ho rha ha`));