const express = require('express');
const router = express.Router();
const Controller = require('./controller')

router.post(`/data`,Controller.postHello);
router.get(`/greeting/:name`,Controller.greeting);


module.exports = router;
