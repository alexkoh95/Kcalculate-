// routes/nutrition

const express = require('express');
const router = express.Router();

// Load todo model
const itemNutrition = require('../models/nutrition');

// @route GET nutrition/test
router.get('/test', (req, res) =>{
    res.send('todo list item route testing!')
});

// @route GET nutrition
// @description Get all nutrition item
router.get('/', async (req, res) => {
    try {
        const allNutritionItem = await itemNutrition.find();
      res.json(allNutritionItem)
    } catch (e) {
        res.status(404).json({ "noNutritionfound": e })
    };
});

// @route GET /nutrition/:id
// @description Get single todoitem by id
router.get('/:id', (req, res) => {
  itemNutrition.findById(req.params.id)
  .then(item => res.json(item))
  .catch(err => res.status(404).json({ noLogFound: 'No item found' }));
});

// @route GET /nutrition?
// @route POST /nutrition
// @description create/add/save todo item
// @access Public
router.post('/', (req, res) => {
  itemNutrition.create(req.body)
  .then(log => res.json({ msg: 'log added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to log this item' }));
});

// @route GET api/books/:id
// @description Edit and Update 
// @access Public
// router.put('/:id', (req, res) => {
//   Todo.findByIdAndUpdate(req.params.id, req.body)
//     .then(todoitem => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });

// @route GET api/books/:id
// @description Delete todoitem by id
// @access Public

// router.delete('/:id', (req, res) => {
//   Todo.findByIdAndRemove(req.params.id, req.body)
//     .then(todoitem => res.json({ mgs: 'todo item deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a item' }));
// });

module.exports = router;