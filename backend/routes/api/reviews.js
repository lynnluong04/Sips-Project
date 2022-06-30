//api/routes/reviews
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Business, Review } = require('../../db/models');

const router = express.Router();

router.get('/:businessId', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
        where: {businessId: req.params.businessId}
    });
    return res.json(reviews)
    }));


router.post('/new', asyncHandler(async function (req, res) {
      const review = await Review.create(req.body);
      return res.json(review)
    })
  );
module.exports = router;
