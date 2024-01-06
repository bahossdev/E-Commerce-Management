const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

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

// Get a category by its id 
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (categoryData == null) {
      res.status(404).json({ ok: false, message: `No category found with id ${req.params.id}!` });
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
    res.status(400).json(error);
  }
});

// Update a category by id
router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const existingCategory = await Category.findByPk(categoryId);
    if (!existingCategory) {
      res.status(404).json({ ok: false, message: `No category found with id ${req.params.id}!` });
      return;
    } else {
      const categoryData = await Category.update(req.body, {
        where: {
          id: categoryId,
        },
      });

      res.status(200).json(categoryData)
    };
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const existingCategory = await Category.findByPk(categoryId);
    if (!existingCategory) {
      res.status(404).json({ ok: false, message: `No category found with id ${req.params.id}!` });
      return;
    } else {
      const categoryData = await Category.destroy({
        where: {
          id: categoryId,
        },
      });
      res.status(200).json(categoryData);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
