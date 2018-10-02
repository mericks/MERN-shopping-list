const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const items = require('./lib/routes/api/items');

const app = express();

// No need for BodyParser Middleware when using express.json()
app.use(express.json());


// DB config
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/mern-shopping-list';

//connect to Mongo
mongoose
    .connect(dbURI)
    .then(() => console.log(`MongoDB Connected @${dbURI}...`))
    .catch(err => console.log(err));


// Use Routes
app.use('/api/items', items);

// Serve static assets when in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));