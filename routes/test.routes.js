const express = require('express');
const router = express.Router();
const test = require('../controllers/test');

router.get('', test.test);
// router.post('/programblock', chatbot.programBlock);
// router.post('/datablock', chatbot.dataBlock);
// router.post('/confirmblock', chatbot.confirmBlock);

// router.post('/childdata', chatbot.checkChildData);
// router.post('/parentname', chatbot.checkParentName);

// router.use('/', trackingChatbot);

module.exports = router;