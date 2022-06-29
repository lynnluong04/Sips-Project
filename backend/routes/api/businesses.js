const express = require('express');
const asyncHandler = require('express-async-handler');
const { Business } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
const businesses = await Business.findAll();
return res.json(businesses)
}));

router.post('/new', asyncHandler(async function (req, res) {
      const business = await Business.create(req.body);
      return res.json(business)
    })
  );

router.get('/:businessId', asyncHandler(async (req, res) => {
    const business = await Business.findByPk(req.params.id);
    return res.json(business)
}));

router.put('/:businessId', asyncHandler(async (req, res) => {
    const update = await Business.update(req.body, {
      where: {id:req.body.id}
    })

    const business = await Business.findByPk(req.params.businessId);
    return res.json(business)
}));

router.delete('/:businessId', asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.businessId);
  await business.destroy()
  return res.json({message: "success"})
}));

module.exports = router;
