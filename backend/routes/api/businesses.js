const express = require('express');
const asyncHandler = require('express-async-handler');
const { Business } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
const businesses = await Business.findAll();

return res.json(businesses)

}));

router.get('/:businessId', asyncHandler(async (req, res) => {
    const business = await Business.findByPk(req.params.id);
    return res.json(business)
}));


module.exports = router;
