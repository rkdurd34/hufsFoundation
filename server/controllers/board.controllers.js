const dayjs = require('dayjs');
const createError = require('http-errors');
const db = require('../utils/database');
module.exports = {
  uploadBoard: async (req, res, next) => {
    try {
      const title = req.body.title;
      const is_notice = (req.body.is_notice === false) ? 0 : 1;
      const board_id = req.body.board_id;
      const author_id = req.body.author_id;
      const content = req.body.content;
      const status = req.body.status;
      const [result] = await db.query(`
        INSERT INTO
        forum_post(title,content, is_notice,author_id,board_id,status)
        VALUES(?,?,?,?,?,?)
      `, [title, content, is_notice, author_id, board_id, status]);
      const post_id = result.insertId;
      req.files.forEach(async (file) => {
        const result = await db.query(`
          INSERT INTO 
          forum_file(post_id, post_file, name)
          VALUES(?,?,?)`
          , [post_id, file.path, file.originalname]);
      });

      res.status(200).json({ fileName: '바보' });
    } catch (err) {
      next(err);
    }
  }
};