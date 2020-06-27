const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc  Get All Items
// @acess Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
}); 

// @route POST api/items
// @desc  Create An Item
// @acess Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
}); 

module.exports = router;