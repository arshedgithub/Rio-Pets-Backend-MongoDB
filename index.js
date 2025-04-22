const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const adRoutes = require('./routes/ad');

dotenv.config();

const app = express();
app.use(express.json());
// app.use('/ads', adRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(4000, () => console.log('Server running on http://localhost:4000'));
  })
  .catch(err => console.log(err));
