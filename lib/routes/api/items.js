const router = require('express').Router();

// Item Model
const Item = require ('../../models/Item');

router 

    // @route   GET /api/items
    // @desc   Get All Items
    // @access Public
    .get('/', (req, res, next) => {
        Item.find()
            .sort({ date: -1 })
            .then(items => res.json(items))
            .catch(next);
    })

    // @route  POST /api/items
    // @desc   Create New Item
    // @access Public
    .post('/', (req, res, next) => {
        new Item(req.body).save()
            .then(item => res.json(item))
            .catch(next);
    })

    // @route  DELETE /api/items/:id
    // @desc   Delete Item by ID
    // @access Public
    .delete('/:id', (req, res) => {
        Item.findById(req.params.id)
            .then(item => item.remove())
            .then(response => res.json({ removed: !!response }))
            .catch(err => res.status(404).json({ removed: false }));
    });

module.exports = router;