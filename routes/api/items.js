const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Item Model
const Item = require("../../models/Item");

// @route GET api/items
// @desc  Get All Items
// @acess Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/items
// @desc  Create An Item
// @acess Private
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((error) => console.log(error));
});

// @route DELETE api/items/:id
// @desc  Delete An Item
// @acess Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((error) => res.status(404).json({ success: false }));
});

module.exports = router;
