const dayjs = require('dayjs');
const createError = require('http-errors');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
module.exports = {
  uploadBoard: async (req, res, next) => {
    try {
      // upload.single('img');
      console.log('으잉');
      // console.log(req.upload.single('img'));
      console.log(req.body);
      console.log(req.file);
      console.log(req.files);
      console.log(res.test);

      res.status(200).json({ fileName: req.file.filename });
    } catch (err) {
      next(err);
    }
  }
};