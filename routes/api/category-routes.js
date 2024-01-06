const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all categories with their associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });

    res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(err);
  }
});

// Get a category by its id and show the info including its associated products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (categoryData == null) {
      res.status(404).json({ message: `Category with id ${req.params.id} not found!` });
      return;
    } else {
      res.status(200).json(categoryData);
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(404).json(error);
  }
});

// Update a category by id
router.put('/:id', async (req, res) => {
  try {
    const existingCategory = await Category.findByPk(req.params.id);
    if (!existingCategory) {
      res.status(404).json({ message: `Category with id ${req.params.id} not found!` });
      return;
    } else {
      const categoryData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      res.status(200).json(categoryData);
    };
  } catch (error) {
    res.status(500).json(error);
  };
});

// Delete a category by id
router.delete('/:id', async (req, res) => {
  try {
    const existingCategory = await Category.findByPk(req.params.id);
    if (!existingCategory) {
      res.status(404).json({ message: `Category with id ${req.params.id} not found!` });
      return;
    } else {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(categoryData);
    };
  } catch (error) {
    res.status(500).json(error);
  };
});

module.exports = router;
