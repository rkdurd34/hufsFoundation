const dayjs = require('dayjs');
const createError = require('http-errors');
const db = require('../utils/database');
const mime = require('mime');
const fs = require('fs');
const path = require('path');


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
        forum_post(title,content, is_notice,author_no,board_no,status)
        VALUES(?,?,?,?,?,?)
      `, [title, content, is_notice, author_id, board_id, status]);
      const post_id = result.insertId;
      req.files.forEach(async (file) => {
        const result = await db.query(`
          INSERT INTO 
          forum_file(post_no, post_file, name)
          VALUES(?,?,?)`
          , [post_id, file.path, file.originalname]);
      });

      res.status(200).json({ fileName: '' });
    } catch (err) {
      next(err);
    }
  },
  boardList: async (req, res, next) => {
    try {
      const board_no = req.query.board_no;

      const [result] = await db.query(`
        SELECT *
        FROM forum_post 
        WHERE 
        enabled = 1
      `);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  },
  getBoard: async (req, res, next) => {
    try {
      const post_no = req.query.post_no;

      const [result] = await db.query(`
      SELECT * 
      FROM forum_post
      WHERE 
      no = ?
      `, [post_no]);
      res.status(200).json(result[0]);
    } catch (e) {
      next(e);
    }
  },
  fileList: async (req, res, next) => {
    try {
      const post_no = req.query.post_no;

      const [result] = await db.query(`
      SELECT * 
      FROM forum_file
      WHERE post_no = ?
      `, [post_no]);

      res.json(result);
    } catch (e) {
      next(e);
    }
  },
  fileDownload: async (req, res, next) => {
    try {
      const post_no = req.query.post_no;
      const [result] = await db.query(`
      SELECT * 
      FROM forum_file
      WHERE post_no = ?
      `, [post_no]);
      result.map(file => {

        const hooah = path.basename(file.post_file);
        mimetype = mime.lookup(hooah);
        var newFileName = encodeURIComponent(file.name);

        // res.writeHead(200, {
        //   'Content-Disposition': 'attachment;filename=' + "hooah"
        // });
        // res.setHeader('Content-Disposition', 'attachment;filename*=UTF-8\'\'' + newFileName);
        res.setHeader("Content-Disposition", "attachment;filename=" + encodeURI("테스트 한글.hwp"));
        res.setHeader('Content-type', mimetype);

        const filestream = fs.createReadStream(file.post_file);
        filestream.pipe(res);

        console.log(res.name, '여기야?');
      });

    } catch (e) {
      next(e);
    }
  }


};