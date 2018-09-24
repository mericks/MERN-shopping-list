const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

const items = require('./lib/routes/api/items');

const app = express();

// BodyParser Middleware
// app.use(bodyParser.json());

app.use(express.json());

// DB config
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/mern-shopping-list';

//connect to Mongo
mongoose
    .connect(dbURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));