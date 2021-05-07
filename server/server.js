const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const answersRoute = require('./routes/answers');
const userDataRoute = require('./routes/userData');

const app = express();

// DATABASE
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'));

//CONFIG

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//ROUTES

app.use('/answer', answersRoute);
app.use('/userData', userDataRoute);

//LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));