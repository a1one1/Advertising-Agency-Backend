require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./routes'));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    console.log('connecting MongoDB');
    app.listen(process.env.PORT, () => {
      console.log('server has been started on port');
    });
  } catch (e) {
    console.log(e.message);
  }
};
connect();
