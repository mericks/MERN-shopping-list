const express = require('express');
const morgan = require('morgan')('dev');
const cors = require('cors')();
const path = require('path');
const items = require('./routes/api/items');

const app = express();

app.use(express.json());  // No need for BodyParser Middleware when using express.json()
app.use(morgan);
app.use(cors);


// Routes
app.use('/api/items', items);


// Serve static assets when in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


module.exports = app;