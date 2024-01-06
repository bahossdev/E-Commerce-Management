const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// Get all tags and their associated products 
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a tag by its id and show the info including its associated products
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }]
    });

    if (tagData == null) {
      res.status(404).json({ message: `Tag with id ${req.params.id} not found!` });
      return;
    } else {
      res.status(200).json(tagData);
    };
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(404).json(error);
  }
});

// Update a tag by id
router.put('/:id', async (req, res) => {
  try {
    const existingTag = await Tag.findByPk(req.params.id);
    if (!existingTag) {
      res.status(404).json({ message: `Tag with id ${req.params.id} not found!` })
    } else {
      const tagData = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(tagData);
    };
  } catch (error) {
    res.status(500).json(error);
  };
});

// Delete a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const existingTag = await Tag.findByPk(req.params.id);
    if (!existingTag) {
      res.status(404).json({ message: `Tag with id ${req.params.id} not found!` });
      return;
    } else {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(tagData);
    };
  } catch (error) {
    res.status(500).json(error);
  };
});

module.exports = router;
