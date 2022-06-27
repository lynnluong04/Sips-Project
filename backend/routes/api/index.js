// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./business.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/business', businessRouter);


module.exports = router;
