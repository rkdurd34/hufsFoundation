const express = require('express');
const router = express.Router();
const board = require('../controllers/board.controllers');

router.post('/upload', board.uploadBoard);
router.get('/board', board.boardList);
router.get('/post', board.getBoard);
// router.post('/programblock', chatbot.programBlock);
// router.post('/datablock', chatbot.dataBlock);
// router.post('/confirmblock', chatbot.confirmBlock);

// router.post('/childdata', chatbot.checkChildData);
// router.post('/parentname', chatbot.checkParentName);

// router.use('/', trackingChatbot);

module.exports = router;