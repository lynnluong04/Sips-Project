//api/routes/reviews
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Business, Review } = require('../../db/models');

const router = express.Router();

router.get('/:businessId', asyncHandler(async (req, res) => {
    console.log("CONSOLE LOG!!", req.params)
    const reviews = await Review.findAll({

    });
    return res.json(reviews)
    }));

module.exports = router;
