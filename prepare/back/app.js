const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const db = require('./models');
const passportConfig = require('./passport');

const dmReouter = require('./routes/directMessage');
const dmsReouter = require('./routes/directMessages');
const userRouter = require('./routes/user');

db.sequelize.sync(

)
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

dotenv.config();
const app = express();
app.io = require('socket.io')();

passportConfig();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());



app.get('/', (req, res) => {
  res.send('hello express');
})

app.use('/user', userRouter);
app.use('/directMessage', dmReouter);
app.use('/directMessages', dmsReouter);

app.listen(3085, () => {
  console.log('mydiscord server listening');
})
