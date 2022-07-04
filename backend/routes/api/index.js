// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./businesses.js')
const reviewsRouter = require('./reviews.js')
const imageRouter = require('./images.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/businesses', businessRouter);

router.use('/reviews', reviewsRouter );

router.use('/images', imageRouter );


module.exports = router;
