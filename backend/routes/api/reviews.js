//api/routes/reviews
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Business, Review, User } = require('../../db/models');

const router = express.Router();

router.get('/:businessId', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
        where: { businessId: req.params.businessId },
        include: [User]
    });
    return res.json(reviews)
}));


router.post('/new', asyncHandler(async function (req, res) {
    const review = await Review.create(req.body);
    return res.json(review)
})
);

router.delete('/:reviewId', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);
    await review.destroy()
    return res.json(req.params.reviewId)
}));

module.exports = router;
