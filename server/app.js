require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
// const passport = require('passport');
// const passportConfig = require('./passport/index');
const multer = require('multer');
const app = express();


app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("media"));
app.use(morgan('dev'));

const upload = multer({ dest: 'media/img' });
app.post("/board/upload", upload.array('docs'));

app.use('/board', require('./routes/board.routes'));

app.use((req, res, next) => {
  next(createError.NotFound('요청하신 페이지를 찾을 수 없습니다.'));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.send({ err });
});

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));