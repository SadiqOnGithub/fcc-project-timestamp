const express = require('express');
const { inputTimeParser, currentTimeParser } = require('../controller/timestampController');
const router = express.Router();

router.get("/", currentTimeParser);

router.get("/:date", inputTimeParser);


module.exports = router;