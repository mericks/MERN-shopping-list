const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    extract: {
        type: String,
        required: true
    },

    content_url: {

        desktop: {
            type: String,
            required: false
        },

        mobile: {
            type: String,
            required: false
        }
    },

    thumbnail_src: {
        type: String,
        required: false
    },

    pageid: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Item = mongoose.model('Item', ItemSchema);